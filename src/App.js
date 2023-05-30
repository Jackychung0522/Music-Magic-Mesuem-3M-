import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./AppRouter";
import HomePage from "./container/HomePage/HomePage";
import CreateYourselfPage from "./container/CreateYouselfPage/CreateYourselfPage";
import PlayGame from "./container/PlayGame/PlayGame";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import SelectSong from "./container/SelectSong/SelectSong";
function App() {
  return (
    <div>
      <Header />
      <div>
        
          <Routes>
            <Route exact path={routes.home} element={<HomePage />} />
            <Route exact path={routes.createyourself} element={<CreateYourselfPage />} />
            <Route exact path={routes.playgame} element={<PlayGame />} />
            <Route exact path={routes.selectsong} element={<SelectSong/>} />

          </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
