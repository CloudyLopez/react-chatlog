import React from 'react';
import Timestamp from './Timestamp';

const messagesTimeStamp = (props) => {
  return <Timestamp time={props} />
}

const Messages = (props) => {
  return(
    <section>
      <h3>
        Sender: {props.sender}
      </h3>
      <p>
        Body: {props.body}
      </p>
      <p>
        Timestamp: { messagesTimeStamp(props.timeStamp) }
      </p>
    </section>
  ) 
}


export default Messages;