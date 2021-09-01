import React from "react";

interface IComponentProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalComp: React.FC<IComponentProps> = ({ toggle }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto md:hidden"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-0 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">
          &#8203;
        </span>

        <div className="flex flex-col w-56 p-5 bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white w-full">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:text-left">
                <div className="flex flex-row justify-center space-x-4">
                  <div className="cursor-pointer">
                    <img
                      src="./facebook.png"
                      className="h-8"
                      alt="share-logo"
                    />
                  </div>
                  <div className="cursor-pointer ">
                    <img src="./twitter.png" className="h-8" alt="share-logo" />
                  </div>
                  <div className="cursor-pointer ">
                    <img
                      src="./pinterest.png"
                      className="h-8"
                      alt="share-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={() => toggle(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalComp;
