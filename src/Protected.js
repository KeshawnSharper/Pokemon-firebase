import { Navigate } from "react-router-dom";
const Protected = ({children }) => {
  if (!localStorage.getItem("user") || localStorage.getItem("user").Token) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default Protected;