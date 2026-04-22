import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Details from './pages/Details';
import Update from './pages/Update';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Details />}/>
        <Route path='/:id/edit' element={<Update />}/>
      </Routes>
    </div>
  );
}

export default App;
