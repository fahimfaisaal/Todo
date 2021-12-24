import propTypes from 'prop-types';

export default function ItemTitle({ text, isComplete }) {
  const isDone = isComplete ? 'line-through' : '';

  return <h3 className={`${isDone} flex-grow pl-2 font-roboto text-2xl dark:text-gray-100`}>{ text }</h3>;
}

ItemTitle.propTypes = {
  text: propTypes.string.isRequired,
  isComplete: propTypes.bool,
};
