import React from 'react';

const ActivityForm = ({ onAddActivity }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newActivity = {
      name: form.name.value,
      date: form.date.value,
      location: form.location.value,
    };
    // Make sure onAddActivity is being called correctly
    if (onAddActivity) {
      onAddActivity(newActivity); // Call the parent function passed as prop
    } else {
      console.error("onAddActivity is not a function");
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Activity Name" required />
      <input type="date" name="date" required />
      <input type="text" name="location" placeholder="Location" required />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityForm;
