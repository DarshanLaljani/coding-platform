import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import CodingQuestionForm from "./components/CodingQuestionForm";
import DisplayTable from "./components/DisplayTable";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Title from "./components/Title";

function App() {
  return (
    <Router>
      <div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<CodeEditor />} />
          <Route path="/login" element={<CodeEditor />} />
          <Route path="/register" element={<CodeEditor />} />
          <Route path="/aboutus" element={<CodeEditor />} />
          <Route path="/addquestion" element={<CodingQuestionForm />} />
          <Route path="/questionbank" element={<DisplayTable />} />
          <Route path="/community" element={< Title />} />
        </Routes>
      </div>
    </Router>
    //  <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}></Box>
    // 
    // {/ * <CodeEditor /> */}
    //

  );
}
export default App;
