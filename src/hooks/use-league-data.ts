import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { User } from '@supabase/supabase-js';
import { League, PlayerStats, Event } from '@/types/dashboard';
import { toast } from 'sonner';

export function useLeagueData(user: User | null, selectedLeagueId: string | null) {
  const [userLeagues, setUserLeagues] = useState<League[] | null>(null);
  const [allPublicLeagues, setAllPublicLeagues] = useState<League[] | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | undefined>();
  const [upcomingEvents, setUpcomingEvents] = useState<Event[] | undefined>();
  const [membershipStatus, setMembershipStatus] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchLeagues = async () => {
      try {
        if (!user) {
          console.log('No user found, skipping league fetching');
          setLoading(false);
          return;
        }

        // First, fetch all leagues visible to the user based on RLS
        const { data: visibleLeagues, error: leaguesError } = await supabase
          .from('leagues')
          .select('*');

        if (leaguesError) {
          console.error('Error fetching leagues:', leaguesError);
          throw leaguesError;
        }

        if (!visibleLeagues || !isMounted) return;

        console.log('Fetched visible leagues:', visibleLeagues);

        // Separate public and user's leagues
        const publicLeagues = visibleLeagues.filter(league => !league.is_private);
        const userOwnedLeagues = visibleLeagues.filter(league => league.owner_id === user.id);

        // Fetch memberships to identify joined leagues
        const { data: memberships, error: membershipsError } = await supabase
          .from('league_members')
          .select('league_id')
          .eq('player_id', user.id);

        if (membershipsError) {
          console.error('Error fetching memberships:', membershipsError);
          throw membershipsError;
        }

        // Create membership status map
        const membershipMap: Record<string, string> = {};
        memberships?.forEach(m => {
          membershipMap[m.league_id] = 'member';
        });
        setMembershipStatus(membershipMap);

        // Get member counts for public leagues
        const leaguesWithMemberCounts = await Promise.all(
          publicLeagues.map(async (league) => {
            const { count } = await supabase
              .from('league_members')
              .select('*', { count: 'exact', head: true })
              .eq('league_id', league.id);
            
            return {
              ...league,
              member_count: count || 0
            };
          })
        );

        // Set states
        setAllPublicLeagues(leaguesWithMemberCounts);
        
        // Combine owned and joined leagues for user leagues
        const memberLeagues = visibleLeagues.filter(league => 
          membershipMap[league.id] === 'member' || league.owner_id === user.id
        );
        setUserLeagues(memberLeagues);

      } catch (error: any) {
        console.error('Error in fetchLeagues:', error);
        toast.error('Failed to fetch leagues');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchLeagues();

    return () => {
      isMounted = false;
    };
  }, [user]);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      if (!user || !selectedLeagueId) return;

      try {
        const { data: stats } = await supabase
          .from('player_stats')
          .select('*, leagues(name)')
          .eq('player_id', user.id)
          .eq('league_id', selectedLeagueId)
          .maybeSingle();

        if (stats) {
          setPlayerStats({
            wins: stats.wins || 0,
            losses: stats.losses || 0,
            ties: stats.ties || 0,
            points: stats.points || 0,
            league: { name: stats.leagues?.name || '' }
          });
        }
      } catch (error) {
        console.error('Error fetching player stats:', error);
        toast.error('Failed to fetch player stats');
      }
    };

    fetchPlayerStats();
  }, [user, selectedLeagueId]);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      if (!selectedLeagueId) return;

      try {
        const { data: eventsData } = await supabase
          .from('events')
          .select('*, event_dates(date, start_time, end_time)')
          .eq('league_id', selectedLeagueId)
          .limit(5);

        if (eventsData) {
          const transformedEvents: Event[] = eventsData.map(event => ({
            id: event.id,
            date: event.event_dates?.[0]?.date || '',
            time: event.event_dates?.[0]?.start_time || '',
            location: event.location,
            team1: {
              name: event.team1_name || '',
              avatar: '',
              color: event.team1_color || '#000000'
            },
            team2: {
              name: event.team2_name || '',
              avatar: '',
              color: event.team2_color || '#000000'
            },
            rsvp_deadline: new Date(Date.now() + (event.rsvp_deadline_hours * 60 * 60 * 1000)),
            status: null,
            league: userLeagues?.find(league => league.id === event.league_id)?.name || '',
            hasResults: false,
            spotsLeft: event.roster_spots * event.num_teams
          }));

          setUpcomingEvents(transformedEvents);
        }
      } catch (error) {
        console.error('Error fetching upcoming events:', error);
        toast.error('Failed to fetch upcoming events');
      }
    };

    fetchUpcomingEvents();
  }, [selectedLeagueId, userLeagues]);

  const joinLeague = async (leagueId: string) => {
    if (!user) {
      toast.error('You must be logged in to join a league');
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('league_members')
        .insert({
          league_id: leagueId,
          player_id: user.id
        });

      if (insertError) throw insertError;

      // Update membership status
      setMembershipStatus(prev => ({
        ...prev,
        [leagueId]: 'member'
      }));

      // Fetch the league details
      const { data: newLeague, error: leagueError } = await supabase
        .from('leagues')
        .select('*')
        .eq('id', leagueId)
        .single();

      if (leagueError) throw leagueError;

      if (newLeague) {
        setUserLeagues(prev => prev ? [...prev, newLeague] : [newLeague]);
        toast.success('Successfully joined league');
      }

    } catch (error: any) {
      console.error('Error joining league:', error);
      toast.error(error.message || 'Failed to join league');
      throw error;
    }
  };

  return {
    userLeagues,
    allPublicLeagues,
    playerStats,
    upcomingEvents,
    membershipStatus,
    joinLeague,
    loading
  };
}
