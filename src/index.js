import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Button from "./Button/Button"
import registerServiceWorker from './registerServiceWorker';

const ButtonGroup = () => (
      <div>
      <Button mode="primary" text="primary"/>
      <Button mode="warning" text="warning"/>
      <Button mode="info" text="info"/>
      <Button mode="danger" text="danger"/>
      </div>
    )



ReactDOM.render(<ButtonGroup/>, document.getElementById('root'));
registerServiceWorker();
