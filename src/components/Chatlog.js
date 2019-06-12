import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types'

const messageData = (messages) => {
  return messages.map((post) => {
    return (
      <Message sender={ post.sender } 
                body={ post.body } 
                timestamp={ post.timeStamp } />
      )
    })
  }
  
  const Chatlog = (props) => {
    return (
      <section class="chat-log">
        { messageData(props.messages) } 
      </section>
    )
  } 
  Chatlog.propTypes = {
    messages: PropTypes.array
  }

export default Chatlog;