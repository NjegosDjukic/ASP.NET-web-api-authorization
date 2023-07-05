import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Employees from './Employees';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  )
}

export default App
