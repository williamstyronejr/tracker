import { Link } from "react-router";
import type { Route } from "./+types/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Habit Tracker" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage() {
  return (
    <section>
      <header className=""></header>

      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </section>
  );
}
