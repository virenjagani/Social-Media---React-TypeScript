import { Route, Routes } from "react-router-dom";
import AuthenticationForm from "../Pages/AuthPages/Register/AuthenticationForm";
import NotFound from "../Pages/NotFound/NotFound";
import PublicRoute from "./PublicRoute/PublicRoute";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Dashboard from "./../Pages/Dashboard/Dashboard";

function Router() {
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthenticationForm />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
