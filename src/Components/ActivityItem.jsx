import React from 'react';
import PropTypes from 'prop-types';

const ActivityItem = ({ activity }) => {
  return (
    <li>
      <strong>{activity.name}</strong> — {activity.date} — {activity.location}
    </li>
  );
};

export default ActivityItem;
