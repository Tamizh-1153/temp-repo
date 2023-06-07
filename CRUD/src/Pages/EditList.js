import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useUserContext } from "../App"

const EditList = () => {
  const { id } = useParams()
  
  const { users, setUsers } = useUserContext()
  const edit = users.find((item) => item.id == id)

  let refresh=useNavigate()


  const handleUpdate = (e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const mobileNo = e.target.elements.mobileNo.value

    const updatedUsers = users.map((user) =>
      user.id == id ? { ...user, id:id,name:name,email:email,mobileNo:mobileNo } : user
    )
    
    setUsers(updatedUsers);
    refresh('/')
  }

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="d-flex flex-column align-items-center"
      >
        <input
        required
          style={{ width: "50%" }}
          className="form-control my-2 "
          type="text"
          name="name"
          defaultValue={edit.name}
        />
        <input
        required
          style={{ width: "50%" }}
          className="form-control my-2"
          type="text"
          name="email"
          defaultValue={edit.email}
        />
        <input
        required
          style={{ width: "50%" }}
          className="form-control my-2"
          type="tel"
          pattern="[0-9]{10}"
          name="mobileNo"
          defaultValue={edit.mobileNo}
        />
        <button type="submit" className="btn btn-primary py-1">
          Update
        </button>
      </form>
    </div>
  )
}

export default EditList
