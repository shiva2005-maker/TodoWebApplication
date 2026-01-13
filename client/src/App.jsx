import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useCallback } from 'react';

const App = () => {

  const [task, setTask] = useState({
    task: "",
    _id: ""
  });
  const [todo, setTodo] = useState([]);





  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(task._id);
    if (task._id) {
      axios.post(`http://localhost:3000/task/updateTask/${task._id}`, task)
        .then((res) => {
          //console.log(res.data.editTask);
          getdata();
        })
        .catch((err) => {
          console.log(err);
        });
          setTask({
            task: ""
          });
    }
    else {
      axios.post("http://localhost:3000/task/create", task)
        .then((res) => {
          //console.log(res.data.task);
          setTask({
            task: ""
          });
        })
        .catch((err) => {
          console.log(err);
        })
      getdata();

    }
  }
  const getdata = () => {
    axios.get('http://localhost:3000/task/alltasks')
      .then((res) => {
        //console.log(res.data.allTasks);
        setTodo(res.data.allTasks);
        //console.log(todo)

      }).catch((err) => {
        console.error(err)
      })
  }

  const changeHandler = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3000/task/delete/${id}`)
      .then((res) => {
        //console.log(res.data);
        getdata();
      }).catch((err) => {
        console.error(err);
      })
  }

  const editHandler = (id) => {
    axios.get(`http://localhost:3000/task/editTask/${id}`)
      .then((res) => {
        //console.log(res.data);
        setTask(res.data);

      }).catch((err) => {
        console.error(err);
      })
  }

  const toggleDoneHandler = (id) => {
    axios.post(`http://localhost:3000/task/toggleDone/${id}`)
      .then((res) => {
        getdata();
      }).catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    getdata();
  }, []);


  return (
    <>
      <div className='bg-purple-600 text-white h-full md:min-h-screen w-[100%] items-center flex flex-col justify-center border-red-800 '>
        <div className='border-transparent border-8 backdrop-blur-2xl shadow-t-xl bg-transparent-950 drop-shadow-2xl rounded-xl p-4 m-2 w-[250px] md:min-w-[600px] min-h-[100px] shadow-xl'>
          <div className='flex flex-col md:flex-row justify-center'>
            <form onSubmit={submitHandler}>
              <label htmlFor="task"></label>
              <input
                type="text" placeholder='enter your task'
                value={task.task} name='task' id="task"
                required
                className='w-[200px] md:w-[400px] h-[65px] bg-purple-600 border-none text-2xl text-white text-shadow-lg shadow-xl rounded-xl p-[10px] m-2 '
                onChange={changeHandler} />
              <input type="submit" placeholder='create task' className='p-[3px] w-[100px] h-[65px] text-shadow-lg text-white text-2xl m-2 border-2 bg-purple-700 border-none shadow-xl rounded-xl' />
            </form>
          </div>

          <div>
            {
              todo.map((item, index) => {
                return (
                  <div className='flex flex-col md:flex-row gap-4 justify-between m-4 text-2xl text-shadow-lg shadow-md ' key={index}>
                    < div className='flex flex-row gap-2 '>
                    <div>
                      <input type="checkbox" checked={item.isdone} onChange={() => toggleDoneHandler(item._id)}
                      className='mx-[5px] ' />
                    </div>
                      <p>{index + 1}.</p>
                      <h3 className={`${item.isdone ? 'line-through' : ''}`}>{item.task}</h3>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 '>

                      <button className='border-2 border-none bg-rose-800 rounded-md text-sm m-[5px] py-[3px] px-[7px]'
                        onClick={() => deleteHandler(item._id)}>Delete</button>
                      <button className='border-2 border-none bg-emerald-800 rounded-md text-sm m-[5px] py-[3px] px-[7px]'
                        onClick={() => { editHandler(item._id) }}>Edit</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>


    </>
  )
}

export default App
