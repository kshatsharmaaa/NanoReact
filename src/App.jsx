
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/randomColor'
import StarRating from './components/starRating'

function App() {


  return (
    <>
    <h2>Nanoreact!</h2>
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
