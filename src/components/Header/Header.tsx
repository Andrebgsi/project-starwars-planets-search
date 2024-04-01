import React from 'react';
import logo from '../../imagens/star-wars-logo.svg';
import style from './Header.module.css';

export default function Header() {
  return (
    <div className={ style.header }>
      <img src={ logo } alt="Star Wars" className={ style.logo } />
      <h1>PLANETS</h1>
      <div id={ style.space }>
        <div className={ style.stars } />
        <div className={ style.stars } />
        <div className={ style.stars } />
        <div className={ style.stars } />
      </div>
    </div>
  );
}
