import { useEffect, useState } from 'react';
import './App.css';
import  database  from './firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [username, setUsername] = useState('Guest');

  useEffect(() =>{
    const name = window.prompt("Enter a username");
    setUsername(name);
  }, []);

  useEffect(() => {
    // this code will run ONCE when app component mounts
    database
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setList(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    const chatMessage = {
      name: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    database.collection('messages').add(chatMessage);
    setInput("");
  };

  console.log(input);
  return (
    <div className="app">
      <h1>This is chat App</h1>

      {list.map(({ id, data: { message, timestamp, name} }) => (
        <h3 key={id} className='chatMessage'>
          {name}: {message}
        </h3>
      ))}

      <form>
        <input 
          value={input} 
          onChange={event => setInput(event.target.value)}
        />
        <button onClick={sendMessage} type="submit">Send message</button>
      </form>
      
    </div>
  );
}

export default App;
