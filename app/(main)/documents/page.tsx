"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function DocumentsPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Welcome, {user?.firstName || 'User'}
        </h1>
        <Button variant="outline" className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Create a new document
        </Button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for document list */}
          <div className="border rounded-lg p-4 text-center text-muted-foreground">
            No documents yet. Create your first one!
          </div>
        </div>
      </div>
    </div>
  );
}
