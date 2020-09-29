import React from 'react';
import ChatMessage from './ChatMessage.js'

function Chat(props) {
  let messages = props.chatEvents.map(function (chat) {
    return <ChatMessage participantId={chat.participantId} type={chat.type} timestamp={chat.timestamp} />;
  });

  let chat = (
    <div className='chat'>
      {messages}
      <form class="chat-form">
        <textarea className="chat-form-input" placeholder="Chat"></textarea>
        <input type="submit" class="chat-form-submit" />
      </form>
    </div>
  )

  return chat;

}

export default {
  Chat
}