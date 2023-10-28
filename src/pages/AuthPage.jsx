import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";

const AuthPage = () => {
  const handleClick = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="auth">
      <h1>Chat Odası</h1>
      <p>Devam Etmek İçin Giriş Yapın</p>
      <button onClick={handleClick}>
        <img src="/google-lll.png" />
        <span>Google İle Giriş Yapın</span>
      </button>
    </div>
  );
};

export default AuthPage;
