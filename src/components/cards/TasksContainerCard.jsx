import { addTask } from "../../utils/constants";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";
import TaskList from "./TaskList";

function TasksContainerCard(props) {
  return (
    <div className="tasks-container-card">
      {/* Title Section */}

      <div
        className={`tasks-container-card-title-section ${
          props.type == "todo" ? "justify-between" : ""
        }`}
        style={{ borderBottomColor: `${props.color}` }}
      >
        <div className="flex items-center">
          <div
            className={`rounded-md h-2 w-2`}
            style={{ backgroundColor: `${props.color}` }}
          ></div>
          <span className="font-medium text-base mx-2">
            {props.type == "todo"
              ? "To do"
              : props.type == "onProgress"
              ? "On Progress"
              : "Done"}
          </span>
          <div className="tasks-count">{props?.tasks?.length}</div>
        </div>

        {props.type == "todo" ? (
          <div className="justify-self-end">
            <img src={addTask} alt="plus" />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Tasks Cards Section */}
      <Droppable droppableId={props.id}>
        {(provided) => {
          return (
            <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
              {props?.tasks?.length > 0 ? (
                props?.tasks?.map((item, idx) => {
                  return <TaskCard key={item?.id} index={idx} {...item} />;
                })
              ) : (
                <span className="text-sm my-5">No tasks present!</span>
              )}
              {provided.placeholder}
            </TaskList>
          );
        }}
      </Droppable>
    </div>
  );
}

export default TasksContainerCard;
