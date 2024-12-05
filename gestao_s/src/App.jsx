import Tasks from "./components/tasks";
import AddTask from "./components/addTask";
import "./App.css";
import { useState } from "react";

function app() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      tittle: "estudar programação",
      description: "estudar programação para ser foda",
      isCompleted: false,
    },
    {
      id: 2,
      tittle: "estudar inglês",
      description: "estudar inglês para ser foda",
      isCompleted: false,
    },
    {
      id: 3,
      tittle: "estudar matemática",
      description: "estudar matemática para ser foda",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]"></div>

      <h1 className="text-red-500 text-3xl">Gerenciador de tarefas</h1>
      {<AddTask /> /* chamando a adição de task */}
      {<Tasks tasks={tasks} banana="teste"/> /*chamando a task e a constante task*/}
    </div>
  );
}

export default app;
