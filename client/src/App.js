import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./constants";

import NavBar from "./components/nav-bar";
import FormPlayer from "./components/form-player";
import Home from "./pages/home";
import Drop from "./pages/drop-xp";
import Donjons from "./pages/donjons";
import Room from "./pages/room";

import "./App.scss";

function App() {
  const [logged, setLogged] = useState(false);
  const [storage, setStorage] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user") === null) return;
    handleCreateUser();
  }, [logged]);

  const handleCreateUser = () => {
    setLogged(true);
    setStorage(JSON.parse(localStorage.getItem("user")));
  };

  const handleUpdateUser = () => {
    setStorage(JSON.parse(localStorage.getItem("user")));
  };

  return (
    <div className="App">
      <Router>
        <NavBar logged={logged} />
        <Route
          path="/room/:roomName"
          render={(props) =>
            logged ? <Room {...props} /> : <Redirect to={ROUTES.HOME} />
          }
        />
        <Route
          path="/profile/:last?"
          render={(props) =>
            logged ? (
              <FormPlayer
                {...props}
                initialValues={storage}
                onSave={() => handleUpdateUser()}
                title="Modifier votre personnage"
                buttonText="Valider"
              />
            ) : (
              <FormPlayer
                {...props}
                onSave={() => handleCreateUser()}
                title="Créer votre personnage"
                subTitle="Merci de rentrer des informations valides afin que les autres joueurs puissent vous retrouver dans le jeux"
                buttonText="Trouver un groupe"
              />
            )
          }
        />

        <Route
          path={ROUTES.NEW}
          render={(props) => (
            <FormPlayer
              {...props}
              onSave={() => handleCreateUser()}
              title="Créer votre personnage"
              subTitle="Merci de rentrer des informations valides afin que les autres joueurs puissent vous retrouver dans le jeux"
              buttonText="Trouver un groupe"
            />
          )}
        />
        <Route
          path={ROUTES.DONJON}
          render={(props) => (
            <Donjons {...props} user={storage} logged={logged} />
          )}
        />
        <Route
          path={ROUTES.ZONES}
          render={(props) => <Drop {...props} user={storage} logged={logged} />}
        />
        <Route
          exact
          path={ROUTES.HOME}
          render={(props) => <Home {...props} user={storage} logged={logged} />}
        />
      </Router>
      <div className="footer">
        <p>
          Dofus est un MMORPG édité par Ankama. "retro-match.app" est un site
          non-officiel sans aucun lien avec Ankama.
        </p>
        <p>
          Certaines illustrations sont la propriété d'Ankama Studio et de Dofus
          - Tous droits réservés
        </p>
      </div>
    </div>
  );
}

export default App;
