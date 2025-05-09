import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function UserButton({ imgSrc }: { imgSrc: string }) {
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
            <div className="">Logout</div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
