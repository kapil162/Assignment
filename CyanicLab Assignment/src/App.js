import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmplayee';
import Employee from './pages/Employee';
import DeletedEmployee from './pages/DeletedEmployee';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Employee/>}></Route>
      <Route exact path='/addEmployee' element={<AddEmployee/>}></Route>
      <Route exact path='/edit/:id' element={<EditEmployee/>}></Route>
      <Route exact path='/deletedEmployee' element={<DeletedEmployee/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
