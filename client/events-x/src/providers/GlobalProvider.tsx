import React, { useEffect, createContext, useState } from "react";
import Keycloak from "keycloak-js";

interface IGlobalProviderProps {
  children?: JSX.Element | JSX.Element[];
}
interface IGlobalState {
  cur_user: any;
  initKeycloak: any;
}
const initialState: IGlobalState = {
  cur_user: {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  initKeycloak: () => {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider: React.FC<IGlobalProviderProps> = ({
  children,
}) => {
  const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "EventsX",
    clientId: "eventsx_client",
  });
  const initKeycloak = () => {
    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
        scope: "offline_access", // 'check-sso', 'login-required'
      })
      .then(function (authenticated) {
        //call a function to set settings
        return true;
        console.log(authenticated);
      });
  };
  initKeycloak();
  const state_val: IGlobalState = {
    initKeycloak: initKeycloak,
    cur_user: keycloak,
  };
  return (
    <GlobalContext.Provider value={state_val}>
      {children}
    </GlobalContext.Provider>
  );
  const initKeycloakUser = async () => {};

  const handleTeamChange = async () => {};
};
