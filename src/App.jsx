import  { useState } from 'react';
import Header from "./Components/Header";
import ActivityForm from "./Components/ActivityForm";
import ActivityList from "./Components/ActivityList";


const App = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  return (
    <div>
      <Header />
      <ActivityForm onAddActivity={addActivity} />
      <ActivityList activities={activities} />
    </div>
  );
};

export default App;
