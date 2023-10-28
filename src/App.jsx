import { useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useState } from "react";
import Chat from "./pages/Chat";

function App() {
  const [isAuth, setIsAuth] = useState();
  const [room, setRoom] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom(e.target[0].value);
  };
  if (isAuth === false) {
    return (
      <>
        <div className="container">
          <AuthPage />
        </div>
      </>
    );
  }

  return (
    <div className="container">
      {room ? (
        <Chat room={room} setRoom={setRoom} />
      ) : (
        <form onSubmit={handleSubmit} className="room-page">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Giriceksiniz</p>
          <input required placeholder="örn:haftasonu" type="text" />
          <button className="submit">Odaya Gir</button>
          <button className="button">Çıkış Yap</button>
        </form>
      )}
    </div>
  );
}

export default App;
