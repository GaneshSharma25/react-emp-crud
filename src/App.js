
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Read/>}></Route>
        <Route path = '/create' element={<Create/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
