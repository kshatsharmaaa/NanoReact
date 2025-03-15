
import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/imageSlider'
import LoadMoreData from './components/loadMoreData'
import RandomColor from './components/randomColor'
import StarRating from './components/starRating'

function App() {


  return (
    <>
    <h2>Nanoreact!</h2>
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/>
      <LoadMoreData/>
    </>
  )
}

export default App
