import "./App.css";
import { persistor, store } from "./Redux/store";
import Routers from "./Router/Routers";
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routers />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
