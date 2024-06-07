import React, { useState } from 'react'

function Sample() {
    const[todos,setTodos] = useState(data);
    const[id,setId] = useState(null);
    const[title,setTitle] = useState(" ")
    const[description,setDescription] = useState(" ")
    const[status,setStatus] = useState(" ")
    const handleProgress = (id)=>{
           const newTodo = new type(arguments); todos.map((todo)=>{
                if(todo.id===id) return{...todo,status: "Completed"}
                else return{...todo}
            })
            setTodos(newTodo)
    }
    const handlePending = (id)=>{
           const newTodo = new type(arguments); todos.map((todo)=>{
                if(todo.id===id) return{...todo,status: "Progress"}
                else return{...todo}
            })
            setTodos(newTodo)
    }
    const handleDelete = (id) =>{
        const newTodo = todos.filter((todo)=>(todo.id!==id))
        setTodos(newTodo)
    }
    const handleAdd =(title,description,status)=>{
        if(title!=="" && description!=="" && status===' "Pendind" | "Progress" | "Completed" '){
            const newTodo = {
                title  :title,
                description : description,
                status : status
            }
            setTodos(newTodo)
        }
        else {
            alert("Enter all fields")
        }
    }
    const handleUpdate = (id) =>{
        const newUpdate = todos.find((todo)=>(todo.id===id))
        setId(id)
        setTitle(newUpdate.title)
        setDescription(newUpdate.description)
        setStatus(newUpdate.status)
    }
    const handleInputUpdate =() =>{
        if(title!=="" && description!==""){
            const newTodo = todos.map((todo)=>{
                if(todo.id===id) return{...todo,title: title,description: description}
            })
            setTodos(newTodo)
        }
        else{
            alert("Fill the entire fields")
        }
    }
  return (
    <div>
        <h3>ToDo Application</h3>
        <input type='text' value={value} onChange={(e)=>setTitle(e.target.value)}/>
        <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <select value={status} onChange={(e)=>setStatus(e.target.value)}>
           <option>select any one</option>
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <button onClick={()=>handleAdd(title,description,status)}>ADD</button>
        <button onClick={()=>handleInputUpdate()}>UPDATE</button>
      {todos.map((todo)=>(
        <div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>
                {todo.status==="Completed" && <button>Done</button>}
                {todo.status==="Progress" && <button onClick={()=>handleProgress(todo.id)}>Progress</button>}
                {todo.status==="Pending" && <button onClick={()=>handlePending(todo.id)}>Pending</button>}
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                <button onClick={()=>handleUpdate(todo.id)}>Update</button>
            </div>
        </div>
      ))}
    </div>
  )
}
const data = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, Bread, Eggs, Butter, Fruits",
      dueDate: "2024-06-10",
      status: "Pending",
    },
    {
      id: 2,
      title: "Finish project report",
      description: "Complete the final section and proofread",
      dueDate: "2024-06-12",
      status: "Progress",
    },
    {
      id: 3,
      title: "Schedule dentist appointment",
      description: "Routine check-up and cleaning",
      dueDate: "2024-06-15",  
      status: "Pending",
    },
    {
      id: 4,
      title: "Call plumber",
      description: "Fix the leaky faucet in the kitchen",
      dueDate: "2024-06-11",
      status: "Completed",
    },
    {
      id: 5,
      title: "Plan weekend trip",
      description: "Research destinations and book accommodation",
      dueDate: "2024-06-13",
      status: "Pending",
    },
  ];

export default Sample
