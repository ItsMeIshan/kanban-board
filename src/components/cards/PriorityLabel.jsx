function PriorityLabel(props) {
  return (
    <div
      className={`rounded-[4px] px-1.5 py-1 text-xs ${
        props?.priority == "Low"
          ? "text-[#D58D49]"
          : props?.priority == "High"
          ? "text-[#D8727D]"
          : "text-[#68B266]"
      }`}
      style={{
        backgroundColor:
          props?.priority == "Low"
            ? "rgba(223, 168, 116, 0.2)"
            : props?.priority == "High"
            ? "rgba(216, 114, 125, 0.1)"
            : "rgba(131, 194, 157, 0.2)",
      }}
    >
      {props?.priority == "Low"
        ? "Low"
        : props?.priority == "High"
        ? "High"
        : "Completed"}
    </div>
  );
}

export default PriorityLabel;
