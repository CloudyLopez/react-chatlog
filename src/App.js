import React from 'react';
import './App.css';
import Messages from './data/messages.json';
import Chatlog from './components/Chatlog';

const App = () => {
  console.log(Messages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">WeBeChattin</h1>
      </header>
      <main className="App-main">
      <Chatlog messages={ Messages } />
      </main> 
    </div>
  );
};

export default App;
