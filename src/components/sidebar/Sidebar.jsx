import { useSelector } from "react-redux";
import {
  addProjectIcon,
  lampIcon,
  projectsConfig,
  sidebarConfig,
} from "../../utils/constants";
import SidebarButton from "./SidebarButton";

function Sidebar(props) {
  const globalState = useSelector((store) => store?.globalSlice.globalState);
  return (
    <div
      className={`sidebar-container ${
        props.desktopSidebar ? "lg:hidden" : ""
      } ${globalState?.isSidebarOpen ? "" : "hidden"}`}
    >
      <div className="border-b border-[#DBDBDB]">
        {sidebarConfig.map((data, idx) => {
          return <SidebarButton key={idx} {...data} />;
        })}
      </div>
      <div className="min-h-[10vh] overflow-auto sidebar-projects-section">
        <div className="flex justify-between items-center my-3">
          <span className="text-xs text-[#787486]">MY PROJECTS</span>
          <div>
            <img className="h-4 w-4" src={addProjectIcon} alt="" />
          </div>
        </div>
        <div>
          {projectsConfig?.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between items-baseline px-3 py-1.5 my-3"
              >
                <div className="flex items-center">
                  <div
                    className={`rounded-md h-2 w-2 mr-3`}
                    style={{ backgroundColor: `${item?.color}` }}
                  ></div>
                  <span className="font-semibold text-sm text-[#787486]">
                    {item?.title}
                  </span>
                </div>
                <span className="font-extrabold text-base">...</span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#F5F5F5] rounded-full p-2 -m-2">
            <img
              className="shadow-xl shadow-yellow-500/50"
              src={lampIcon}
              alt=""
            />
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl flex flex-col items-center">
            <span className="text-sm font-medium my-3">Thoughts Time</span>
            <span className="text-center text-xs text-[#787486] mb-2">
              We dont have any notice for you, till then you can share your
              thoughts with your peers.
            </span>
            <a
              href="#"
              className="text-sm text-center py-1.5 bg-white rounded-md w-[90%] mb-2"
            >
              Write a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
