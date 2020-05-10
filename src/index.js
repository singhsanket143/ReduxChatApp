import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from "./store";

const render = () => {
    fancyLog();
    return ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

function fancyLog() {
    console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF");
    console.log(store.getState());
}

render();
store.subscribe(render);

serviceWorker.unregister();
