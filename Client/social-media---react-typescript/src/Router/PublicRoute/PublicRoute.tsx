import { ReactNode, useEffect } from "react";
import { useAppSelector } from "../../Redux/store";
import { useNavigate } from "react-router-dom";

function PublicRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (auth.accessToken) {
      navigate("/dashboard");
    }
  }, [auth.accessToken]);

  return <>{children}</>;
}

export default PublicRoute;
