import React from "react";
import { Grid } from "@mui/material";
import "./listtweets.scss";
import Tweet from "../tweet";

//Componente para la lista de tweets
export default function ListTweets(props) {
  const { allTweets } = props;
  console.log(allTweets);
  //En caso de que no existan tweets:
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay Tweets</h2>
      </div>
    );
  }

  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet tweet={tweet} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
