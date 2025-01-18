// import { tasks } from "@/app/data/tasks";
import { headers } from "next/headers";

 export let tasks = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
  ]

export async function GET() {
    console.log('GET /api/tasks');
    return NextResponse.json(tasks);
  }

export async function PUT(req, {params}) {
    const {id} = await params;
    const updates = await req.json();

    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
        return new Response(JSON.stringify({error: "Task not found"}), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
            });
    }
    tasks[taskIndex] = {...tasks[taskIndex], ...updates};
    return new Response(JSON.stringify(tasks[taskIndex]), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export async function DELETE(req, {params}) {
    const {id} = await params;
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

    if (taskIndex === -1) {
        return new Response(JSON.stringify({error: "Task not found"}), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    const deletedTask = tasks.splice(taskIndex, 1)
    return new Response(JSON.stringify(deletedTask), {
        status: 200,
        headers: {
         "Content-Type": "application/json"
    }});

}
export async function POST(request) {
   const newTask = await request.json();
   console.log("Новая задача :", newTask)
   if (!newTask.title) { 
    return NextResponse.json(
      { error: 'Title is required!!!!!' },
      { status: 400 }
    );
  }
   console.log(newTask)

   const newTaskWithId = {
    ...newTask, id: tasks.length + 1
    }
   console.log(newTaskWithId);
   tasks.push(newTaskWithId);
   console.log('Задачи :', tasks);

   return new Response(JSON.stringify(newTaskWithId))
}