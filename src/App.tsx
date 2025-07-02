
import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar"

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
