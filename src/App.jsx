import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInXSignUp from "./Animations/SignInXSignUp";
import Walking from "./Animations/Walking";
import Ripple from "./Animations/Ripple";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signIn" element={<SignInXSignUp />} />
          <Route path="/walking" element={<Walking />} />
          <Route path="/ripple" element={<Ripple />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
