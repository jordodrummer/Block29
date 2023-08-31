import {Route, Routes, Link, BrowserRouter} from "react-router-dom"

function App() {

  return (
      <div>
      <BrowserRouter>
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
    </Routes>
</BrowserRouter>
<Link to='/'>To Home</Link>
      </div>
  )
}

export default App
