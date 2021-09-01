import React from "react";
import { Parallax } from "@react-spring/parallax";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import ModalComp from "./components/Modal";
const App: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div>
      {modalOpen && <ModalComp toggle={setModalOpen} />}
      <nav className="fixed z-50 top-0 left-0 w-full px-6 h-auto">
        <div className="bg-white bg-opacity-100 shadow-md rounded-2xl px-5 py-5 flex flex-wrap justify-between items-center">
          <div className="flex flex-row justify-center items-center">
            <span className="object-contain">
              <img
                src="./Volkswagen_logo_2019.png"
                alt="vw-logo"
                className="h-10"
              />
            </span>
            <h2 className="font-extrabold text-xl text-center">
              {" "}
              &nbsp; Volkswagen
            </h2>
          </div>
          <div className="hidden lg:flex-row lg:justify-between lg:space-x-5 sm:hidden md:flex md:flex-row lg:flex">
            <div className="cursor-pointer mr-5">
              <img src="./facebook.png" className="h-8" alt="share-logo" />
            </div>
            <div className="cursor-pointer mr-5">
              <img src="./twitter.png" className="h-8" alt="share-logo" />
            </div>
            <div className="cursor-pointer mr-5">
              <img src="./pinterest.png" className="h-8" alt="share-logo" />
            </div>
            <div className="cursor-pointer mr-5">
              <img src="./instagram.png" className="h-8" alt="share-logo" />
            </div>
          </div>
          <div
            className="object-contain cursor-pointer xl:hidden lg:hidden md:hidden"
            onClick={() => setModalOpen((current) => !current)}>
            <img src="./share.png" className="h-8" alt="share-logo" />
          </div>
        </div>
      </nav>
      <Parallax pages={2} className="block absolute">
        <Welcome />
        <Features />
        {/* <Products /> */}
      </Parallax>
    </div>
  );
};
export default App;
