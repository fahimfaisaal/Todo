import propTypes from 'prop-types';

export default function ItemsViewer({ children }) {
  return (
    <div className="view-box overflow-y-scroll">
      { children }
    </div>
  );
}

ItemsViewer.propTypes = {
  children: propTypes.element.isRequired,
};
