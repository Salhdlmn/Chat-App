import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";

const Chat = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  const messagesCol = collection(db, "messages");

  useEffect(() => {
    const queryOptions = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(queryOptions, (snapshot) => {
      const comingMsgs = [];
      snapshot.docs.forEach((doc) =>
        comingMsgs.push({ ...doc.data(), id: doc.id })
      );
      setMessages(comingMsgs);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    await addDoc(messagesCol, {
      text,
      room,
      user: {
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      },
      createdAt: serverTimestamp(),
    });
    e.target[0].value = "";
  };
  return (
    <div className="chat">
      <header>
        <p className="user">Kullanıcı Adı</p>

        <p>{room}</p>

        <a onClick={() => setRoom(null)}>Farklı Oda</a>
      </header>

      <main>
        {messages.map((msg) => (
          <Message key={msg.id} msg={msg} />
        ))}
      </main>

      <form onSubmit={handleSubmit}>
        <input required placeholder="mesajınızı yazınız..." type="text" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
