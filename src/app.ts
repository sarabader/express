import express from "express";
import { IPerson } from "./types/person";
import { IGrade } from "./types/grades";
import { ITask } from "./types/task";


const app = express();
app.use(express.json());

let person: IPerson[] = [];
let grades: IGrade[] = [];
let task: ITask[] = [];

person.push({
  id: "1234",
  name: "Sara",
});

grades.push({
  id: "11",
  grade: 100,
});

task.push({
  id: "11",
  deadline: "today",
  title: "math",
  description: "hard but easy",
  statusDone: true ,
});




app.get("/names", (req, res) => {
  return res.json(person);
});

app.post("/names", (req, res) => {
  console.log(req.body);
  const newName = req.body as IPerson;
  person.push(newName);

  res.json({
    message: "Name Add",
  });
});

app.put("/names/:id", (req, res) => {
  const updatedNames = req.body as IPerson;
  const { id } = req.params;
  const updatedNamesList = person.filter((upName) => {
    return upName.id !== id;
  });
  updatedNamesList.push(updatedNames);
  person = updatedNamesList;
  res.json({
    message: "Name Update",
  });
});

app.delete("/names/:id", (req, res) => {
  const { id } = req.params;
  const deletedNamesList = person.filter((deName) => {
    return deName.id !== id;
  });
  person = deletedNamesList;
  res.json({
    message: "Name Delete",
  });
});


app.listen(5000);