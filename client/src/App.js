import Form from "./components/Form/Form";
import {useState} from "react";
import './App.css';

function App() {
    const [ninjas, setNinjas] = useState(null);

    const handleSubmit = async (values) => {
        const {lng, lat} = values;
        try {
            const res = await fetch(`api/ninjas?lng=${lng}&lat=${lat}`);
            const data = await res.json();
            setNinjas(data);
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className="App">
      <header className="App-header">
            <h1 className="title">Ninjago - a Ninja REST API</h1>
      </header>
        <Form onSubmit={handleSubmit}/>
        <div className="content">
            <h1>Hire a ninja in your area!</h1>
            {ninjas?.length > 0 ?
            <>
                <span>{`${ninjas.length} Results found`}</span>
            <ul>
                {ninjas.map((ninja, idx) => {
                    return <li key={idx}>
                        <span className="name">Name: {ninja.name}</span>
                        <span className="ninja">Available: {ninja.available.toString()}</span>
                        <span className="rank">Rank: {ninja.rank}</span>
                        <span className="dist">From you: {Math.floor(ninja.dis / 1000)} km</span>
                    </li>
                })}
            </ul>
            </>
                : <div>No results to show</div>}
        </div>
    </div>
  );
}

export default App;
