"use client";

import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  return (
    <div className="flex items-center space-x-2">
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline">Sign In</Button>
        </SignInButton>
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </SignedOut>
      
      <SignedIn>
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: "w-8 h-8",
            }
          }} 
        />
        <SignOutButton>
          <Button variant="destructive" size="sm">
            Log Out
          </Button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
