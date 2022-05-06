import Header from './components/header.jsx'
import Enemy from './components/Enemy.jsx'
import Store from './components/Store.jsx'

import {Provider} from "react-redux"
import store from "./redux/store.mjs"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Enemy/>
      <Store/>
    </div>
    </Provider>
  );
}

export default App;
