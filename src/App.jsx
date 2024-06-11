import { useState } from 'react';
import './App.css'
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome'
import Notes from './components/Notes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  return (
    <>
    {isLoggedIn ? 
    <>
      <Welcome 
        styleData={{backgroundColor : 'black', color : 'red'}}
        name={name} 
        setIsLoggedIn={setIsLoggedIn } 
        setName={setName}/>
      <Notes styleData={{backgroundColor : 'black', color : 'red'}}/>
    </>
    :
    <>
      <LoginForm 
        styleData={{backgroundColor : 'black', color : 'red'}}
        setIsLoggedIn={setIsLoggedIn}
        setName={setName}
        />
      <Notes styleData={{backgroundColor : 'black', color : 'red'}}/>
    </>
    }
    </>
  )
}

export default App;