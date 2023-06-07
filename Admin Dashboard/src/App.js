import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Sidebar from "./Components/Sidebar"
import Content from "./Components/Content"



function App() {
  return (
    <div className="sidebar-toggled">
      <div className="admin-content">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
