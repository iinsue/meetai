"use client";

import { toast } from "sonner";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Better auth 로그인 테스트용 임시 코드
export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignup = () => {
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: () => {
          toast.error("Something went wrong");
        },
        onSuccess: () => {
          toast.success("Sign up Success");
        },
      },
    );
  };

  const onSignin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          toast.error("Something went wrong");
        },
        onSuccess: () => {
          toast.success("Sign in Success");
        },
      },
    );
  };

  if (session) {
    return (
      <div className="mx-auto flex h-screen max-w-md flex-col justify-center gap-4 p-4">
        <p>로그인된 사용자: {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>로그아웃</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-screen max-w-md flex-col items-center justify-center gap-4">
      <div className="w-full space-y-2">
        <header>
          <p>회원가입 테스트</p>
        </header>

        <Input
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button onClick={onSignup}>회원가입</Button>
      </div>

      <div className="w-full space-y-2">
        <header>
          <p>로그인 테스트</p>
        </header>

        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button onClick={onSignin}>로그인</Button>
      </div>
    </div>
  );
}
