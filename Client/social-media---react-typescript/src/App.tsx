// import { Provider } from "react-redux";
import "./App.css";
import Routers from "./Router/Routers";
// import { persistor, store } from "../../../store";
// import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        {/* <PersistGate persistor={persistor}> */}
          <Routers />
        {/* </PersistGate> */}
      {/* </Provider> */}
    </>
  );
}

export default App;
