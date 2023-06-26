import { Outlet } from "react-router-dom";
import Header from "./navbar/Header";
import Sidebar from "./sidebar/Sidebar";
import { useSelector } from "react-redux";
import { changeSidebarState } from "../utils/globalSlice";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const { width } = useWindowSize();
  const globalState = useSelector((store) => store?.globalSlice?.globalState);
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      position: "absolute",
      zIndex: "20",
      background: "white",
      border: "none",
      top: "8%",
      padding: "0px",
      maxHeight: "90vh",
      width: "100%",
      maxWidth: "240px",
    },
  };

  const closeModal = () => {
    dispatch(changeSidebarState(false));
  };
  return (
    <div>
      <Header />
      {width < 1023 ? (
        <Modal
          className="top-[10%]"
          isOpen={globalState?.isSidebarOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Sidebar"
        >
          <Sidebar />
        </Modal>
      ) : (
        ""
      )}
      <div className="flex">
        <Sidebar desktopSidebar={true} />
        <div
          className={`outlet-container ${
            globalState?.isSidebarOpen ? "sm:-z-10" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
