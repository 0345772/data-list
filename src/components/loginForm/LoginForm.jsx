import React from 'react';
import { useDispatch } from 'react-redux';
import { profileActions } from "../../store/profile";
import './style.css';

export const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const profile = {
      name: form["name"].value,
      lastName: form["lastName"].value,
      phone: form["phone"].value
    }

    dispatch(profileActions.setProfile(profile));

  }


  return (
    <form className="form form-login" onSubmit={handleSubmit}>
      <div className="field">
        <input type="text" name="name" placeholder="name" autocomplete="off" />
      </div>
      <div className="field">
        <input type="text" name="lastName" placeholder="lastName" autocomplete="off" />
      </div>
      <div className="field">
        <input type="text" name="phone" placeholder="phone" autocomplete="off" />
      </div>
      <button
        className="btn btn-outline-secondary"
        type="onSubmit">
          Отправить 
      </button>
    </form>

  )
}