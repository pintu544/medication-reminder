import { Routes, Route } from "react-router-dom";
import { Navigation } from "./modules/home/components/Navigation";
import { homePath } from "./modules/home/routes/HomeRoute";
import { Home } from "./modules/home/components/Home";
import { loginPath } from "./modules/login/routes/LoginRoute";
import { Login } from "./modules/login/components/Login";
import { registerPath } from "./modules/register/routes/RegisterRoute";
import { Register } from "./modules/register/components/Register";
import { medicationPath } from "./modules/medication/routes/MedicationRoute";
import { Medication } from "./modules/medication/components/Medication";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path={homePath} element={<Home />} />
          <Route path={loginPath} element={<Login />} />
          <Route path={registerPath} element={<Register />} />
          <Route path={medicationPath} element={<Medication />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
