import express from "express";
import { IPerson } from "./types/person";
import { IGrade } from "./types/grades";
import { ITask } from "./types/task";


const app = express();
app.use(express.json());

let person: IPerson[] = [];
let grades: IGrade[] = [];
let task: ITask[] = [];


/////express is workframe
////json is a body of app
///we can apply any GRUD in any object of array
/// the interface must be external file insid src
/// post for new data, delet for delet any data by id, put is for updata any data
///port must be at the end of code





app.get("/name", (req, res) => {
  return res.json(person);
});

app.post("/name", (req, res) => {
  console.log(req.body);
  const newName = req.body as IPerson;
  person.push(newName);

  res.json({
    message: "Name Add",
  });
});

app.put("/name/:id", (req, res) => {
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

app.delete("/name/:id", (req, res) => {
  const { id } = req.params;
  const deletedNamesList = person.filter((deName) => {
    return deName.id !== id;
  });
  person = deletedNamesList;
  res.json({
    message: "Name Delete",
  });
});








app.get("/grades", (req, res) => {
  return res.json(grades);
});

app.post("/grades", (req, res) => {
  const newGrade = req.body as IGrade;
  grades.push(newGrade);

  res.json({
    message: "Grade Add",
  });
});

app.put("/grades/:id", (req, res) => {
  const updatedGrades = req.body as IGrade;
  const { id } = req.params;
  const updatedGradeList = grades.filter((uGrade) => {
    return uGrade.id !== id;
  });
  updatedGradeList.push(updatedGrades);
  grades = updatedGradeList;
  res.json({
    message: "Grade Update",
  });
});

app.delete("/grades/:id", (req, res) => {
  const { id } = req.params;
  const deletedGradesList = grades.filter((dGrade) => {
    return dGrade.id !== id;
  });
  grades = deletedGradesList;
  res.json({
    message: "Grade Delete",
  });
});







app.get("/tasker", (req, res) => {
  return res.json(task);
});

app.post("/tasker", (req, res) => {
  const newTask = req.body as ITask;
  task.push(newTask);
  res.json({
    message: "Task Add",
  });
});

app.put("/tasker/:title", (req, res) => {
  const updatedTaks = req.body as ITask;
  const { title } = req.params;
  const updatedList = task.filter((uTask) => {
    return uTask.title !== title;
  });
  updatedList.push(updatedTaks);
  task = updatedList;
  res.json({
    message: "Task Update",
  });
});

app.delete("/tasker/:title", (req, res) => {
  const { title } = req.params;
  const deletedList = task.filter((dTask) => {
    return dTask.title !== title;
  });
  task = deletedList;
  res.json({
    message: "Task Delete",
  });
});


app.get("/tasker/:title", (req, res) => {
  const { title } = req.params;
  const updatedList = task.filter((uTask) => {
    return uTask.title === title;
  });
  return res.json(updatedList);
});

app.listen(5000);