
import PropTypes from 'prop-types';

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

// Add PropTypes validation
ActivityItem.propTypes = {
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired, // Name must be a string and is required
    date: PropTypes.string.isRequired, // Date must be a string and is required
    location: PropTypes.string.isRequired, // Location must be a string and is required
  }).isRequired,
};

export default ActivityItem;
