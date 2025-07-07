"use client";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  const onSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/sign-in"),
      },
    });
  };

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <p>Logged in as {session.user.name}</p>
      <Button className="cursor-pointer" onClick={onSignOut}>
        Sign out
      </Button>
    </div>
  );
};
