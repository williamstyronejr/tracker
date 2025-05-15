import { Link, useNavigate } from "react-router";
import { signOut } from "~/lib/auth.client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function UserButton({
  imgSrc,
  name,
}: {
  imgSrc: string;
  name: string;
}) {
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
          <div className="flex flex-row items-center gap-2">
            <img
              className="w-6 h-6 bg-sky-500 rounded-md"
              src={imgSrc}
              alt="User Profile"
            />
            <p className="text-sm font-medium">{name}</p>
          </div>

          <hr className="mt-4 mb-2" />
        </div>

        <div className="pt-2">
          <Link className="" to="/settings/account">
            <DropdownMenuItem className="w-full px-2">
              Settings
            </DropdownMenuItem>
          </Link>

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
