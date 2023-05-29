import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './AppRouter';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={routes.home} element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
