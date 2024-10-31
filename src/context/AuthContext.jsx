import React from "react";
import PropTypes from "prop-types";
import { useState, createContext, useContext } from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const Auth = createContext();

export function AuthContextProvider({ children }) {
  const [curUser, setCurUser] = useState(sessionStorage.curUser || "");

  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });

  const handleAuthenticate = function () {
    showConnect({
      appDetails: {
        name: "/GiftStacks/",
      },
      onFinish: function () {
        const userData = userSession.loadUserData();
        setCurUser(userData.profile.stxAddress.testnet);
        sessionStorage.setItem("curUser", userData.profile.stxAddress.testnet);
      },
      userSession,
    });
  };

  return (
    <Auth.Provider value={{ curUser, handleAuthenticate }}>
      {children}
    </Auth.Provider>
  );
}

export function AuthContext() {
  const context = useContext(Auth);

  if (context === undefined)
    throw new Error("Context is used out of scope area");

  return context;
}
