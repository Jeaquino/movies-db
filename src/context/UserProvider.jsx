import UserContext from "./UserContext";
import PropTypes from "prop-types";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const user = {
    name: "Victor",
    surname: "Gonzalez",
    age: 25,
    logged: false,
    modo: "dark"
  };

  const [userData, setUserData] = useState(user);

  const login = (userData) => {
    setUserData(userData);
  };

  const logout = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
