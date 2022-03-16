import './App.css'
import { Route ,Routes} from 'react-router-dom'
import Home from './components/Home'
import SignUpForm from './components/Signup'
import LoginForm from './components/Login'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUpForm/>} />
      <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </div>
  )
}

export default App
