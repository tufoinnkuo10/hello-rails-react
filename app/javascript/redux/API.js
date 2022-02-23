import { loadMessageData } from "./message";

const URL = 'messages';

export const getMessageData = async (dispatch) =>{
  const response = await fetch(URL);
  const data = await response.json();
  dispatch(loadMessageData(data));
};