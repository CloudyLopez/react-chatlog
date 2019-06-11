import React from 'react';
import Timestamp from './Timestamp';
import Messages from './Messages';

const messageData = (props) => {
  return props.messages.map((post) => {
    return (
      <Messages sender={ post.sender } body={ post.body } timestamp={ post.timeStamp } />
      )
    })
  }

  const Chatlog = (props) => {
  return (
    <section>
      { messageData(props) } 
    </section>
  )
}

export default Chatlog;