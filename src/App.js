import './App.css';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import RevenueTable from './components/RevenueTable';
import SocketConnection from "./socket/socket";
import { allocationReceived } from "./store/waterDispense";
import { resultReceived } from "./store/waterAllocation";

const listen_url = "ws://localhost:9001";
const store = configureStore();
const types = {
  CURRENT: "CURRENT_STATE",
  RESULT: "OPTIMATION_RESULT"
};
const updateDataFromSocket = (data) => {
  if(data.type === types.CURRENT) {
    store.dispatch(allocationReceived(data))
  } else if(data.type === types.RESULT) {
    store.dispatch(resultReceived(data))
  }
};
// establish socket connection
const sk = new SocketConnection(listen_url, updateDataFromSocket);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RevenueTable />
      </div>
    </Provider>
  );
}

export default App;
