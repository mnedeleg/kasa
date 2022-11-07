import React from 'react'


const NotFound = () => {
  return (
    <div>
        <p className='Error-404'>404</p>
        <h1 className='Error-Oups'>Oups! La page que vous demandez n'existe pas.</h1>
        <a className='Error-redirection' href="/">Retourner à la page d'accueil</a>
    </div>
  );
}

export default NotFound;