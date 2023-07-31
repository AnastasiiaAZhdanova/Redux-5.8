import styles from './App.module.css';
import {TodoList } from './components/todo-list';
import { AddTodo } from "./components/add-todo";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;