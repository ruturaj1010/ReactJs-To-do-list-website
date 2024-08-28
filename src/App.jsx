import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App () {
  const [todo, SetTodo] = useState( "" );
  const [todos, SetTodos] = useState( [] );

  const handleEdit = () => {

  }

  const handleDelete = (e , id) => {

    let newTodos = todos.filter(item=>{
      return item.id!=id;
    })
    SetTodos(newTodos)
    console.log(newTodos);
  }

  const handleAdd = () => {
    SetTodos( [...todos, {id:uuidv4(), todo, isCompleted: false }] )
    SetTodo( "" );
  }

  const handleChange = ( e ) => {
    SetTodo( e.target.value )
  }

  const handleCheckbox = (e) => {
    let id = e.target.name

    let index = todos.findIndex(item =>{
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted 
    SetTodos(newTodos)
  }
  

  return (
    // 47:27
    <>
      <Navbar />

      <div className="mx-24 my-10 mb-16 p-3 bg-purple-200 rounded-xl min-h-[80vh] relative top-10">
        <div className="addTodo my-5 mx-4">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={ handleChange } value={ todo } type="text" className="w-1/2" />
          <button onClick={ handleAdd } className="text-sm font-semibold bg-teal-500 hover:bg-cyan-400 py-1 px-2 ml-3 rounded-md">Add</button>
        </div>
        <h2 className="text-center font-bold text-lg">Your To do list</h2>
        <div className="todos">
          { todos.map( item => {
            return <div key={ item.id } className="todo flex my-3 w-2/2 justify-between mx-4">
              <input onChange={ handleCheckbox } type="checkbox" name={item.id} />
              <div className={ item.isCompleted ? "line-through" : "" }>{ item.todo }</div>
              <div className="buttons">
                <button onClick={ handleEdit } className="text-sm font-semibold bg-teal-500 hover:bg-cyan-400 py-1 px-2 ml-4 rounded-md">Edit</button>
                <button onClick={ (e)=>{handleDelete(e , item.id)} } className="text-sm font-semibold bg-teal-500 hover:bg-cyan-400 py-1 px-2 ml-4 rounded-md">Delete</button>
              </div>
            </div>
          } ) }
        </div>
      </div>

    </>
  )
}

export default App
