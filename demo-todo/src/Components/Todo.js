import React, { useState } from 'react';
function Todo(){
    const[todos,setTodos] = useState(data)
    const[id,setId] = useState(null)
    const[title,setTitle] = useState(" ")
    const[description,setDescription] = useState(" ")
    const[status,setStatus] = useState(" ")

    const handleProgress = (id)=>{
          const newTodo = todos.map((todo)=>{
               if(todo.id===id) return{...todo,status:"Completed"}
               else return{...todo}
          })
          setTodos(newTodo);
    }

    const handlePending =(id)=>{
        const newTodo = todos.map((todo)=>{
            if(todo.id===id) return{...todo,status:"Progress"}
            else return{...todo}
        })
        setTodos(newTodo)
    }

    const handleAdd = (title, description, status) =>{
        if(title !== " " && description!== " "){
            const newTodo = {
                id: Date.now(),
                title: title,
                description : description,
                status : status
            }
            setTodos([...todos,newTodo])
            setTitle(" ")
            setDescription(" ")
            setStatus(" ")
        }
        else{
            alert("Fill the required fields!!!")
        }   
    }

    const handleDelete = (id) =>{
        const newTodo = todos.filter((todo)=>(todo.id!==id))
        alert("This task will be deleted!!!")
        setTodos(newTodo)
    }


    const handleUpdate = (id) =>{
        const newTodo = todos.find((todo)=>todo.id===id)
                setId(id)   
                setTitle(newTodo.title)
                setDescription(newTodo.description)
                setStatus(newTodo.status)
    }
    const handleInputUpdate = () => {
        if (title!== "" && description!== "") {
            const updatedTodos = todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, title: title, description: description, status: status };
                }
                return todo;
            });
            setTodos(updatedTodos);
            setId(null);
            setTitle("");
            setDescription("");
            setStatus("");
        } else {
            alert("Fill the required fields!!!");
        }
    }


    
    
    return(
        <div className='App'>
            <h2 className='title'>Get Your TODO's</h2>

     
            <div className='todo-input-form'>
            <input type='text' placeholder="Title..." value={title} onChange={(e)=>setTitle(e.target.value)} className="todo-input"></input>
            <input type='text' placeholder="Description..." value={description} onChange={(e)=>setDescription(e.target.value)} className="todo-input" ></input>
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="todo-input">
                <option>Select One</option>
                <option value="Pending">Pending</option>
                <option value="Progress">Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button onClick={()=>handleAdd()} className="todo-btn">ADD</button>
            <button onClick={()=>handleInputUpdate()} className="todo-btn-1">UPDATE</button>
            </div>

            <br></br>


            {todos.map((todo) => (
                <div key={todo.id} className="todo">
                <div className="todo-list">
                <div className="todo-items-details">
                    <div className="todo-items-details-title">{todo.title}</div>
                    <div className="todo-items-details-description">{todo.description}</div>
                </div>
                <div className='todo-btns'>
                <div className="todo-items-button">
                    <button style={{ background: todo.status === "Completed" ? "#F4F4DC" : todo.status === "Progress" ? "#BBC19A" : "#6A604D",}}>
                        {todo.status === "Completed" && <button className="btn-color">Completed</button>}
                        {todo.status === "Progress" && (
                            <button onClick={() => handleProgress(todo.id)} className="btn-color">Progress</button>
                        )}
                        {todo.status === "Pending" && (
                            <button onClick={() => handlePending(todo.id)} className="btn-color">Pending</button>
                        )}
                    </button>
                    
                </div>
                <div className="todo-items-button-img">
                    <button onClick={()=>handleDelete(todo.id)}><img src="/images/bin.png" alt='delete' className='delete-img'></img></button>
                </div>
                <div className="todo-items-button-img">
                    <button onClick={()=>handleUpdate(todo.id)}><img src="/images/edit.png" alt='delete' className='delete-img'></img></button>
                </div>
                </div>
                
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
export default Todo;