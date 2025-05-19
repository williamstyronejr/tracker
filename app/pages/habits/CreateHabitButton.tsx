import { useState } from "react";
import { useFetcher } from "react-router";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export default function CreateHabitButton() {
  const fetcher = useFetcher();
  const [isOpen, setIsOpen] = useState(false);

  console.log(fetcher.data);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button>New +</button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Habit</DialogTitle>
        </DialogHeader>

        <div>
          <fetcher.Form
            method="post"
            className="flex flex-col gap-2"
            action="/api/habits/create"
          >
            <input type="text" name="name" />
            <button type="submit">Create</button>
          </fetcher.Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
