import './App.css';
import Header from './myComponents/Header';
import CreateTodo from './myComponents/CreateTodo';
import TodoList from './myComponents/TodoList';
import Listfooter from './myComponents/Listfooter'
import React, { useState, useEffect } from 'react';

function App() {
  // getting list in localstorage
  // let localTodos = localStorage.getItem("todos")
  // parsing it into object
  // let parsedTodo = JSON.parse(localTodos)
  // this is just for frontend menter screenshot
  const defaultList = [
    {
      id: 0,
      text: "Complete online JavaScript course",
      completed: true
    },
    {
      id: 1,
      text: "jog around the pard",
      completed: false
    },
    {
      id: 2,
      text: "10 minute meditation",
      completed: false
    },
    {
      id: 3,
      text: "read for 1 hour",
      completed: false
    },
    {
      id: 4,
      text: "Pick up groceries",
      completed: false
    },
    {
      id: 5,
      text: "Complete Todo App on FrontEnd Mentor",
      completed: false
    }
  ]
  // localStorage.setItem("todos",defaultList)

  // this is for challenge purpose
  const [listItems, setlist] = useState(defaultList)
  // const [listItems, setlist] = useState(parsedTodo)  // if you want have local storage
  const [filteredList, setfilteredList] = useState(listItems)
  const [theme, settheme] = useState("dark")
  // useEffect will run after rendering the DOM, so rendered list is stored in local storage.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listItems))
  }, [listItems])
  return (
    <div className={theme === "dark" ? "Todo-app" : "Todo-app light"}>
      <Header settheme={settheme} />
      <CreateTodo listItems={listItems} setlist={setlist} setfilteredList={setfilteredList}/>
      <TodoList listItems={listItems} setlist={setlist}
        filteredList={filteredList} setfilteredList={setfilteredList} />
      <Listfooter listItems={listItems} setlist={setlist}
        filteredList={filteredList} setfilteredList={setfilteredList} />
    </div>
  );
}

export default App;
