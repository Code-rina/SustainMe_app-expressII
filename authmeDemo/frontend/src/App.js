import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Comments from "./components/Comments";
import Home from "./components/Home"
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Modal } from "./context/Modal";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <>
      <Navigation />
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
      <Navigation isLoaded={isLoaded} />
      {/* <button onClick={() => setShowModal(true)}>Modal</button>
      <Comments />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Hello I am a Modal</h1>
        </Modal> */}
      {/* )} */}
      {isLoaded && (
        <Switch>

          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      </Switch>
    </>
    </BrowserRouter>
  );
}

export default App;
