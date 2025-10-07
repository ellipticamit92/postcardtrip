import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ItineraryType } from "@/lib/types";
import { Clock, Star } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ItinerariesProps {
  data: ItineraryType[];
}

export const Itineraries: FC<ItinerariesProps> = ({ data }) => {
  return (
    <Accordion type="multiple" defaultValue={["day-1"]} className="space-y-4">
      {data?.map((day) => (
        <AccordionItem
          key={day.day}
          value={`day-${day.day}`}
          className="border rounded-lg shadow-soft overflow-hidden"
        >
          <AccordionTrigger className="bg-gradient-hero text-white px-3 py-4 hover:no-underline hover:bg-linear-to-r hover:from-ocean-dark hover:to-adventure-dark transition-all duration-300">
            <div className="flex items-center gap-4 text-left">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                {day.day}
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Day {day.day}: {day.title}
                </h3>
                <p className="text-white/80 text-sm font-normal mt-1">
                  {/* {day.arrivalText} */}
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-0 pb-0">
            <div className="p-6 space-y-6">
              <div
                className=" max-w-none text-[16px]"
                dangerouslySetInnerHTML={{
                  __html: day?.details ?? "",
                }}
              />
              {/* Hotel Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  Your Accommodation
                </h4>
                {/* <div className="grid md:grid-cols-2 gap-6 p-4 rounded-lg bg-muted/30">
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="w-full h-48 object-cover">
                      {/* <Image
                        src={day.hotel.image}
                        alt={day.hotel.name}
                        fill={true}
                      /> 
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2">
                      {day.hotel.name}
                    </h5>
                    <div className="flex items-center gap-2 mb-3">
                      {Array.from({ length: day.hotel.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-adventure text-adventure"
                        />
                      ))}
                      <span className="text-sm text-muted-foreground">
                        ({day.hotel.rating}.0)
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {day.hotel.amenities.map((amenity, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Activities Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-adventure rounded-full"></div>
                  Today's Activities
                </h4>
                <div className="space-y-4">
                  {/* {day.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="grid md:grid-cols-4 gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300"
                    >
                      <div className="relative rounded-lg overflow-hidden">
                        <div className="w-full h-32 object-cover">
                          <Image
                            src={activity.image}
                            alt={activity.name}
                            fill={true}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <h6 className="font-medium text-foreground">
                            {activity.name}
                          </h6>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="text-xs flex items-center gap-1"
                            >
                              <Clock className="w-3 h-3" />
                              {activity.time}
                            </Badge>
                            <Badge className="bg-nature text-white text-xs">
                              {activity.duration}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
