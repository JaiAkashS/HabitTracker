import React from "react";
import HabitForm from "./components/HabitForm";
import habitServices from "./services/habitServices";


function App() {
  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <HabitForm />
    </div>
  );
}

export default App;