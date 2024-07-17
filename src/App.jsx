import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from "./Pages/Add"
import View from './Pages/View'
import Edit from './Pages/Edit'
import Login from './Pages/Login'

function App() {

  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Add" element={<Add/>} />
        <Route path="/View" element={<View/>} />
        <Route path="/edit" element={<Edit/>} />

      </Routes>
    </BrowserRouter>
</>
  )
}

export default App
