import { Route, Routes } from "react-router";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<Chat />} />
        <Route path="" index element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
