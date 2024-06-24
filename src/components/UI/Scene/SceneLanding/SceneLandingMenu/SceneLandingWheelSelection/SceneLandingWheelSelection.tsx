import { IoCaretBackOutline } from "react-icons/io5";

import { TbWheel } from "react-icons/tb";
import { iconColor, iconSize } from "../../../../../../lib/constants/constants";
import { useCarWheelStore } from "../../../../../../lib/zustandstores/carWheelStore";
import { useSelectedCarStore } from "../../../../../../lib/zustandstores/selectedCarStore";
import { useUIStore } from "../../../../../../lib/zustandstores/uiStore";
import "./SceneLandingWheelSelection.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";

const SceneLandingPaintSelection = () => {
  const { setWheel } = useCarWheelStore();
  const { selectedCar } = useSelectedCarStore();
  const { isInWheelSelection, toggleWheelSelection } = useUIStore();

  return (
    <>
      {isInWheelSelection ? (
        <>
          <Carousel
            className="paint-sample-container"
            opts={{
              align: "start",
              dragFree: true,
            }}
          >
            <button onClick={toggleWheelSelection} className="ui-btn">
              <IoCaretBackOutline color={iconColor} size={iconSize} />
            </button>
            <CarouselContent className="paint-samples gap-2 m-2">
              {selectedCar.wheels.map((wheel, index) => {

                return(
                <CarouselItem
                  key={index}
                  
                  className=" p-5 cursor-pointer rounded-full whitespace-nowrap w-[45px] h-[45px] hover:scale-105 active:scale-50 transition-all"
                  onClick={() => {setWheel(wheel)}}
                  aria-label={`Change the current color to ${wheel.name}.`}
                >{wheel.name}</CarouselItem>
              //   <button key={index} onClick={() => {setWheel(wheel);console.log(wheel)}}>{`${wheel.name}`}</button>
               )})}
            </CarouselContent>
          </Carousel>
        </>
      ) : (
        <button onClick={toggleWheelSelection} className="ui-btn">
          <TbWheel color={iconColor} size={iconSize} />
        </button>
      )}
    </>
  );
};

export default SceneLandingPaintSelection;
