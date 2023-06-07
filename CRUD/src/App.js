import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import UserListing from "./Components/UserListing"
import EditList from "./Pages/EditList"
import { user } from "./user"
import { createContext, useContext, useState } from "react"
import Read from "./Pages/Read"

export const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

function App() {
  const [users, setUsers] = useState(user)
  return (
    <div>
      <h1 className="text-center m-3 fw-medium">CRUD Operations</h1>
      <UserContext.Provider value={{ users, setUsers }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserListing />}></Route>
            <Route path={`/EditList/:id`} element={<EditList />}></Route>
            <Route path={`/Read/:id`} element={<Read />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
