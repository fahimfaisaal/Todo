import propTypes from 'prop-types';
import Heading from '../atoms/Heading';
import ThemeChanger from '../ThemeChanger';

export default function Layout({ heading, children }) {
  return (
    <main className="dark:bg-gray-900 bg-gray-100 h-screen">
      <div className="container">
        <Heading text={heading} />
        <ThemeChanger />
        {children}
      </div>
    </main>
  );
}

Layout.propTypes = {
  heading: propTypes.string.isRequired,
  children: propTypes.element,
};
