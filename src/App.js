import "./App.css";
import Footer from "./components/footer/Footer";
import NavBars from "./components/navbar/Navbars";

import RoutesPage from "./routes/routes";

function App() {
  return (
    <div className="App">
      <NavBars />
      <RoutesPage />
      <Footer />
    </div>
  );
}

export default App;
