import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Message from './Message';
import store from '../redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;