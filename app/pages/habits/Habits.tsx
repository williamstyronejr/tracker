import { useState } from "react";
import DateScroller from "./DateScroller";
import Checkbox from "~/components/Checkbox";
import NoteIcon from "~/icons/NoteIcon";

import type { Route } from "./+types/Habits";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

function MonthlyView({
  tasks = [
    "task1",
    "task2",
    "task3",
    "task4",
    "task5",
    "task6",
    "task7",
    "task8",
    "task9",
    "task10",
    "task11",
    "task12",
    "task13",
    "task14",
    "task15",
    "task16",
    "task17",
    "task18",
    "task19",
    "task20",
  ],
  days,
}: {
  tasks?: [];
  days: number;
}) {
  return (
    <div>
      <div className="h-[calc(100vh-200px)] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="text-center border-r border-gray-400 w-16">Day</th>
              <th
                className="text-center border-gray-400"
                colSpan={tasks.length}
              >
                Habit
              </th>
              <th className="text-center border-gray-400 w-16">Notes</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: days }, (_, i) => (
              <tr key={`monthly-row-${i + 1}`}>
                <td className="text-center border-r border-gray-400 w-16">
                  {i + 1}
                </td>

                {tasks.map((task) => (
                  <td key={`task-${task}`}>
                    <Checkbox onClick={() => {}} />
                  </td>
                ))}

                <td className="w-16 flex justify-center items-center">
                  <Dialog>
                    <DialogTrigger className="flex justify-center items-center">
                      <NoteIcon />
                    </DialogTrigger>

                    <DialogContent>
                      <DialogTitle>Notes</DialogTitle>

                      <DialogDescription>
                        <div>sample notes for now!!!</div>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="flex flex-col flex-nowrap w-full overflow-y-auto">
        {Array.from({ length: days }, (_, i) => (
          <div
            className="flex flex-row flex-nowrap w-full"
            key={`monthly-row-${i + 1}`}
          >
            <div className="border-r border-gray-400 shrink-0">{i + 1}</div>

            <div key={i} className="flex flex-row flex-nowrap grow">
              {tasks.map((task) => (
                <div className="" key={`task-${task}`}>
                  <Checkbox onClick={() => {}} />
                </div>
              ))}
            </div>

            <div className="shrink-0">
              <Dialog>
                <DialogTrigger>
                  <NoteIcon />
                </DialogTrigger>

                <DialogContent>
                  <DialogTitle>Notes</DialogTitle>

                  <DialogDescription>
                    <div>sample notes for now!!!</div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

function DailyView({
  tasks = [
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
    "task1",
    "task2",
  ],
  currDate,
  setCurrDate,
}: {
  tasks?: [];
  currDate: Date;
  setCurrDate: (date: Date) => void;
}) {
  return (
    <div className="">
      <DateScroller selectedDate={currDate} setSelectedDate={setCurrDate} />

      <div className="flex flex-row flex-wrap gap-4">
        {tasks.map((task) => (
          <div
            key={`task-${task}`}
            className="w-44 h-32 px-4 py-2 rounded-md bg-slate-500/10"
          >
            <div className="flex flex-row flex-nowrap justify-between">
              <div className="">1</div>

              <div className="text-right">
                <Checkbox onClick={() => {}} />
              </div>
            </div>

            <div>
              <div className="">{task}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getDaysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export default function HabitsPage({ params }: Route.ComponentProps) {
  const { mode } = params;
  const [currDate, setCurrDate] = useState(new Date());

  return (
    <section className="">
      <header>
        <h1 className="text-xl font-semibold">Habits</h1>
      </header>

      <div>
        {/* <DailyView currDate={currDate} setCurrDate={setCurrDate} /> */}
        <MonthlyView days={getDaysInMonth(currDate)} />
      </div>
    </section>
  );
}

/**
 * Pages to add
 * - Habits Page
 *  - List View
 *  - Monthly View
 *  - Square View? (Clickable boxes for each habit)
 * -
 */
