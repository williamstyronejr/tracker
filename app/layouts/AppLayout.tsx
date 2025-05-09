import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";

export default function AppLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="flex-grow bg-gray-100 p-4">
        <Outlet />
      </main>
    </>
  );
}
