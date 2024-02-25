import { Route, Routes } from "react-router-dom";
import AuthenticationForm from "../Pages/AuthPages/Register/AuthenticationForm";
import NotFound from "../Pages/NotFound/NotFound";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthenticationForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
