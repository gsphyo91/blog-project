import React from "react";
import { Container, Input, makeStyles } from "@material-ui/core";
import DraftEditor from "./DraftEditor";

const useStyles = makeStyles({
  title: {
    width: "100%",
    fontSize: 36,
    fontWeight: "bold",
  },
  editor: {
    height: "300px",
    width: "100%",
    border: "1px solid black",
  },
});

const NewPost = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <form>
        <Input className={classes.title} placeholder="Title" />
        <DraftEditor />
      </form>
    </Container>
  );
};

export default NewPost;
