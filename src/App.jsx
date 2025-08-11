import Features from "./components/Features"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Message from "./components/Message"
import Nav_bar from "./components/Nav_bar"
import Skills from "./components/Skills"


function App() {

  return (
    <div className="bg-gray-800  gap-4 h-[100%] w-[100%]"> 
<Nav_bar/>
<Home/>
<Features/>
<Skills/>
<Message/>
<Footer/>
    </div>
  )
}

export default App
