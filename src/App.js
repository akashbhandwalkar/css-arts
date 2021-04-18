
import './App.scss';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Projects from './containers/Projects';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Footer />
      <Projects />
    </div>
  );
}

export default App;
