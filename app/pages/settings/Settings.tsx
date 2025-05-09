import type { Route } from "./+types/settings";

import { Link } from "react-router";

function AccountSettings() {
  return (
    <div className="flex flex-col flex-nowrap gap-8">
      <div className="border borde-slate-200 rounded-md px-4 py-2">
        <h2 className="text-lg font-semibold">Email</h2>
      </div>

      <div className="flex flex-col flex-nowrap gap-8">
        <div className="pb-2 border-b">
          <h3 className="text-3xl">Data</h3>
        </div>

        <div className="">
          <div className="pb-4">
            <h2 className="text-lg font-semibold">Delete Data</h2>
            <p>
              Deleting your data will remove all data associated with it. This
              action cannot be undone.
            </p>
          </div>

          <div className="flex flex-row flex-nowrap">
            <button className="border border-red-500 hover:bg-red-300/20 rounded-md px-4 py-2">
              Delete Data
            </button>
          </div>
        </div>

        <div className="">
          <div className="pb-4">
            <h2 className="text-lg font-semibold">Delete Account</h2>
            <p>
              Deleting your account will remove all data associated with it.
            </p>
          </div>

          <div className="flex flex-row flex-nowrap">
            <button className="border border-red-500 hover:bg-red-300/20 rounded-md px-4 py-2">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage({ params }: Route.ComponentProps) {
  return (
    <section>
      <header className="mb-6 border-b border-slate-200">
        <h1 className="font-bold text-xl py-4">Settings</h1>

        <div className="md:flex md:flex-row  md:gap-4">
          <Link to="/settings/account">Account</Link>
          <Link to="/settings/data">Data</Link>
        </div>
      </header>

      <div>{params.panel === "account" && <AccountSettings />}</div>
    </section>
  );
}
