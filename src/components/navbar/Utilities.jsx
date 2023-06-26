import {
  calendarIcon,
  messageQuestion,
  notificationIcon,
} from "../../utils/constants";

function HeaderUtilities() {
  return (
    <div className="header-utilities">
      <div className="mr-2">
        <img className="h-6 w-6" src={calendarIcon} alt="calendar" />
      </div>
      <div className="mr-2">
        <img className="h-6 w-6" src={messageQuestion} alt="messaging" />
      </div>
      <div className="mr-2">
        <img className="h-6 w-6" src={notificationIcon} alt="bell icon" />
      </div>
    </div>
  );
}

export default HeaderUtilities;
