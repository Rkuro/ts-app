import * as React from 'react';
import './App.css';
import Hello from "./containers/Hello_Container"
import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import { Provider } from 'react-redux';

const store = createStore<StoreState, any, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});



class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
            <Hello />
        </Provider>
    );
  }
}

export default App;
