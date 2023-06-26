import {
  editTitle,
  copyLink,
  addTask,
  filterIcon,
  calendarIcon,
  arrowDown,
  peopleIcon,
  moreItems,
  tabsIcon,
} from "../utils/constants";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import TasksContainerCard from "../components/cards/TasksContainerCard";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  editProjectConfig,
  handleDoneChange,
  handleOnProgressChange,
  handleTodoChange,
} from "../utils/projectsSlice";
import { useWindowSize } from "@uidotdev/usehooks";

function ProjectPreview() {
  const selectedProjectState = useSelector(
    (store) => store?.projectsSlice?.selectedProjectState
  );
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const inviteAvatarStyles = {
    width: width < 370 ? 20 : 30,
    height: width < 370 ? 20 : 30,
  };
  const [todoTasks, setTodoTasks] = useState([]);
  const [onProgressTasks, setOnProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  function modifyTasks(
    sourceIndex,
    destinationIndex,
    sourceList,
    destinationList
  ) {
    const sourceListCopy = Array.from(sourceList);
    const [removedTask] = sourceListCopy.splice(sourceIndex, 1);
    const destinationListCopy = Array.from(destinationList);
    destinationListCopy.splice(destinationIndex, 0, removedTask);
    return [sourceListCopy, destinationListCopy];
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }
    if (destination.droppableId == "col-todo") {
      if (source.droppableId == "col-onProgress") {
        const [newOnProgressTasks, newTodoTasks] = modifyTasks(
          source.index,
          destination.index,
          onProgressTasks,
          todoTasks
        );
        setTodoTasks(newTodoTasks);
        setOnProgressTasks(newOnProgressTasks);
        dispatch(handleTodoChange(newTodoTasks));
        dispatch(handleOnProgressChange(newOnProgressTasks));
      }
      if (source.droppableId == "col-done") {
        const [newDoneTasks, newTodoTasks] = modifyTasks(
          source.index,
          destination.index,
          doneTasks,
          todoTasks
        );
        setTodoTasks(newTodoTasks);
        setDoneTasks(newDoneTasks);
        dispatch(handleTodoChange(newTodoTasks));
        dispatch(handleDoneChange(newDoneTasks));
      }
    }
    if (destination.droppableId == "col-onProgress") {
      if (source.droppableId == "col-todo") {
        const [newTodoTasks, newOnProgressTasks] = modifyTasks(
          source.index,
          destination.index,
          todoTasks,
          onProgressTasks
        );
        setTodoTasks(newTodoTasks);
        setOnProgressTasks(newOnProgressTasks);
        dispatch(handleTodoChange(newTodoTasks));
        dispatch(handleOnProgressChange(newOnProgressTasks));
      }
      if (source.droppableId == "col-done") {
        const [newDoneTasks, newOnProgressTasks] = modifyTasks(
          source.index,
          destination.index,
          doneTasks,
          onProgressTasks
        );
        setDoneTasks(newDoneTasks);
        setOnProgressTasks(newOnProgressTasks);
        dispatch(handleDoneChange(newDoneTasks));
        dispatch(handleOnProgressChange(newOnProgressTasks));
      }
    }
    if (destination.droppableId == "col-done") {
      if (source.droppableId == "col-todo") {
        const [newTodoTasks, newDoneTasks] = modifyTasks(
          source.index,
          destination.index,
          todoTasks,
          doneTasks
        );
        setTodoTasks(newTodoTasks);
        setDoneTasks(newDoneTasks);
        dispatch(handleTodoChange(newTodoTasks));
        dispatch(handleDoneChange(newDoneTasks));
      }
      if (source.droppableId == "col-onProgress") {
        const [newOnProgressTasks, newDoneTasks] = modifyTasks(
          source.index,
          destination.index,
          onProgressTasks,
          doneTasks
        );
        setOnProgressTasks(newOnProgressTasks);
        setDoneTasks(newDoneTasks);
        dispatch(handleOnProgressChange(newOnProgressTasks));
        dispatch(handleDoneChange(newDoneTasks));
      }
    }
    dispatch(editProjectConfig());
  };

  useEffect(() => {
    const projectFound = selectedProjectState?.selectedProject;
    setTodoTasks(projectFound?.tasks?.todo);
    setOnProgressTasks(projectFound?.tasks?.onProgress);
    setDoneTasks(projectFound?.tasks?.done);
    return () => {
      setTodoTasks([]);
      setOnProgressTasks([]);
      setDoneTasks([]);
    };
  }, [selectedProjectState?.selectedProject]);
  return (
    <>
      <div className="project-preview-container">
        <div className="project-hero-section">
          <div className="flex items-center sm:flex-wrap">
            <h2
              className={` sm:text-4xl ${
                width < 370 ? "text-base" : "text-5xl"
              } font-medium`}
            >
              {selectedProjectState?.selectedProject?.title}
            </h2>
            <div className="mx-3.5 sm:mx-1.5 sm:mt-1.5">
              <img className="h-6 w-6" src={editTitle} alt="pencil" />
            </div>
            <div className="sm:mt-1.5">
              <img className="h-6 w-6" src={copyLink} alt="link" />
            </div>
          </div>
          <div className="flex items-center sm:mt-6">
            <div>
              <img className="h-6 w-6" src={addTask} alt="plus icon" />
            </div>
            <span className="text-[#5030E5] text-base font-medium mx-3">
              Invite
            </span>
            <AvatarGroup
              componentsProps={{
                additionalAvatar: {
                  sx: {
                    fontSize: `${width < 370 ? "12px" : "16px"}`,
                    color: "#D25B68",
                    height: width < 370 ? 20 : 30,
                    width: width < 370 ? 20 : 30,
                    background: "#F4D7DA",
                  },
                },
              }}
              total={6}
            >
              <Avatar
                sx={inviteAvatarStyles}
                alt="Remy Sharp"
                src="/avatar-1.png"
              />
              <Avatar
                sx={inviteAvatarStyles}
                alt="Travis Howard"
                src="/avatar-2.png"
              />
              <Avatar
                sx={inviteAvatarStyles}
                alt="Agnes Walker"
                src="/avatar-3.png"
              />
              <Avatar
                sx={inviteAvatarStyles}
                alt="Trevor Henderson"
                src="/avatar-4.png"
              />
            </AvatarGroup>
          </div>
        </div>
        <div className="project-util-section">
          <div className="flex">
            <div className="dropdown-btn mr-2">
              <div>
                <img
                  className="h-4 w-4 sm:h-3 sm:w-3"
                  src={filterIcon}
                  alt="beaker"
                />
              </div>
              <span className="mx-2 text-[#787486] text-base sm:text-sm">
                Filter
              </span>
              <div>
                <img
                  className="h-4 w-4 sm:h-3 sm:w-3"
                  src={arrowDown}
                  alt="arrow down"
                />
              </div>
            </div>
            <div className="dropdown-btn">
              <div>
                <img className="h-4 w-4" src={calendarIcon} alt="calendar" />
              </div>
              <span className="mx-2 text-[#787486] text-base sm:text-sm">
                Today
              </span>
              <div>
                <img
                  className="h-4 w-4 sm:h-3 sm:w-3"
                  src={arrowDown}
                  alt="arrow down"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="pr-2 border-r border-[#787486]">
              <div className="dropdown-btn">
                <div className="mr-2">
                  <img
                    className="h-4 w-4 sm:h-3 sm:w-3"
                    src={peopleIcon}
                    alt="people"
                  />
                </div>
                <span className="text-[#787486] text-base sm:text-sm">
                  Share
                </span>
              </div>
            </div>
            <div className="mx-2 more-items">
              <img className="h-8 w-8 sm:h-6 sm:w-6" src={tabsIcon} alt="" />
            </div>
            <div className="more-items">
              <img src={moreItems} alt="" />
            </div>
          </div>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="project-tasks-container-section">
            <TasksContainerCard
              type="todo"
              color="#5030E5"
              tasks={todoTasks}
              id={"col-todo"}
            />
            <TasksContainerCard
              type="onProgress"
              color="#FFA500"
              tasks={onProgressTasks}
              id={"col-onProgress"}
            />
            <TasksContainerCard
              type="Done"
              color="#8BC48A"
              tasks={doneTasks}
              id={"col-done"}
            />
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default ProjectPreview;
