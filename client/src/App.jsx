import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
