import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center outline outline-black">
      <Button asChild size="lg">
        <Link href="/chat">Go to Chat</Link>
      </Button>
    </div>
  );
}
