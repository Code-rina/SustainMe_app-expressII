import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Comments from "./components/Comments";
import Home from "./components/Home";
import About from "./components/About";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Modal } from "./context/Modal";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <button onClick={() => setShowModal(true)}>Modal</button> */}
      {isLoaded && (
        <Switch>
      <Comments />
      <Route exact path="/">
        <Home />
      </Route>
      {/* {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal>
      )} */}
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
