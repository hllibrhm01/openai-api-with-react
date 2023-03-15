import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import TextCompletion from "./pages/TextCompletion";
import CreateImage from "./pages/CreateImage";
import CodeCompetion from "./pages/CodeCompletion";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/text-completion" element={<TextCompletion />} />
          <Route path="/create-image" element={<CreateImage />} />
          <Route path="/code-completion" element={<CodeCompetion />} />
        </Routes>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
