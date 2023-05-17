//import './App.css'
import { HashRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/home';
import Questions from './pages/question';
import Instructions from './pages/Instructions';
import Resources from './pages/resources';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/resources" element={<Resources/>}/>
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
