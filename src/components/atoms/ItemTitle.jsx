import propTypes from 'prop-types';

export default function ItemTitle({ text, isComplete }) {
  const isDone = isComplete
    ? 'line-through text-gray-500 dark:text-gray-400'
    : 'dark:text-gray-100';

  return <h3 className={`${isDone} flex-grow pl-2 font-roboto text-2xl`}>{ text }</h3>;
}

ItemTitle.propTypes = {
  text: propTypes.string.isRequired,
  isComplete: propTypes.bool,
};
