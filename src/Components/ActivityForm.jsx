import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ActivityForm = ({ onAddActivity }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && location) {
      // Create an activity object
      const activity = { name, date, location };
      // Call the parent function to add activity
      onAddActivity(activity);
      setName('');
      setDate('');
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Activity Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add Activity</button>
    </form>
  );
};

// Add PropTypes to validate the props
ActivityForm.propTypes = {
  onAddActivity: PropTypes.func.isRequired, // Validate that onAddActivity is a function and is required
};

export default ActivityForm;
