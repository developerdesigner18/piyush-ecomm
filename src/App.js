import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";
import RoutesPage from "./routes/routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RoutesPage />
      <Footer />
    </div>
  );
}

export default App;
