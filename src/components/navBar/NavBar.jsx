import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import { paths } from '../../constants';

export const NavBar = () => {
  const history = useHistory();
  const handleClickLink = (path) => (event) => {
    event.preventDefault();
    history.push(path)
  }

  return (
    <div className="navBar" >
      <a href="#" onClick={handleClickLink(paths.list1)}><div className="num">1</div></a>
      <a href="#" onClick={handleClickLink(paths.list2)}><div className='num'>2</div></a>
      <a href="#" onClick={handleClickLink(paths.list3)}><div className="num">3</div></a>
      <a href="#" onClick={handleClickLink(paths.list4)}><div className="num">4</div></a>
    </div>
  )
}