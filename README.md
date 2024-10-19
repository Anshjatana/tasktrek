# TaskTrek - Task Manager

TaskTrek is a simple and efficient task manager that helps you manage tasks based on their priority. It allows you to add, edit, delete, and search tasks, with responsive design and task completion tracking. The tasks are persisted using local storage to survive page reloads.

## Features

### 1. **Task Priority Columns**
   - Tasks are organized into **High**, **Medium**, and **Low** priority columns.
   - Completed tasks are displayed at the bottom of their respective priority lists.
   
### 2. **Add Task Modal**
   - A button opens a modal where you can add new tasks.
   - Each task requires a title, description, and priority (high, medium, low).
   
### 3. **Edit Task Functionality**
   - Tasks can be edited by opening the same modal with pre-filled values.
   - You can modify the task's title, description, and priority.

### 4. **Delete Task**
   - Tasks can be deleted, removing them from the list permanently.

### 5. **Task Completion Toggle**
   - Mark tasks as completed by clicking the completion button.
   - Completed tasks are displayed with strikethrough and moved to the bottom of the list.

### 6. **Search Functionality**
   - You can search for tasks by title or description.
   - Tasks matching the search query are filtered and displayed.

### 7. **Persistent Storage (Local Storage)**
   - Tasks are saved to local storage, ensuring that the task list persists between page reloads.

### 8. **Responsive Design**
   - The layout is fully responsive and adapts to various screen sizes (desktop, tablet, mobile).
   - Columns stack vertically on smaller screens for better readability.

## Technologies Used

- **Next.js**: The project is built using the Next.js framework for server-side rendering and React components.
- **React**: For building interactive UI components.
- **Lucide Icons**: Used for task action icons (edit, delete, complete).
- **Local Storage**: For persisting tasks between sessions.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tasktrek.git
   ```
   2. Navigate to the project directory:
   ```bash
   cd tasktrek
   ```
   3. Install dependencies:
   ```bash
   npm install
   ```
   4. Run the development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser to see the application.
