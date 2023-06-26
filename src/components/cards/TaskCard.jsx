import { Draggable } from "react-beautiful-dnd";
import TaskContainer from "./TaskContainer";

function TaskCard(props) {
  return (
    <Draggable key={props.id} draggableId={props?.id} index={props.index}>
      {(provided) => {
        return (
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            {...props}
          />
        );
      }}
    </Draggable>
  );
}

export default TaskCard;
