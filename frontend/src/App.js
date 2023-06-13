import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./auth/pages/Login";
import { HomePage } from "./pages/homepage/homePage";
import { ProfilePage } from "./pages/profile/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/profile/:userId" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
