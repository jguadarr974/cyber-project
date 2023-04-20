//import './App.css'
import { HashRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import Questions from './pages/question';
import Instructions from './pages/Instructions';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
      </Routes>
    </div>
  )
}

function wrappedApp(){
  return(
    <HashRouter>
      <App/>
    </HashRouter>

  );
}

export default wrappedApp
