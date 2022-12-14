import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
      <div className="nav-main-container">
        <NavLink className="logoish"exact to="/">SustainMe</NavLink>
        <NavLink className="tab-nav"exact to="/about">About</NavLink>
        <NavLink className="tab-nav"exact to="/nearbyPlaces">Nearby Places</NavLink>
        <NavLink className="tab-nav"exact to="/events">Events</NavLink>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;