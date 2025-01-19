import React from 'react';
import Header from './components/Header';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

const App = () => {
  
  const activities = [
    { name: 'Museum Visit', date: '2025-01-25', location: 'London' },
    { name: 'Beach Day', date: '2025-01-26', location: 'Brighton' },
  ];

  const handleAddActivity = (newActivity) => {
    const activityList = document.getElementById('activity-list');

    
    const li = document.createElement('li');
    li.innerHTML = `<strong>${newActivity.name}</strong> — ${newActivity.date} — ${newActivity.location}`;
    
    
    activityList.appendChild(li);
  };

  return (
    <div>
      <Header />
      {/* Pass handleAddActivity to ActivityForm as a prop */}
      <ActivityForm onAddActivity={handleAddActivity} />
      {/* Use an id to identify the list and allow DOM manipulation */}
      <ul id="activity-list">
        {activities.map((activity, index) => (
          <li key={index}>
            <strong>{activity.name}</strong> — {activity.date} — {activity.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
