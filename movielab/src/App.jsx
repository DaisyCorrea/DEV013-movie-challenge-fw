import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/movies'

function App() {

  return (
    <>      
      <div className="card">
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home> </Home>}></Route>
            <Route path='/movies/:id' element={<Movies> </Movies>}></Route>
          </Routes>
         </BrowserRouter>
     </div>
    </>
  );
}

export default App


/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     </div>*/