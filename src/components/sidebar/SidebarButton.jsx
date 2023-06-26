import { useSelector } from "react-redux";

function SidebarButton(props) {
  const globalState = useSelector((store) => store?.globalSlice.globalState);
  return (
    <div
      className={`sidebar-button-container ${
        props?.toBeHidden === undefined && globalState?.isSidebarOpen
          ? ""
          : "lg:hidden"
      }`}
    >
      <div className={`${"sidebar-icon"}`}>
        <img className="h-6 w-6" src={props?.icon} alt="" />
      </div>
      <span className="font-normal text-base text-[#787486]">
        {props?.text}
      </span>
    </div>
  );
}

export default SidebarButton;
