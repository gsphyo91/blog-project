import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CssBaseLine from "@material-ui/core/CssBaseline";


import NavBar from "./Components/NavBar";
import PostList from "./pages/postLists/PostList";


function App() {
  return (
    // <Fragment>
    //   <CssBaseLine />
    //   <NavBar />
    //   <Container>
    //     <Content />
    //   </Container>
    // </Fragment>
    <BrowserRouter>
      <CssBaseLine />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <PostList />
        </Route>
        <Route path="/newPost" exact></Route>
        <Route path="/:id" exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
