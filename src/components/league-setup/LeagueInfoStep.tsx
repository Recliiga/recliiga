
import { Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const sports = [
  "American Football", "Soccer", "Aussie Rules Football", "Baseball", 
  "Basketball", "Cricket", "Field Hockey", "Futsal", "Gaelic Football", 
  "Handball", "Hurling", "Ice Hockey", "Inline Hockey", "Korfball", 
  "Lacrosse", "Netball", "Polo", "Rugby", "Sepak Takraw", 
  "Ultimate Frisbee", "Volleyball", "Water Polo"
];

export function LeagueInfoStep({ leagueData, updateLeagueData }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center text-gray-800">League Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 mb-4 relative rounded-full border-2 border-black p-1">
            <Avatar className="w-full h-full">
              <AvatarImage src="/placeholder.svg" alt="League avatar" />
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-black text-white rounded-full p-2 shadow-lg">
              <Upload size={16} />
            </div>
          </div>
          <Button variant="link" className="text-sm text-[#FF7A00] hover:underline">Upload photo</Button>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="leagueName" className="text-gray-800">League Name</Label>
            <Input
              id="leagueName"
              value={leagueData.leagueName}
              onChange={(e) => updateLeagueData({ leagueName: e.target.value })}
              placeholder="Enter league name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="sport" className="text-gray-800">Select Sport</Label>
            <Select value={leagueData.sport} onValueChange={(value) => updateLeagueData({ sport: value })}>
              <SelectTrigger id="sport" className="mt-1">
                <SelectValue placeholder="Select a sport" />
              </SelectTrigger>
              <SelectContent>
                {sports.map((sport) => (
                  <SelectItem key={sport} value={sport}>
                    {sport}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-gray-800">Privacy Setting</Label>
            <RadioGroup value={leagueData.privacySetting} onValueChange={(value) => updateLeagueData({ privacySetting: value })} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public" className="text-gray-600">Public (Anyone can join)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private" className="text-gray-600">Private (Requires approval to join)</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
