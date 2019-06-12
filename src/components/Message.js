import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => {
  return(
    <section className='entry-bubble'>
      <h3>
        {props.sender}
      </h3>
      <p>
        {props.body}
      </p>
      <p>
        <Timestamp time={props.timeStamp} />
      </p>
    </section>
  ) 
}

export default Message;