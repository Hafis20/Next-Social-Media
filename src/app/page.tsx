import { prisma } from "@/lib/prisma";

export default async function Home() {
  await prisma.user
  return (
    <div className="m-4">
      Home page content
    </div>
  );
}
