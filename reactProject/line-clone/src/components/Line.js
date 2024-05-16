import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage.js";
import SignOut from "./SignOut.js";


function Line() {
  

  const [messages, setMessages] = useState([]);
//   map が機能しない時、messagesとかが配列になってないことが多い

  const scroll = useRef();


  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(100)
      .onSnapshot((snapshot) => { setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${ uid === auth.currentUser.uid ? "sent" : "received"}`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Line;