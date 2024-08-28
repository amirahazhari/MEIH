import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";

const HistoricalTimeline: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start py-0 px-5 box-border leading-[normal] tracking-[normal] mq725:gap-4 mq1050:gap-8">
      <main className="w-[1040px] flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px] text-center text-13xl text-cornflowerblue-100 font-inter">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[239px] max-w-[260px]">
          <div className="self-stretch h-[248px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-2">
              <a className="[text-decoration:none] self-stretch relative tracking-[-0.02em] leading-[48px] italic font-bold text-[inherit] mq450:text-lgi mq450:leading-[29px] mq1000:text-7xl mq1000:leading-[38px]">
                1910
              </a>
              <button className="cursor-pointer [border:none] py-[15.5px] px-6 bg-cornflowerblue-100 self-stretch rounded-tl-xl rounded-tr-none rounded-b-none overflow-hidden flex flex-row items-center justify-center hover:bg-cornflowerblue-200">
                <a className="[text-decoration:none] flex-1 relative text-sm tracking-[-0.5px] italic font-medium font-inter text-jordy-blue-50 text-center">
                  Discovery
                </a>
              </button>
            </div>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/frame-427319160.svg"
            />
          </div>
          <div className="self-stretch rounded-t-none rounded-br-none rounded-bl-xl bg-cornflowerblue-400 flex flex-col items-start justify-start gap-8 text-left text-5xl text-jordy-blue-800 mq450:gap-4">
            <div className="self-stretch flex flex-col items-start justify-start pt-6 px-6 pb-0">
              <div className="self-stretch border-gray border-b-[1px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-3.5">
                <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[36px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px]">
                  Discovery of Malaysia's First Oil Well
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-6 pb-[329px] gap-6 text-base text-black-950 mq725:pb-[214px] mq725:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="self-stretch rounded bg-cornflowerblue-300 flex flex-row items-center justify-center py-2 px-5">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[37px]">
                    1910
                  </div>
                </div>
                <div className="self-stretch relative leading-[24px] text-black-900">
                  Shell discovers Malaysia's first oil well, Miri No. 1, on
                  Canada Hill in Miri, Sarawak.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="rounded bg-cornflowerblue-300 flex flex-row items-center justify-center py-2 px-[39px] whitespace-nowrap">
                  <div className="relative leading-[24px] font-semibold">
                    1910 (December)
                  </div>
                </div>
                <div className="self-stretch relative leading-[24px] text-black-900">
                  Miri No. 1 begins production, yielding 83 barrels per day.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[239px] max-w-[260px] text-royalblue-100">
          <div className="self-stretch h-[248px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-2">
              <i className="self-stretch relative tracking-[-0.02em] leading-[48px] font-bold mq450:text-lgi mq450:leading-[29px] mq1000:text-7xl mq1000:leading-[38px]">
                1929 - 1945
              </i>
              <button className="cursor-pointer [border:none] py-[15.5px] px-6 bg-royalblue-100 self-stretch overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-dodgerblue-100">
                <a className="[text-decoration:none] flex-1 relative text-sm tracking-[-0.5px] italic font-medium font-inter text-jordy-blue-50 text-center">
                  Peak Production
                </a>
              </button>
            </div>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/frame-427319160-1.svg"
            />
          </div>
          <div className="self-stretch bg-royalblue-300 flex flex-col items-start justify-start pt-0 px-0 pb-[313px] gap-8 text-left text-5xl text-jordy-blue-800 mq450:gap-4 mq450:pb-[132px] mq450:box-border mq1000:pb-[203px] mq1000:box-border">
            <div className="self-stretch flex flex-col items-start justify-start pt-6 px-6 pb-0">
              <div className="self-stretch border-gray border-b-[1px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-[50px]">
                <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[36px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px]">
                  Peak Production at Miri Field
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 px-6 pb-6 gap-4 text-base text-black-950">
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="self-stretch rounded bg-royalblue-200 flex flex-row items-center justify-center py-2 px-5">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[39px]">
                    1929
                  </div>
                </div>
                <div className="self-stretch relative leading-[24px] text-black-900">
                  Production at Miri field peaks at 15,000 barrels per day.
                </div>
              </div>
              <FrameComponent
                wW2Era="WW2 Era"
                miriFieldExperiencesDamage="Miri field experiences damage and decline due to scorched earth policies and bombings."
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[239px] max-w-[260px] text-mediumslateblue-100">
          <div className="self-stretch h-[248px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-2">
              <i className="self-stretch relative tracking-[-0.02em] leading-[48px] font-bold mq450:text-lgi mq450:leading-[29px] mq1000:text-7xl mq1000:leading-[38px]">
                1950s - 1960s
              </i>
              <div className="self-stretch bg-mediumslateblue-100 overflow-hidden flex flex-row items-center justify-center py-[15.5px] px-6 text-sm text-jordy-blue-50">
                <a className="[text-decoration:none] flex-1 relative tracking-[-0.5px] italic font-medium text-[inherit]">
                  Expansion
                </a>
              </div>
            </div>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/frame-427319160-2.svg"
            />
          </div>
          <div className="self-stretch bg-mediumslateblue-400 flex flex-col items-start justify-start gap-8 text-left text-5xl text-jordy-blue-800 mq450:gap-4">
            <div className="self-stretch flex flex-col items-start justify-start pt-6 px-6 pb-0">
              <div className="self-stretch border-gray border-b-[1px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-3.5">
                <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[36px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px]">
                  Expansion of Activities in Borneo
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 px-6 pb-6 gap-4 text-base text-black-950">
              <FrameComponent
                propBackgroundColor="rgba(51, 61, 207, 0.3)"
                propAlignSelf="stretch"
                wW2Era="1950s"
                propMinWidth="48px"
                miriFieldExperiencesDamage="No drilling activities occur elsewhere in Borneo or Malaya."
              />
              <FrameComponent
                propBackgroundColor="rgba(51, 61, 207, 0.3)"
                propAlignSelf="stretch"
                wW2Era="1960s"
                propMinWidth="48px"
                miriFieldExperiencesDamage="Petroleum activities expand in Borneo with the discovery and development of offshore fields. Shell, followed by Esso, dominates upstream production, downstream refining, and sales."
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="rounded bg-mediumslateblue-300 flex flex-row items-center justify-center py-2 px-[63px] whitespace-nowrap">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[86px]">
                    Late 1960s
                  </div>
                </div>
                <div className="self-stretch relative leading-[24px] text-black-900">
                  Foreign petroleum companies explore offshore Peninsular
                  Malaysia and Esso and Conoco receive concessions for oil and
                  gas exploration off the east coast of the Peninsular.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[239px] max-w-[260px] text-darkslateblue-100">
          <div className="self-stretch h-[248px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-2">
              <i className="self-stretch relative tracking-[-0.02em] leading-[48px] font-bold mq450:text-lgi mq450:leading-[29px] mq1000:text-7xl mq1000:leading-[38px]">
                1974 - Current
              </i>
              <div className="rounded-tl-none rounded-tr-xl rounded-b-none bg-darkslateblue-100 overflow-hidden flex flex-row items-center justify-center py-[15.5px] px-[49px] whitespace-nowrap text-sm text-jordy-blue-50 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <a className="[text-decoration:none] relative tracking-[-0.5px] italic font-medium text-[inherit]">{`Establishment & Authority`}</a>
              </div>
            </div>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/frame-427319160-3.svg"
            />
          </div>
          <div className="self-stretch rounded-t-none rounded-br-xl rounded-bl-none bg-darkslateblue-300 flex flex-col items-start justify-start pt-0 px-0 pb-[17px] gap-8 text-left text-5xl text-jordy-blue-800 mq450:gap-4">
            <div className="self-stretch flex flex-col items-start justify-start pt-6 px-6 pb-0">
              <div className="self-stretch border-gray border-b-[1px] border-solid flex flex-row items-start justify-start pt-0 px-0 pb-3.5">
                <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[36px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px]">{`Establishment & Authority of PETRONAS`}</h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 px-6 pb-6 text-base text-black-950">
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="self-stretch rounded bg-darkslateblue-200 flex flex-row items-center justify-center py-2 px-5">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[37px]">
                    1974
                  </div>
                </div>
                <div className="self-stretch relative leading-[24px] text-black-900">
                  <p className="m-0">
                    Due to the various influential economic and political
                    factors, alongside the rise of economic nationalism in
                    Malaysia leading to the implementation of the New Economic
                    Policy (NEP), PETRONAS was established in 1974 under the
                    Petroleum Development Act 1974 (PDA 1974).
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    In accordance with the Petroleum Development Act 1974 (PDA
                    1974), Malaysia maintains complete authority and control
                    over all petroleum resources within its territory and
                    possesses the ability to enforce its jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoricalTimeline;
