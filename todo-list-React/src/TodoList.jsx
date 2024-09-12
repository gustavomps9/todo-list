import React, {useState} from 'react';

function TodoList(){
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState("");

   function handleInputChange(event){
      setNewTask(event.target.value);
   }

   function addTask(){
      if(newTask.trim() !== ""){
         setTasks([...tasks, newTask]);
         setNewTask("");
      }
   }

   function deleteTask(index){
      const deleteTasks = tasks.filter((_, i) => i !== index);
      setTasks(deleteTasks);
   }
   
   function moveUp(index){
      if(index > 0){
         const newTasks = [...tasks];
         const aux = newTasks[index];
         newTasks[index] = newTasks[index - 1];
         newTasks[index - 1] = aux;
         setTasks(newTasks);

      }
   }

   function moveDown(index){
      if(index < tasks.length - 1){
         const newTasks = [...tasks];
         const aux = newTasks[index];
         newTasks[index] = newTasks[index + 1];
         newTasks[index + 1] = aux;
         setTasks(newTasks);
      }
   }

   return(
      <div className='todo-list'>
         <h1>To-Do-List</h1>
         <div>
            <input type='text' value={newTask} onChange={handleInputChange} placeholder='Insira uma tarefa...'/>
            <button className="add-btn" onClick={addTask}>Adicionar</button>
         </div>

         <ol>
            {tasks.map((task, index) => (
               <li key={index}>
                  <span className="task">{task}</span>
                  <div className='buttons'>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>Remover</button>
                  <button className="up-btn" onClick={() => moveUp(index)}>⬆️</button>
                  <button className="down-btn" onClick={() => moveDown(index)}>⬇️</button>
                  </div>
               </li>
            ))}
         </ol>
      </div>
   );
}

export default TodoList;