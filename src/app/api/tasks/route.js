import { tasks } from "@/app/data/tasks";
import { NextResponse } from "next/server";

// export async function Get() {
//     return NextResponse(JSON.stringify(tasks), {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
// }

export async function GET() {
    console.log('GET /api/tasks');
    return NextResponse.json(tasks);
  }



// export async function POST(request) {
//    const newTask = await request.json();
//    console.log("Новая задача :", newTask)
// //    if (!title) { 
// //     return NextResponse.json(
// //       { error: 'Title is required!!!!!' },
// //       { status: 400 }
// //     );
// //   }
//    console.log(newTask)

//    const newTaskWuthId = {
//     id: tasks.length + 1, ...newTask
//     }
//    console.log(newTaskWuthId);
//    tasks.push(newTaskWuthId);
//    return NextResponse.json(newTaskWuthId)
// }