import React from 'react';

const ActivityItem = ({ activity }) => {
  const { name, date, location } = activity;

  return (
    <li>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
    </li>
  );
};

export default ActivityItem;
