import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <SignIn 
        appearance={{
          elements: {
            card: "bg-card text-card-foreground border border-border shadow-md rounded-lg",
            headerTitle: "text-2xl font-semibold",
            socialButtonsBlockButton: "w-full mb-4",
            formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
          }
        }} 
      />
    </div>
  );
}
