import { BrowserRouter, Route, Routes as RoutesReact } from "react-router-dom";
import { HeaderLayout } from "../layout/HeaderLayout";
import { AddUser } from "../pages/AddUser";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { UserList } from "../pages/UserList";
import { AuthAdminRoute } from "./authAdminRouter";
import { AuthRoute } from "./authRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <RoutesReact>
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="/" element={<HeaderLayout />}>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />

          <Route
            path="create-user"
            element={
              <AuthRoute>
                <AuthAdminRoute>
                  <AddUser />
                </AuthAdminRoute>
              </AuthRoute>
            }
          />

          <Route
            path="users"
            element={
              <AuthRoute>
                <AuthAdminRoute>
                  <UserList />
                </AuthAdminRoute>
              </AuthRoute>
            }
          />
        </Route>
      </RoutesReact>
    </BrowserRouter>
  );
}
