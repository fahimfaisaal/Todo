import Heading from './components/atoms/Heading';
import MyDay from './components/template/MyDay';
import ThemeChanger from './components/ThemeChanger';

const App = () => (
  <main className="dark:bg-gray-900 bg-gray-100 h-screen">
    <div className="container">
      <ThemeChanger />
      <Heading text="Todo" />
      <MyDay />
      {/* Todo: have to add todo List */}
    </div>
  </main>
);

export default App;
