import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return <div>{location.pathname}: - This page cannot be found.</div>;
}

export default NotFound;
