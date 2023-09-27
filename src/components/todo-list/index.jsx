/* eslint-disable array-callback-return */
import { useSelector, useDispatch } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { useState } from "react";

import styles from "./index.module.css";

export const TodoList = () => {
    const todos = useSelector(todosSelector);
    const dispatch = useDispatch();
    const filterValue = useSelector(store => store.todo.filter)

    console.log(filterValue)

    const handleFilter = (event) => {
        dispatch({
            type: "FILTER_TODO",
            payload: { filter: event.target.value },
        });
    };

    const filteredTodos =
        filterValue === "completed"
            ? todos.filter((todo) => todo.completed === true)
            : filterValue === "complete"
            ? todos.filter((todo) => !todo.completed)
            : todos;

    return (
        <>
            <select className={styles.select} onChange={handleFilter}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="complete">Active</option>
            </select>
            <ul className={styles.list}>
                {filteredTodos.map((todo) => {
                    if (todo) {
                        return <Todo key={todo.id} todo={todo} />;
                    }
                })}
            </ul>
        </>
    );
};
