import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./Page/ForgotPassword";
import Home from "./Page/Home";
import SingIn from "./Page/SignIn";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
