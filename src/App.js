import './App.css';
import Sidebar from './Components/Sidebar';
import MainComponent from './Components/MainComponent'
import RightSideBar from './Components/RightSideBar'
function App() {
  return (
    <div className='MainContainer'>
      <Sidebar/>
      <MainComponent/>
      <RightSideBar/>
    </div>
  );
}

export default App;
