import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { SideContainer } from "../components/SideContainer";
import { SideComponentLayout } from "../layout/SideComponentLayout";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="/" element={<SideComponentLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </RoutesReact>
    </BrowserRouter>
  );
}
