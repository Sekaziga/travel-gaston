import PropTypes from 'prop-types';
import ActivityItem from './ActivityItem';

const ActivityList = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity, index) => (
        <ActivityItem key={index} activity={activity} />
      ))}
    </ul>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivityList;
