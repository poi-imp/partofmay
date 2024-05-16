import './App.css';
import SignIn from './components/SignIn';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";
import Line from './components/Line';
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">{user ? <Line /> : <SignIn />}</div>
  );
}

export default App;

// https://zenn.dev/y_ta/books/d007090d6478dc/viewer/df99bb