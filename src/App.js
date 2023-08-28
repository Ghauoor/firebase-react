import { getDatabase, ref, set } from "firebase/database";

import { app } from "./config/firebase";
import "./App.css";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/ghayoor"), {
      id: 1,
      name: "Ghayoor",
      hobby: "coding",
    });
  };
  return (
    <div className="App-header">
      <h1>Firebase App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
