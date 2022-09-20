import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AuthPage from './templates/auth-page/auth-page';
import Exp from './templates/exp/exp';

function App() {
  // let browserLocation = useLocation();
  return (
    <div className="App">
      <div className='App-header'>

        <Router>
            <Routes>
                 <Route exact path='/' element={< Exp />}></Route>
                 <Route exact path='/auth' element={< AuthPage />}></Route>
                 <Route path='*' element={<h1>404 ERROR</h1>}></Route>
          </Routes>
       </Router>
      </div>
    </div>
  );
}

export default App;
