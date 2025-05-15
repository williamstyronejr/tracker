import UserButton from "./UserButton";

import type { User } from "better-auth";

export default function Navbar({ user }: { user: User }) {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-between px-4 py-4">
      <nav className="">
        <ul className="flex space-x-4">
          <li>
            <a href="/habits" className="text-blue-500 hover:underline">
              Habits
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row justify-between">
        <UserButton
          name={user.name || user.email || ""}
          imgSrc={user.image || ""}
        />
      </div>
    </div>
  );
}
