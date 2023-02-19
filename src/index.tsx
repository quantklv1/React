import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//Components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Complete from './components/Complete';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/app/store';

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-5" style={{ maxWidth: 800 }}>
        <TodoForm />
        <TodoList />
        <Complete />
      </div>
    </div>
  );
}

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
