import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

import Input from "../input";
import Select from "../select";
import Button from "../button";
import ElementSelector from "../element-selector";
import InputMax from "../input-max";
import { checkName } from "../../Utils";

import { CLASSES, SERVERS } from "../../constants";

import "./FormPlayer.scss";

const FormPlayer = ({ onSave, title, subTitle, buttonText, initialValues }) => {
  const [userInfos, setUserInfos] = useState(
    initialValues
      ? initialValues
      : {
          pseudo: "",
          class: 1,
          elements: [],
          server: 1,
          level: "",
          message: "",
        }
  );
  const [redirect, setRedirect] = useState(false);
  const { last } = useParams();
  const redirectionUrl = last ? `/room/${last}` : "/";
  const [error, setError] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!checkName(userInfos.pseudo).pass)
      return setError(checkName(userInfos.pseudo).message);

    localStorage.setItem("user", JSON.stringify(userInfos));
    onSave();
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={redirectionUrl} />;
  }
  return (
    <div className="form-player">
      <div className="container">
        <h1 className="container__title">{title}</h1>
        {subTitle && <p className="container__subtitle">{subTitle}</p>}
        {error && <p className="warning-form">{error}</p>}
        <form className="container__form" onSubmit={(e) => handleSubmitForm(e)}>
          <Select
            id="server"
            value={userInfos.server}
            label="Serveur"
            options={SERVERS}
            onChange={(e) =>
              setUserInfos({ ...userInfos, server: e.target.value })
            }
          />
          <Select
            id="classes"
            required={true}
            value={userInfos.class}
            label="Classe"
            options={CLASSES}
            onChange={(e) =>
              setUserInfos({ ...userInfos, class: e.target.value })
            }
          />
          <Input
            label="Nom du personnage"
            id="pseudo"
            type="text"
            value={userInfos.pseudo}
            onChange={(e) =>
              setUserInfos({ ...userInfos, pseudo: e.target.value })
            }
          />
          <Input
            label="Niveau"
            id="level"
            type="number"
            max={200}
            min={1}
            value={userInfos.level}
            onChange={(e) =>
              setUserInfos({ ...userInfos, level: e.target.value })
            }
          />
          <ElementSelector
            initialValues={userInfos.elements}
            onChange={(value) =>
              setUserInfos({ ...userInfos, elements: value })
            }
          />
          <InputMax
            label="Message visible par les autres"
            type="text"
            max={90}
            value={userInfos.message}
            onChange={(e) =>
              setUserInfos({ ...userInfos, message: e.target.value })
            }
          />
          <Button text={buttonText} />
        </form>
      </div>
    </div>
  );
};

export default FormPlayer;
