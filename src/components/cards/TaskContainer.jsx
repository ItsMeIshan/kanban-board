import { Avatar, AvatarGroup } from "@mui/material";
import PriorityLabel from "./PriorityLabel";
import { folderIcon, messagesIcon, userIcon } from "../../utils/constants";
import { useWindowSize } from "@uidotdev/usehooks";

function TaskContainer(props) {
  const { innerRef, ...rest } = props;
  const { width } = useWindowSize();
  return (
    <div
      ref={innerRef}
      className="bg-white p-4 my-2 rounded-2xl w-[95%]"
      {...rest}
    >
      <div className="flex justify-between mb-2">
        <PriorityLabel priority={props?.priority} />
        <span>...</span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-1.5">{props.taskTitle}</h3>
        {!(props?.description == "") ? (
          <span className="text-xs text-[#787486] font-light">
            {props?.description}
          </span>
        ) : (
          <div className="flex justify-center w-[90%]">
            {props?.assets?.map((item, idx) => {
              if (width < 370) {
                if (idx < 1) {
                  return (
                    <img key={idx} width={"90%"} src={item} alt="asset image" />
                  );
                } else {
                  return;
                }
              }
              return (
                <img key={idx} width={"90%"} src={item} alt="asset image" />
              );
            })}
          </div>
        )}
        <div className="flex justify-between sm:justify-center items-center mt-6">
          <div className="avatar-group">
            <AvatarGroup className="mr-1" total={props?.taskMembers?.length}>
              {props?.taskMembers?.map((item, idx) => {
                return (
                  <Avatar
                    key={idx}
                    sx={{ width: 20, height: 20 }}
                    alt={item}
                    src={userIcon}
                  />
                );
              })}
            </AvatarGroup>
          </div>
          <div className="flex">
            <div className="flex mr-2">
              <div className="mr-1">
                <img className="h-4 w-4" src={messagesIcon} alt="" />
              </div>
              <span className="text-[#787486] text-xs">
                {props?.commentsCount} comments
              </span>
            </div>
            <div className="flex">
              <div className="mr-1">
                <img className="h-4 w-4" src={folderIcon} alt="" />
              </div>
              <span className="text-[#787486] text-xs">
                {props?.filesCount} files
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
