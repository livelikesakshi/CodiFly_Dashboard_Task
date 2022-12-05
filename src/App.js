import './App.css';
import Box from './components/Box/Box';
import Navbar1 from './components/NavBar/Navbar1';
import Navbar2 from './components/NavBar/Navbar2';
import TableArea from './components/TableArea';

function App() {
  return (
    <div  className='app'>
    <Navbar1 />
    <Navbar2 />
    <div className='dash'>
      <span className='dashboard'>Dashboard</span>
      <span className='accounting'>Accounting/Dashboard</span>
    </div>
    <div className='line'></div>
    <Box />
    < TableArea />
    </div>
    
  );
}

export default App;
