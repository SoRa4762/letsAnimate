import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInXSignUp from "./Animations/SignInXSignUp";
import Walking from "./Animations/Walking";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signIn" element={<SignInXSignUp />} />
          <Route path="/walking" element={<Walking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
