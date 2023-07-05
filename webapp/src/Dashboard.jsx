import { useContext } from "react";
import { getFact } from "./services/service";
import { UserContext } from "./context/UserProvider";

const Dashboard = () => {
    const {logout} = useContext(UserContext);
  return (
    <div>
        <button onClick={getFact}>Get fact</button>
        <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Dashboard