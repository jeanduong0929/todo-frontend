import { AddCircle } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");

  return (
    <>
      <div className="flex flex-col items-center font-mono">
        <div className="flex flex-col gap-10 shadow-xl rounded-md p-10">
          <h1 className="text-4xl font-bold">&quot;Task&quot;</h1>
          <div className="flex flex-row items-end gap-5">
            <TextField label="Add todo" variant="standard" />
            <AddCircle
              color="primary"
              className="cursor-pointer ease-out transition hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
}
