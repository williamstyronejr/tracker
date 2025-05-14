import { Link, useNavigate } from "react-router";
import { signOut } from "~/lib/auth.client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function UserButton({ imgSrc }: { imgSrc: string }) {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          className="w-6 h-6 bg-sky-500 rounded-md"
          src={imgSrc}
          alt="User Profile"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white border-none">
        <div className="pt-2">
          <Link className="" to="/settings/account">
            <DropdownMenuItem className="w-full px-2">
              Settings
            </DropdownMenuItem>
          </Link>
        </div>

        <hr className="my-4" />

        <div className="pb-2">
          <DropdownMenuItem className="px-2">
            <button
              className=""
              type="button"
              onClick={async () => {
                await signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      navigate("/");
                    },
                  },
                });
              }}
            >
              Logout
            </button>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
