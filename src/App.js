import { useState } from 'react'
import './App.css'
import Input from './Input'

function App() {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState('Gabe')
  const [isGabe, setIsGabe] = useState(true)
  const [objUser, setObjUser] = useState({name: "Gabe", location: "Berkeley"})
  const [finishedGrades, setFinishedGrades] = useState([55, 75, 100])

  const increaseCount = () => {
    setCount(count + 1)
  }

  const setToWeston = () => {
    setUser('Weston')
    setIsGabe(false)
  }
  const setToGabe = () => {
    setUser('Gabe')
    setIsGabe(true)
  }
  const setToApril = () => {
    setUser('April')
    setIsGabe(false)
  }
  const setObjUserToWeston = () => {
    setObjUser({...objUser, name: "Weston"})
  }
  const setObjUserToApril = () => {
    setObjUser({...objUser, name: "April"})
  }
  const setObjUserToGabe = () => {
    setObjUser({...objUser, name: "Gabe"})
  }
  const addHundred = () => {
    setFinishedGrades([...finishedGrades, 100])
  }

  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={increaseCount}>Count</button>

      <h2 style={{color: isGabe ? 'purple' : 'black'}}> The user is: {user}</h2>
      <button onClick={setToWeston}>Weston</button>
      <button onClick={setToApril}>April</button>
      <button onClick={setToGabe}>Gabe</button>
      <Input user={user} setUser={setUser}/>
      {/* <h2>{objUser.name}</h2>


      <h2>{objUser.location}</h2>
      <button onClick={setObjUserToWeston}> SetObjUserWeston</button>
      <button onClick={setObjUserToGabe}> SetObjUserGabe</button>
      <button onClick={setObjUserToApril}> SetObjUserApril</button> */}

      <h1>Grades:</h1>
      {finishedGrades.map((grade, idx) => {
        return <p key={`grade${idx}`}>{grade}</p>
      })}
      <button onClick={addHundred}>New 100</button>

    </div>
  );
}

export default App;
