import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";
import "./formsendtweet.scss";

//Este es el formulario donde se crea el tweet
export default function FormSendTweet(props) {
  //Recuperamos por props la funciona enviada en formsendtweet
  const { sendTweet } = props;
  //Con useState vamos a enviar el contenido del formulario
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });
  //Aqui vamos a actualizar el estado de formValue que es lo que toma del twweet
  const onFormChange = (event) => {
    //Utilizamos el expressOperator
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__tittle">Enviar tweet</h2>
      <form
        onSubmit={(event) => sendTweet(event, formValue)}
        //Cada vez que cambie el formulario actualizamos el estado con setFormValue
        onChange={onFormChange}
        className="form-send-tweet__form"
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              margin="normal"
              placeholder="Nombre del usuario"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              multiline
              name="tweet"
              rows="6"
              placeholder="Escribe tu tweet..."
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Escribe tu tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
