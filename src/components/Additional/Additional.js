import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AdditionalContainer } from './Additional.styled';

const AdditionalItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];
const Additional = ({ location }) => {
  return (
    <AdditionalContainer>
      <h4>Addititonal information</h4>
      <ul>
        {AdditionalItems.map(({ href, text }) => (
          <li key={href}>
            <Link to={href} state={{ from: location }}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </AdditionalContainer>
  );
};

AdditionalItems.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hash: PropTypes.string,
    state: PropTypes.bool,
  }).isRequired,
};

export default Additional;