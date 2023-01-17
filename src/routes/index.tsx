import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { AuthRoute } from "./authRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
      </RoutesReact>
    </BrowserRouter>
  );
}
