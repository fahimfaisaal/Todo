import propTypes from 'prop-types';

export default function SubHeading({ text }) {
  return <h3 className="sub-heading">{ text }</h3>;
}

SubHeading.propTypes = {
  text: propTypes.string.isRequired,
};
