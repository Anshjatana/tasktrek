import {
  Ban,
  ClipboardPlus,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AddTaskModal({ onAddTask, taskToEdit, onSaveTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setIsEditMode(true);
      setIsOpen(true);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      description,
      priority,
      completed: taskToEdit ? taskToEdit.completed : false,
    };

    if (isEditMode) {
      onSaveTask(newTask);
    } else {
      onAddTask(newTask);
    }

    setTitle("");
    setDescription("");
    setPriority("low");
    setIsOpen(false); // Close the modal after adding the task
    setIsEditMode(false);
  };

  return (
    <>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        Add task <ClipboardPlus size={16} />
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditMode ? "Edit Task" : "Add New Task"}</h2>
            <form onSubmit={handleSubmit} className="add-task">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Hero section update"
                required
              />
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="To add decent background image on the hero section..."
                required
              />
              <label>Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <div className="modal-button-container">
                <button
                  type="button"
                  id="cancel-btn"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel <Ban size={16} />
                </button>
                <button type="submit">
                  {isEditMode ? "Save Task" : "Add Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
