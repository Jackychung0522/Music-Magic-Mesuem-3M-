import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./AppRouter";
import HomePage from "./container/HomePage/HomePage";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Routes>
            <Route exact path={routes.home} element={<HomePage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
