import './App.css';
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
  const [ user ] = useAuthState(auth);  //if we are logged in user will be true otherwise false
  return (
    <>
      {user ?  <Chat /> : <SignIn />}
    </>
  );
}

export default App;


// material <UI></UI>
// firebase
// firestore
// react
