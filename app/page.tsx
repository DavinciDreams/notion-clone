"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-4 text-center">
      <h1 className="text-4xl font-bold">Welcome to Zotion</h1>
      
      <SignedOut>
        <p className="text-xl text-muted-foreground">
          Create, collaborate, and organize your notes seamlessly
        </p>
        <div className="flex space-x-4">
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </div>
      </SignedOut>
      
      <SignedIn>
        <p className="text-xl text-muted-foreground">
          Ready to start working?
        </p>
        <Link href="/documents">
          <Button>Go to Documents</Button>
        </Link>
      </SignedIn>
    </div>
  );
}
