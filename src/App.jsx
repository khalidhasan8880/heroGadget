import { Outlet } from "react-router-dom"
import About from "./components/About"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"

const App = () => {
  return <>
    <Header></Header>
    <div className='min-h-[calc(100vh-150px)]'>
      <Outlet ></Outlet>
    </div>
    <Footer></Footer>
  </>
}

export default App
