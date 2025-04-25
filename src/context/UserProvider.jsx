import UserContext from "./UserContext";
import PropTypes from "prop-types";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const user = {};

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
