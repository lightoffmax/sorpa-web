'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
// import api from "./utils/api";
import axios from 'axios';
import MyTable from "./components/table";
import AddTaskForm from "./components/AddTaskform";



export default function Home() {

const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(true);

const api = axios.create({
  baseURL: '/api', // Базовый URL для запросов
  headers: {
    'Content-Type': 'application/json',
  },
});

//for work with local api
useEffect(() => {
  fetchTasks();
}, []);

const fetchTasks = async () => {
  try {
      console.log('fetch...')
      const { data } = await api.get('/tasks/');
    console.log(data)
    setTasks(data);
  } catch (error) {
    console.error('Ошибка при загрузке задач:', error);
  } finally {
    setLoading(false);
  }
};

const addTask = async(newTask) => {
  try {
      console.log('Отправляем задачу:', JSON.stringify(newTask));
      const {data} = await api.post(`/tasks/${newTask.id}`, newTask);
      console.log('новая задача ', data);
      setTasks((prevTasks) => [...prevTasks, data]);

  }
  catch (error) {
      console.error('Ошибка при добавлении задачи', error);
  }
}
const deleteTask = async (id) => {
  try {
    console.log('deleted...')
   await api.delete(`/tasks/${id}`);
  setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  } catch (error) {
      console.error("Не удалось удалить задачу", error);
  }
};

const toggleTask = async (id) => {
  const task = tasks.find((t) => t.id === id)
  const updatedTask = {...task, completed : !task.completed}
  try {
      await api.put(`tasks/${id}`, updatedTask);
      setTasks((prevTasks) =>
           prevTasks.map((task) => (task.id === id ? updatedTask : task ))
  )
  } catch (error) {
      console.error('Не удалось переключить статус', error);
  }
}


//for work with jsonplaceholder
// useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//         console.log('fetch...')
//         const { data } = await api.get('/todos?_limit=10');
//       console.log(data)
//       setTasks(data);
//     } catch (error) {
//       console.error('Ошибка при загрузке задач:', error);
//     } finally {
//       setLoading(false);
//     }

//   };
  // const addTask = async(newTask) => {
  //   try {
  //       const {data} = await api.post('/todo', newTask);
  //       console.log('новая задача ', data);
  //       setTasks((tasks) => [...tasks, data]);
  //   }
  //   catch (error) {
  //       console.error('Ошибка при добавлении задачи', error);
  //   }
  // }
  // const deleteTask = async (id) => {
  //   try {
  //     console.loog('Start add...')
  //    await api.delete(`/todos/${id}`);
  //   setTasks((tasks) => tasks.filter((task) => task.id !== id));
  //   onsole.loog('end add...')
  //   } catch (error) {
  //       console.error("Не удалось удалить задачу", error);
  //   }
  // };
  // const toggleTask = async (id) => {
  //   const task = tasks.find((t) => t.id === id)
  //   const updatedTask = {...task, completed : !task.completed}
  //   try {
  //       await api.put(`/todos/${id}`, updatedTask);
  //       setTasks((tasks) =>
  //            tasks.map((task) => (task.id === id ? updatedTask : task ))
  //   )
  //   } catch (error) {
  //       console.error('Не удалось переключить статус', error);
  //   }
  // }




  return (
    <div className="flex flex-col overflow-y-auto min-h-screen items-center justify-items-center min-h-screen pb-10 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full mx-auto gap-8 row-start-2 items-center sm:items-start">
        
        <AddTaskForm addTask={addTask} />  
        {loading ? (<div className="mx-auto">Loading...</div>) :
        (<MyTable tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />)
          }

        
      </main>
      <footer className="flex mt-auto gap-10 pt-[15px] pb-[5px] w-full mx-auto border-t-1 items-center justify-center">
        <a
          className="flex  items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
