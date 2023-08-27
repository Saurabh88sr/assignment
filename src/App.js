import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import Services from "./page/Services";
import Footer from "./component/Footer";
import Schedules from "./page/Schedules";
import Call from "./page/Call";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Replace <app/> with a proper component */}
            <Route path="/Services" element={<Services />} />
            <Route path="/Schedules" element={<Schedules />} />
            <Route path="/Call" element={<Call/>} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
