import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageData } from '../redux/API';
import store from '../redux/configureStore';
import './Message.css';
store.dispatch(getMessageData);

const Message = () => {
  const messages = useSelector((state) => state.messageData);

  return <p>{messages}</p>;
};

export default Message;
