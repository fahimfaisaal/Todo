/* eslint-disable react/forbid-prop-types */
import propTypes from 'prop-types';

export default function ItemLayout({ classes, children }) {
  return (
    <div className={`item ${classes || ''}`}>
      {children}
    </div>
  );
}

ItemLayout.propTypes = {
  classes: propTypes.string,
  children: propTypes.any.isRequired,
};
