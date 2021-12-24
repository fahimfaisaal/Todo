import PropTypes from 'prop-types';

export default function Heading({ text }) {
  return (
    <h1 className="heading">
      {text}
    </h1>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};
