import React from 'react';
import ActivityItem from './ActivityItem';

const ActivityList = ({ activities }) => {
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <ActivityItem key={index} activity={activity} />
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
