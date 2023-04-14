import Head from "next/head";
import {
  Squares2X2Icon,
  DocumentTextIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const DeskPage = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full fixed top-0 left-0 flex items-center justify-center mt-16 z-10"></div>
      <span>
        <div className="flex h-full flex-row">
          <div className="flex flex-col flex-none pt-16 px-2 bg-gray-200 min-w-[256px]">
            <div className="flex-none">
              <div className="flex items-center mb-4 w-full py-2 px-4 bg-gray-300 text-purple-600 font-semibold text-sm rounded">
                <Squares2X2Icon className="w-5 h-5" />
                <div className="ml-2 py-2">Dashboard</div>
              </div>

              <div className="flex flex-col mb-1 text-sm font-semibold">
                <div className="flex items-center justify-between rounded">
                  <div className="flex items-center justify-center py-2 pl-4 text-gray-500">
                    <DocumentTextIcon className="h-5 w-5" />
                    <div className="ml-2 py-2">Scripts</div>
                    <div className="mt-1 ml-2"></div>
                  </div>
                  <div className="flex items-center pr-4 text-gray-500 font-semibold transition duration-150 ease-in-out">
                    <PlusIcon className="h-5 w-5 hover:scale-125 transition duration-150 ease-in-out" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-grow pb-16 px-8 overflow-y-auto bg-white"></div>
        </div>
      </span>
    </div>
  );
};

export default DeskPage;
