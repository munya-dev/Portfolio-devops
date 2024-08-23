import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import OrganizerList from "./components/OrganizerList";
import { GlobalContext } from "./providers/GlobalProvider";
import Home from "./pages/Home";

function App() {
  const [organizers, setOrganizers] = useState();

  const { cur_user, initKeycloak } = useContext(GlobalContext);

  const getOrganizers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/organizer");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchOrganizers = async () => {
      const res = await getOrganizers();
      if (res) setOrganizers(res);
    };
    fetchOrganizers();
  }, []);

  return (
    <div>
      {cur_user && initKeycloak && (
        <Home/>
      )}
    </div>
  );
}

export default App;
