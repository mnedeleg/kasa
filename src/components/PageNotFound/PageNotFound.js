import React from 'react'

const NotFound = () => {
  return (
    <div className='block-notfound'>
        <p className='block-404'>404</p>
        <h1 className='block-Oups'>Oups! La page que vous demandez n'existe pas.</h1>
        <a className='block-redirection' href="/">Retourner à la page d'accueil</a>
    </div>
  );
}

export default NotFound;