import Image from "next/image";
import { FunctionComponent } from "react";
import useLayout from "./hooks/useLayout";

const Sidebar: FunctionComponent = (): JSX.Element => {
  const { clicked, setClicked } = useLayout();
  return (
    <div className="min-h-full h-full absolute w-40 right-0 flex justify-end z-30">
      <div className="relative auto-rows-[auto auto] grid-flow-row h-full min-h-full w-fit justify-between content-between grid pr-1 pt-1 pb-1 sm:pr-4 sm:pt-6 sm:pb-6">
        <div className="relative w-fit row-start-1 h-full place-self-end">
          <div
            className="cursor-empireS relative hidden sm:flex"
            onClick={() => setClicked(!clicked)}
          >
            <Image width={50} height={40} src="/images/heartbar.gif" priority />
          </div>
          <div
            className="cursor-empireS relative flex sm:hidden"
            onClick={() => setClicked(!clicked)}
          >
            <Image width={35} height={25} src="/images/heartbar.gif" priority />
          </div>
          {clicked && (
            <div className="absolute text-base font-alber text-offWhite text-right -top-2 right-16 sm:text-base text-xs sm:right-3 sm:top-auto">
              Did you <br />
              expect this <br />
              to go somewhere?
            </div>
          )}
        </div>
        <div className="relative w-fit row-start-2 h-full">
          <div className="cursor-empireS relative h-fit w-fit hidden sm:flex">
            <Image
              width={50}
              height={20}
              src="/images/f3mstatic.gif"
              priority
            />
          </div>
          <div className="cursor-empireS relative h-fit w-fit sm:hidden flex">
            <Image
              width={35}
              height={13}
              src="/images/f3mstatic.gif"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
