import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import { stringify, v4 as uuidv4 } from 'uuid';

function App () {
  const [todo, SetTodo] = useState( "" );
  const [todos, SetTodos] = useState( [] );
  const [showFinished, setShowFinished] = useState( true )

  useEffect( () => {
    let todoString = localStorage.getItem( "todos" )
    if ( todoString ) {
      let todos = JSON.parse( todoString );
      SetTodos( todos );
    }
  }, [] )


  const saveToLS = () => {
    localStorage.setItem( "todos", JSON.stringify( todos ) );
  }

  useEffect(()=>{
    saveToLS();
  }, [todos]);

  const toggleFinished = ( e ) => {
    setShowFinished( !showFinished )
  }

  const handleEdit = ( id ) => {
    let t = todos.find( item => item.id === id );
    if(t) SetTodo( t.todo );
    let newTodos = todos.filter( item => {
      return item.id !== id;
    } )
    SetTodos( newTodos );
    saveToLS();
  }

  const handleDelete = ( id ) => {

    let newTodos = todos.filter( item => {
      return item.id !== id;
    } )
    SetTodos( newTodos )
    saveToLS();
  }

  const handleSave = () => {
    if ( todo.trim() === "" ) {
      alert( "You cannot add empty list" );
      return
    }
    SetTodos( [...todos, { id: uuidv4(), todo, isCompleted: false }] )
    SetTodo( "" );
    saveToLS();
  }

  const handleChange = ( e ) => {
    SetTodo( e.target.value )
  }

  const handleCheckbox = ( e ) => {
    let id = e.target.name

    let index = todos.findIndex( item => {
      return item.id === id;
    } )

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    SetTodos( newTodos )
    saveToLS();
  }


  return (
    <>
      <Navbar />

      <div className="mx-auto my-10 mb-16 p-3 bg-purple-200 rounded-xl min-h-[80vh] relative top-10 w-5/6">
        <h1 className="mx-4 font-bold ">Priority - Manage your daily tasks</h1>
        <div className="addTodo my-5 m-auto w-5/6">
          <h2 className="text-xl font-bold text-center mb-2">Add a Todo</h2>
          <input onChange={ handleChange } value={ todo } type="text" className="w-9/12 px-2 rounded-md" />
          <button onClick={ handleSave } className="text-sm font-semibold bg-teal-500 hover:bg-cyan-400 py-1 px-2 ml-3 rounded-md">Save</button>
          <div className="flex gap-1 my-3">
            <input onChange={ toggleFinished } type="checkbox" checked={ showFinished } /> <span>Show Finished</span>
          </div>
        </div>

        <h2 className="text-center text-xl font-bold">Your To do list</h2>
        <div className="todos">
          { todos.length == 0 && <div className="text-center my-6 font-bold text-xl">No todo's to display</div> }
          { todos.map( item => {
            return ( showFinished || !item.isCompleted ) && <div key={ item.id } className="todo flex my-3 w-5/6 items-center justify-between m-auto bg-pink-300 p-1 px-3 rounded-md">
              <div className="flex gap-6">
                <input onChange={ handleCheckbox } type="checkbox" name={ item.id } checked={ item.isCompleted } />
                <div className={ item.isCompleted ? "line-through" : "" }>{ item.todo }</div>
              </div>
              <div className="buttons flex h-full flex-wrap">
                <button onClick={ () => { handleEdit(item.id ) } } className="text-sm font-semibold m-1 bg-teal-500 hover:bg-cyan-400 py-1 px-2 ml-4 rounded-md">Edit</button>
                <button onClick={ () => { handleDelete( item.id ) } } className="text-sm font-semibold m-1 bg-teal-500 hover:bg-cyan-400 py-1 px-2 ml-4 rounded-md">Delete</button>
              </div>
            </div>
          } ) }
        </div>
      </div>

    </>
  )
}

export default App;