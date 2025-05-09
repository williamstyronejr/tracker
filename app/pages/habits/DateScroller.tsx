import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { daysInMonth } from "~/utils/dates";

export default function DateScroller({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}) {
  const [days, setDays] = useState(daysInMonth(selectedDate));

  const currentDay = selectedDate.getDate();

  return (
    <div className="">
      <Carousel
        className="w-full mx-auto max-w-lg"
        opts={{
          align: "start",
          startIndex: Math.max(currentDay - 3, 0),
        }}
      >
        <CarouselContent className="">
          {Array.from({ length: days }, (_, i) => (
            <CarouselItem className="basis-[auto] ml-4">
              <button
                onClick={() =>
                  setSelectedDate(
                    new Date(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth(),
                      i + 1
                    )
                  )
                }
                className={`px-4 py-2 rounded-md ${
                  currentDay === i + 1 ? "bg-sky-500" : "bg-slate-300"
                }`}
              >
                <div className="font-bold">{i + 1}</div>
                <div className=""></div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
