import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (session) {
    redirect("/");
  }
  return (
    <section className="bg-accent flex flex-1 flex-col justify-center py-8 md:py-14">
      <div className="container">
        <div className="dark:bg-background mx-auto space-y-6 rounded-lg bg-white px-4 py-6 shadow-lg md:w-7/12 xl:w-5/12">
          {children}
        </div>
      </div>
    </section>
  );
}
