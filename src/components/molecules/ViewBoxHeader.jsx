import propTypes from 'prop-types';
import SubHeading from '../atoms/SubHeading';

export default function ViewBoxHeader({ subHeading, status }) {
  return (
    <header className="flex justify-between items-end pb-2 pt-5">
      <SubHeading text={subHeading} />
      <p className="font-salsa dark:text-gray-100">{status}</p>
    </header>
  );
}

ViewBoxHeader.propTypes = {
  subHeading: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
};
