function TaskList(props) {
  const { innerRef, ...rest } = props;
  return (
    <>
      <div ref={innerRef} {...rest} className="tasks-container">
        {props.children}
      </div>
    </>
  );
}

export default TaskList;
