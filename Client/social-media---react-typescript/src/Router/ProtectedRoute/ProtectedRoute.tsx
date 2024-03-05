import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/store";
import { ReactNode, useEffect } from "react";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.accessToken) {
      navigate("/auth");
    }
  }, [auth.accessToken]);

  //   if (auth.accessToken) {
  //     navigate("/dashboard");
  //     return null;
  //   }

  return <>{children}</>;
}

export default ProtectedRoute;
