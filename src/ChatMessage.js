import React from 'react'


// the expected props will be one chat message object, 
//ex:
// {
//   participantId: 3,
//   type: 'message',
//   message: 'Hello world',
//   time: 1548852646559,
//   timestamp: 1548852484247
// }

// {
//   participantId: 2,
//   type: 'thumbs-up',
//   timestamp: 1548852484247
// }


function ChatMessage(props) {
  console.log(props);
  let chatMessage = (<div>no message found</div>);
  let date = new Date(props.timestamp);
  if(props.type === 'message') { //right now we're just going to assume everything is type message
    chatMessage = (
    <div className='chat-message'> 
      <div className='message-top'>
        <h4>{props.participantId}</h4>
        <h4>{date.getHours()} {date.getMinutes()}</h4>
      </div>
      <div className='message-body'>
        <p>props.message</p>
      </div>
    </div>
    );
  }
  else {
    console.log('GIVE ME MESSAGES ONLY YOU NOOB');
  }

  return chatMessage;
};

export default ChatMessage
