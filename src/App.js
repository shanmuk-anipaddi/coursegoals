import React from "react";
import GoalList from './Components/Goals/GoalList';
import AddGoal from "./Components/GoalForm/AddGoal";
const CourseData = [
  {"id":1,"Name":"Master 1"},
  {"id":2,"Name":"Master 2"},
  {"id":3,"Name":"Master 3"}
];

function App() {
  return (
    <div className="">
      <AddGoal />
      <GoalList cData = {CourseData} />
    </div>
  );
}

export default App;
