import React ,{useState , useEffect} from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('')

  useEffect( () => {
    getAdvice()
  },[])

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        const {advice} = res.data.slip
        setAdvice(advice)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={getAdvice} className="button">
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
