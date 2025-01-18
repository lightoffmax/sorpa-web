'use client'

export default function MyTable ({tasks, deleteTask, toggleTask}) {
    if (!Array.isArray(tasks) || tasks.length === 0) {
        return <div>Нет данных для отображения или данные имеют неверный формат.</div>;
      }
    return (

        <table className=' table-auto border-collapse w-full border'>

            <thead className="bg-foreground-700">

                <tr>
                    <th className='border p-[2px]'>
                        ID
                    </th>
                    <th className='border p-[2px]'>
                        Task Name
                    </th>
                    <th className='border p-[2px]'>
                        Completed
                    </th>
                    <th className='border p-[2px]'>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-foreground-400">
                {tasks.map((task) => (
                    <tr key={task.id} >
                        <th className='border p-[2px]'>
                            {task.id}
                        </th>
                        <th className='border p-[2px]'>
                            {task.title}
                        </th>
                        <th className='border p-[2px]'>
                            {task.completed ? 'Completed' : 'Pending'}
                        </th>
                        <th className='border p-[2px] '>
                            <button onClick={() => toggleTask(task.id)}
                            className="border bg-yellow-500 text-gray-500 rounded-full px-2 py-1 " >Toggle</button>
                            <button onClick={() => deleteTask(task.id)}
                            className="border bg-red-500 rounded-full px-2 py-1 ml-2 ">Delete</button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
 }

