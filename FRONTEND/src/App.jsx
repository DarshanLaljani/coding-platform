import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import CodingQuestionForm from "./components/CodingQuestionForm";
import DisplayTable from "./components/DisplayTable";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Title from "./components/Title";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer/UserReducer";
import SignOut from "./components/Signout";

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<CodeEditor />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logout" element={<SignOut />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/aboutus" element={<CodeEditor />} />
            <Route path="/addquestion" element={<CodingQuestionForm />} />
            <Route path="/questionbank" element={<DisplayTable />} />
            <Route path="/community" element={< Title />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
