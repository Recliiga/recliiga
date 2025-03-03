
import React from 'react';
import { AppSidebar } from "@/components/AppSidebar";

const AddEvent: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Add Event</h1>
        <p>Add a new event here.</p>
      </div>
    </div>
  );
};

export default AddEvent;
