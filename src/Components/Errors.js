import { useContext } from "react";
import { createContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const errContext = createContext();
export const isErrorContext = createContext();

export default function Errors() {
  const navigate = useNavigate();
  const { errObj } = useContext(errContext);
  const { setIsError } = useContext(isErrorContext);

  const handleRefresh = () => {
    setIsError(false);
    navigate("/");
  };
  if (!errObj) {
    return (
      <>
        <h1>404</h1>
        <h2>Not Found</h2>
        <Link to="/">
          <button className="home-button" onClick={handleRefresh}>
            Home
          </button>
        </Link>
      </>
    );
  }
  return (
    <>
      <h1>{errObj.response.request.status}</h1>
      <h2>{errObj.response.request.statusText}</h2>
      <Link to="/">
        <button className="home-button" onClick={handleRefresh}>
          Home
        </button>
      </Link>
    </>
  );
}
