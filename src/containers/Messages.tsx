import React from 'react';
import Message from "../components/Message";
import {useMessages} from "../hooks/messages";
import Button from "../components/Button";
import {IMessage} from "../models";


const Messages = () => {
  const {messages, submitHandler, value, changeHandler, error} = useMessages();

  return (
    <div className='sm:container mx-auto px-5 py-8 bg-emerald-50'>
      {error && <p>{error}</p>}
      <form className='flex w-full'onSubmit={submitHandler}>
        <textarea
          rows={2}
          className='w-full px-2 py-2 border-2 border-emerald-600'
          name='message'
          value={value.message}
          onChange={changeHandler}
        />
        <Button text='Send' type='submit' addStyle={'pl-4 ml-3'}/>
      </form>
      {messages.map((message:IMessage, index:number) => <Message message={message} key={message._id} index={index}/>)}
    </div>
  );
};

export default Messages;