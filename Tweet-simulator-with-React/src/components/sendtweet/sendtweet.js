import React, { useState } from "react";
import "./sendtweet.scss";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import FormSendTweet from "../formsendtweet";
import ModalContainer from "../modalcontainer";
import { TWEET_STORAGE } from "../../utils/contants";

export default function SendTweet(props) {
  const { setToastProps, allTweets } = props;
  //Boton inferior para abrir el Modal para crear tweet
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  //enviar el formulario
  const sendTweet = (event, formValue) => {
    event.preventDefault();
    console.log("Enviando tweet");
    console.log(formValue);
    //Aqui esta el objeto
    const { name, tweet } = formValue;
    let AllTweetsArray = [];

    if (allTweets) {
      AllTweetsArray = allTweets;
    }

    //Tienen que existir ambos campos
    if (!name || !tweet) {
      console.log("Todos los campos del formulario son obligatorios");
      setToastProps({
        open: true,
        text: "Todos los campos del formulario son obligatorios.",
      });
    } else {
      //guardamos el momento del tweet
      formValue.time = moment();
      //Metemos en el arreglo el contenido del formValue
      AllTweetsArray.push(formValue);
      //Lo guardamos en el LocalStorage con un JSON
      localStorage.setItem(TWEET_STORAGE, JSON.stringify(AllTweetsArray));
      console.log("Tweet enviado correctamente.");
      setToastProps({
        open: true,
        text: "Tweet enviado correctamente.",
      });
      //Cerramos el modal
      closeModal();
      //Limpiamos el arreglo
      AllTweetsArray = [];
    }
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      {/* Abrimos modal */}
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        {/* llamamos al form dentro del modal y enviamos sendTweet */}
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
}
