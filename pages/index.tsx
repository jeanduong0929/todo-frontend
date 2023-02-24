import { AddCircle } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const tasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
  ];

  return (
    <>
      <div className="flex flex-col items-center mt-40 font-mono">
        <div className="flex flex-col gap-10 shadow-xl rounded-md p-10">
          <h1 className="text-4xl font-bold">&quot;Task&quot;</h1>
          <div className="flex flex-row items-end gap-5">
            <TextField label="Add todo" variant="standard" />
            <AddCircle
              color="primary"
              className="cursor-pointer ease-out transition hover:scale-110"
            />
          </div>

          <div className="flex flex-col gap-5">
            {tasks.map((task) => (
              <div
                className="flex items-center justify-between gap-2"
                key={task.id}
              >
                <p className="bg-gradient-to-r from-cyan-800 to-white text-white px-5 py-2 bg-slate-300 w-full rounded-md ease-out transition hover:scale-110 cursor-pointer">
                  {task.name}
                </p>
                <DeleteIcon
                  className="ease-out transition hover:scale-110 cursor-pointer"
                  color="error"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
