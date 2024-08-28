import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  wW2Era?: string;
  miriFieldExperiencesDamage?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propBackgroundColor,
  propAlignSelf,
  wW2Era,
  propMinWidth,
  miriFieldExperiencesDamage,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundColor, propAlignSelf]);

  const wW2EraStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-2 text-left text-base text-black-900 font-inter ${className}`}
    >
      <button
        className="cursor-pointer [border:none] py-2 px-[69px] bg-royalblue-200 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-dodgerblue-200"
        style={frameButtonStyle}
      >
        <div
          className="relative text-base leading-[24px] font-semibold font-inter text-black-950 text-left inline-block min-w-[73px]"
          style={wW2EraStyle}
        >
          {wW2Era}
        </div>
      </button>
      <div className="self-stretch relative leading-[24px]">
        {miriFieldExperiencesDamage}
      </div>
    </div>
  );
};

export default FrameComponent;
