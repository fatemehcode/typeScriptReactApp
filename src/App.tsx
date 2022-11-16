import Person from './components/Person';
import './App.css';
import { Sex } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name="sara"
        email="sara@gmail.com"
        age={19}
        status={true}
        friends={["admin","baran","sam"]}
        country=""
        sex={Sex.femail}
      />

    </div>
  );
}

export default App;
