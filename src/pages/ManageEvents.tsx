
import { PageLayout } from "@/components/shared/layout/PageLayout";
import { EventList } from "@/components/shared/events/EventList";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEvents } from "@/hooks/use-events";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const queryClient = new QueryClient();

function ManageEventsContent() {
  const { events, leagues, isLoading } = useEvents();
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSelectCaptains = (eventId: number) => {
    navigate(`/select-captains/${eventId}`);
  };

  const handleEditEvent = (eventId: number) => {
    toast({
      title: "Action initiated",
      description: `Editing event ${eventId}`,
    });
  };

  const handleDeleteEvent = (eventId: number) => {
    toast({
      title: "Action initiated",
      description: `Deleting event ${eventId}`,
    });
  };

  const handleEnterResults = (eventId: number) => {
    navigate(`/events/${eventId}/edit-results`);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Select onValueChange={(value) => setSelectedLeague(value === 'all' ? null : Number(value))}>
          <SelectTrigger className="w-full md:w-[300px]">
            <SelectValue placeholder="Select a league" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Leagues</SelectItem>
            {leagues?.map((league) => (
              <SelectItem key={league.id} value={league.id.toString()}>{league.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="mb-4 flex justify-end">
            <Button 
              className="bg-[#FF7A00] hover:bg-[#E66900] text-white" 
              asChild
            >
              <Link to="/add-event">
                <Plus className="mr-2 h-4 w-4" /> Create New Event
              </Link>
            </Button>
          </div>
          <EventList 
            events={events} 
            filter="upcoming" 
            leagueId={selectedLeague}
            onSelectCaptains={handleSelectCaptains}
            onEdit={handleEditEvent}
            onDelete={handleDeleteEvent}
            emptyMessage="No upcoming events found" 
          />
        </TabsContent>
        <TabsContent value="past">
          <EventList 
            events={events} 
            filter="past" 
            leagueId={selectedLeague}
            onEnterResults={handleEnterResults}
            emptyMessage="No past events found" 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function ManageEvents() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout title="Manage Events">
        <ManageEventsContent />
      </PageLayout>
    </QueryClientProvider>
  );
}
