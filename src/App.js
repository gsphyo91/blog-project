import React, { Fragment } from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import NavBar from "./Components/NavBar";
import Content from './Components/Content';

function App() {
  return (
    <Fragment>
      <CssBaseLine />
      <NavBar />
      <Container>
        <Content />
      </Container>
    </Fragment>
  );
}

export default App;
