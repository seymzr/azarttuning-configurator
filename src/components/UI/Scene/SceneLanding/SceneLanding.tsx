import { BiSolidDetail } from "react-icons/bi";
import { iconColor, iconSize } from "../../../../lib/constants/constants";
import { useUIStore } from "../../../../lib/zustandstores/uiStore";
import "./SceneLanding.css";
import SceneLandingHeader from "./SceneLandingHeader/SceneLandingHeader";
import SceneLandingCarSelection from "./SceneLandingMenu/SceneLandingCarSelection/SceneLandingCarSelection";
import SceneLandingPaintSelection from "./SceneLandingMenu/SceneLandingPaintSelection/SceneLandingPaintSelection";
import SceneLandingWheelSelection from "./SceneLandingMenu/SceneLandingWheelSelection/SceneLandingWheelSelection";

const SceneLanding = () => {
  const {
    isInCarSelection,
    isInPaintSelection,
    isInWheelSelection,
    isUIVisible,
    setIsInShowcaseMenu,
    toggleUI,
  } = useUIStore();

  const UIHandler = () => {
    setIsInShowcaseMenu(true);
    if (!isUIVisible) {
      toggleUI();
    }
  };

  return (
    <div className="main-ui-container">
      <SceneLandingHeader />
      <div className="scene-landing-menu">
        {!isInPaintSelection && <SceneLandingCarSelection />}
        {!isInCarSelection && <SceneLandingPaintSelection />}
        {<SceneLandingWheelSelection />}
        {!isInCarSelection && !isInPaintSelection  && (
          <button className="ui-btn" onClick={() => UIHandler()}>
            <BiSolidDetail color={iconColor} size={iconSize} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SceneLanding;
