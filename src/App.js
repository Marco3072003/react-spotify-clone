import './assets/styles/App.css';
import './assets/styles/sidebar.css';
import './assets/styles/main.css'
import SideBar from './components/layout/Aside'
import Main from './components/layout/Main';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
