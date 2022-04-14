import React from 'react';
import './App.css';
import Header from '../Header/Header'
import pixApi from '../../utills/MailApi';

function App() {

  React.useEffect(() => {
    pixApi.getCategory('dogs')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log((err)));
  });

  return(
    <main className='main-container'>
      <Header/>
    </main>
  )
}

export default App;