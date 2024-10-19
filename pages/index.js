import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import SearchTasks from "./components/SearchTasks";
import { Search } from "lucide-react";
import Image from "next/image";
import taskGIF from "../public/task.gif";
import Head from "next/head";

export async function getServerSideProps() {
  const tasks = [
    {
      id: 1,
      title: "Hero section",
      description: "Create a hero section...",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Typography change",
      description: "Modify typography...",
      priority: "medium",
      completed: false,
    },
    {
      id: 3,
      title: "Color scheme update",
      description: "Update color scheme...",
      priority: "low",
      completed: false,
    },
  ];

  return { props: { initialTasks: tasks } };
}

export default function Home({ initialTasks }) {
  const [taskList, setTaskList] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Load tasks from local storage or fallback to initial tasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks && savedTasks.length > 0) {
      setTaskList(savedTasks);
      setFilteredTasks(savedTasks);
    } else {
      setTaskList(initialTasks);
      setFilteredTasks(initialTasks);
    }
  }, [initialTasks]);

  // Save tasks to local storage whenever taskList changes
  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  }, [taskList]);

  //Add task
  const addTask = (newTask) => {
    const updatedTasks = [...taskList, newTask];
    setTaskList(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  // Edit task
  const saveTask = (updatedTask) => {
    const updatedTasks = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedTasks);
    setFilteredTasks(updatedTasks);
    setTaskToEdit(null);
  };

  // Toggle task completion
  const toggleCompletion = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task); // Open modal for editing with the selected task's data
  };

  // Handle search functionality
  const handleSearch = (query) => {
    if (query) {
      const filtered = taskList.filter(
        (task) =>
          task.title.toLowerCase().includes(query.toLowerCase()) ||
          task.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(taskList); // Reset to original list when query is cleared
    }
  };

  // Delete task
  const deleteTask = (taskId) => {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <>
      <Head>
        <title>TaskTrek</title>
        <meta name="description" content="A simple and efficient task manager with priority-based organization." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <>
      <div className="main">
        <h1 id="heading">TaskTrek</h1>
        <p id="heading-description">
          Track your tasks and manage efficiently...
        </p>
        <Image
          src={taskGIF}
          className="hero-image"
          alt="TaskTrek"
        />
      </div>
      <div className="search-container">
        <Search size={24} className="search-icon" />
        <SearchTasks onSearch={handleSearch} />
        <AddTaskModal
          onAddTask={addTask}
          taskToEdit={taskToEdit}
          onSaveTask={saveTask}
        />
      </div>
      <div className="container">
        <TaskList
          addTask={addTask}
          tasks={filteredTasks}
          onEditTask={handleEditTask}
          onToggleCompletion={toggleCompletion}
          onDeleteTask={deleteTask}
        />
      </div>
    </>
    </>
  );
}
