'use client'

import { useState } from "react"

export default function AddTaskForm ({addTask}) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        if (title.trim()) {
            addTask({title : title, completed : false, id: 0});
            setTitle('')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border w-full flex bg-foreground-600 rounded-full p-2 mb-4 mx-auto">
            <input
            id='TableForm'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" p-2 ml-1 w-[80%] text-black rounded-full"
            placeholder="Введите задачу"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-800 px-4 py-2 border rounded-full text-white mx-auto">Add Task</button>

        </form>
    )
}