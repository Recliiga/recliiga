
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface Event {
  id: string;
  date: string;
  time: string;
  location: string;
  team1: { name: string; avatar: string; color: string };
  team2: { name: string; avatar: string; color: string };
  rsvp_deadline: Date;
  status: string | null;
  league: string;
  hasResults: boolean;
  spotsLeft?: number;
}

interface EventCardProps {
  event: Event;
  showLeagueName?: boolean;
}

const CountdownClock = ({ deadline }: { deadline: Date }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="text-xs text-gray-500 flex space-x-2">
      <span>{timeLeft.days}d</span>
      <span>{timeLeft.hours}h</span>
      <span>{timeLeft.minutes}m</span>
    </div>
  );
};

export const EventCard = ({ event, showLeagueName = false }: EventCardProps) => {
  const [attendanceStatus, setAttendanceStatus] = useState(event.status || null);
  const isRsvpOpen = event.rsvp_deadline && new Date() < event.rsvp_deadline;
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  const handleAttend = async () => {
    try {
      await supabase
        .from('event_rsvps')
        .upsert({ 
          event_id: event.id,
          player_id: user?.id,
          status: 'attending'
        });
      setAttendanceStatus('attending');
      setIsEditing(false);
      toast.success('Successfully RSVP\'d to event');
    } catch (error) {
      toast.error('Failed to update RSVP status');
    }
  };

  const handleDecline = async () => {
    try {
      await supabase
        .from('event_rsvps')
        .upsert({ 
          event_id: event.id,
          player_id: user?.id,
          status: 'declined'
        });
      setAttendanceStatus('declined');
      setIsEditing(false);
      toast.success('Successfully declined event');
    } catch (error) {
      toast.error('Failed to update RSVP status');
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-xs text-gray-500 mr-4">{event.date}</span>
            <span className="text-xs text-gray-500 mr-4">{event.time}</span>
            <MapPin className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-xs text-gray-500">{event.location}</span>
          </div>
          {attendanceStatus === 'attending' && !isEditing && (
            <Badge variant="secondary" className="bg-[#FF7A00] bg-opacity-20 text-[#FF7A00] text-xs">
              Attending
            </Badge>
          )}
          {attendanceStatus === 'declined' && !isEditing && (
            <Badge variant="secondary" className="bg-red-100 text-red-600 text-xs">
              Declined
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-3 items-center justify-items-center mb-4">
          <div className="flex flex-col items-center">
            <Avatar className="w-16 h-16" style={{ backgroundColor: event.team1.color }}>
              <AvatarImage src={event.team1.avatar} alt={event.team1.name} />
              <AvatarFallback>{event.team1.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold mt-2">{event.team1.name}</span>
          </div>
          <span className="text-lg font-semibold">vs</span>
          <div className="flex flex-col items-center">
            <Avatar className="w-16 h-16" style={{ backgroundColor: event.team2.color }}>
              <AvatarImage src={event.team2.avatar} alt={event.team2.name} />
              <AvatarFallback>{event.team2.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold mt-2">{event.team2.name}</span>
          </div>
        </div>

        {showLeagueName && (
          <div className="absolute bottom-4 left-4 text-xs">
            <span className="font-bold text-[#FF7A00]">{event.league}</span>
          </div>
        )}

        <div className="flex justify-center mt-2 space-x-2">
          <Button 
            variant="outline" 
            className="text-[#FF7A00] border-[#FF7A00] hover:bg-[#FF7A00] hover:text-white transition-colors"
          >
            {event.hasResults ? "View Results" : "View Details"}
          </Button>
        </div>

        {isRsvpOpen && (
          <>
            <div className="flex justify-center mt-2 space-x-2">
              {(isEditing || !attendanceStatus) && (
                <>
                  <Button 
                    className="bg-[#FF7A00] text-white hover:bg-[#FF7A00]/90"
                    onClick={handleAttend}
                  >
                    Attend
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={handleDecline}
                  >
                    Decline
                  </Button>
                </>
              )}
              {attendanceStatus && !isEditing && (
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit RSVP
                </Button>
              )}
            </div>
            <div className="flex justify-end items-center mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">RSVP in:</span>
                <CountdownClock deadline={event.rsvp_deadline} />
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export const UpcomingEvents = ({ events }: { events: Event[] }) => {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Button variant="link" className="text-[#FF7A00] hover:text-[#FF7A00]/90">
          View all
        </Button>
      </div>
      <div className="space-y-4">
        {events?.map(event => (
          <EventCard key={event.id} event={event} showLeagueName={true} />
        ))}
      </div>
    </section>
  );
};
