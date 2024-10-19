
import Task from "./Task";

export default function TaskList({
  tasks,
  onEditTask,
  onToggleCompletion,
  onDeleteTask,
}) {
  // Separating tasks into two groups: completed and incomplete
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  // Combining incomplete tasks first, followed by completed tasks
  const sortedTasks = [...pendingTasks, ...completedTasks];

  const highPriorityTasks = sortedTasks.filter(
    (task) => task.priority === "high"
  );
  const mediumPriorityTasks = sortedTasks.filter(
    (task) => task.priority === "medium"
  );
  const lowPriorityTasks = sortedTasks.filter(
    (task) => task.priority === "low"
  );

  return (
    <div className="task-list-columns">
      <div className="task-column high">
        <div className="task-column-heading">
          <h2>
            High Priority <span style={{ color: "red" }}>&#9679;</span>{" "}
          </h2>
        </div>
        {highPriorityTasks.length ? (
          highPriorityTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEditTask={onEditTask}
              onToggleCompletion={onToggleCompletion}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <p>No high priority tasks</p>
        )}
      </div>
      <div className="task-column medium">
        <div className="task-column-heading">
          <h2>
            Medium Priority <span style={{ color: "orange" }}>&#9679;</span>
          </h2>
        </div>
        {mediumPriorityTasks.length ? (
          mediumPriorityTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEditTask={onEditTask}
              onToggleCompletion={onToggleCompletion}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <p>No medium priority tasks</p>
        )}
      </div>
      <div className="task-column low">
        <div className="task-column-heading">
          <h2>
            Low Priority <span style={{ color: "green" }}>&#9679;</span>
          </h2>
        </div>
        {lowPriorityTasks.length ? (
          lowPriorityTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEditTask={onEditTask}
              onToggleCompletion={onToggleCompletion}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <p>No low priority tasks</p>
        )}
      </div>
    </div>
  );
}

