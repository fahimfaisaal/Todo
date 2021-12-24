import propTypes from 'prop-types';

export default function ItemsViewer({ items = [], children }) {
  return (
    <div className="view-box overflow-y-scroll">
      {items}
      {children}
    </div>
  );
}

ItemsViewer.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
  children: propTypes.element,
};
