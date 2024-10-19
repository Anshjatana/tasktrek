import { BookmarkCheck, Pencil, Trash2 } from "lucide-react";

const Task = ({
  task,
  onEditTask,
  onToggleCompletion,
  query,
  onDeleteTask,
}) => {
  const highlightText = (text, query) => {
    if (!query) return text;
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const startIndex = lowerText.indexOf(lowerQuery);

    if (startIndex === -1) return text; // No match found, return text as-is

    const beforeMatch = text.slice(0, startIndex);
    const match = text.slice(startIndex, startIndex + query.length);
    const afterMatch = text.slice(startIndex + query.length);

    return (
      <>
        {beforeMatch}
        <mark>{match}</mark>
        {afterMatch}
      </>
    );
  };

  return (
    <div
      className={`task ${task.priority} ${
        task.completed ? "completed-task" : ""
      }`}
    >
      <div className="task-heading">
        <h3
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {highlightText(task.title, query)} {/* Highlight title */}
        </h3>
        <div>
          <button onClick={() => onEditTask(task)}>
            <Pencil size={18} style={{ margin: "0 4px" }} />
          </button>
          <button onClick={() => onToggleCompletion(task.id)}>
            <BookmarkCheck size={18} style={{ margin: "0 4px" }} />
          </button>
          <button onClick={() => onDeleteTask(task.id)}>
            <Trash2 size={18} style={{ margin: "0 4px", color: "red" }} />
          </button>
        </div>
      </div>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {highlightText(task.description, query)} {/* Highlight description */}
      </p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default Task;
