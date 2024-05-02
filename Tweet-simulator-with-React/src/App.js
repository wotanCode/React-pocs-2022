import React, { useState, useEffect } from "react";
import { Container, Snackbar } from "@mui/material";
import Header from "./components/header";
import SendTweet from "./components/sendtweet";
import ListTweets from "./components/ListTweets";
import { TWEET_STORAGE } from "./utils/contants";
import "./App.css";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEET_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
  }, []);

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} />

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
