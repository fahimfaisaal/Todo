import Heading from './components/atoms/Heading';
import ThemeChanger from './components/ThemeChanger';
import ViewBox from './components/ViewBox';

const App = () => (
  <main className="dark:bg-gray-900 bg-gray-100 h-screen">
    <div className="container">
      <ThemeChanger />
      <Heading text="Todo" />
      <ViewBox subHeading="My day" />
    </div>
  </main>
);
export default App;
