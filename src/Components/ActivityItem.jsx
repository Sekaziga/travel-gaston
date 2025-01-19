
import PropTypes from 'prop-types';

const ActivityItem = ({ activity }) => {
  return (
    <li>
      <strong>{activity.name}</strong> — {activity.date} — {activity.location}
    </li>
  );
};

ActivityItem.propTypes = {
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActivityItem;
