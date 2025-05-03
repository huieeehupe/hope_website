"use client";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/actions/auth";
import Image from "next/image";

const SignInButton = ({ auth_provider }: { auth_provider: string }) => {
  return (
    <Button size={"lg"} variant="outline" className="text-black" onClick={() => login(auth_provider)}>
      {"   "}
      <span>
        <Image src={`/static/images/${auth_provider}.png`} alt={`${auth_provider} logo`} width={25} height={25} />
      </span>
      Login with {auth_provider}
    </Button>
  );
};
export default SignInButton;
