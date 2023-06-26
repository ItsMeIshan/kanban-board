import { arrowDown, userIcon } from "../../utils/constants";

function UserInfo() {
  return (
    <div className="flex items-center mr-2">
      <div className="flex flex-col mr-2">
        <h4 className="text-base text-[#0D062D] sm:text-sm user-info">
          Anima Agrawal
        </h4>
        <span className="text-sm text-[#787486] self-end sm:text-xs user-info">
          U.P, India
        </span>
      </div>
      <div className="mr-1.5">
        <img className="h-8 w-8" src={userIcon} alt="user display picture" />
      </div>
      <div>
        <img className="h-4 w-4" src={arrowDown} alt="arrow down" />
      </div>
    </div>
  );
}

export default UserInfo;
