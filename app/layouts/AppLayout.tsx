import { Outlet, redirect } from "react-router";
import { getSessionUser } from "~/lib/auth.client";
import Navbar from "~/components/Navbar";

import type { Route } from "./+types/AppLayout";

export async function clientLoader() {
  const user = await getSessionUser();

  if (!user) return redirect("/signin");

  return user;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function AppLayout({ loaderData }: Route.ComponentProps) {
  const user = loaderData;

  return (
    <>
      <header>
        <Navbar user={user} />
      </header>

      <main className="flex-grow bg-gray-100 p-4">
        <Outlet />
      </main>
    </>
  );
}
