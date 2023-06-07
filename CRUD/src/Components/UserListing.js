import React from "react"

import AddList from "../Pages/AddList"
import { Link, useNavigate } from "react-router-dom"
import EditList from "../Pages/EditList"
import { useUserContext } from "../App"

const UserListing = () => {
  const { users, setUsers } = useUserContext()

  let refresh = useNavigate()

  const handleDelete = (user) => {
    const deletedUser = users.indexOf(user)

    users.splice(deletedUser, 1)
    refresh("/")
  }

  return (
    <div className="container">
      <div className="card w-100">
        <div className="card-title">
          <h2 className="text-center m-4 mb-1">User Listing</h2>
        </div>
        <div className="card-body">
          <AddList />
          <table
            style={{ width: "100%" }}
            className="table table-bordered table-hover align-middle table-responsive-sm my-3"
          >
            <thead className="bg-dark text-white">
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile.No</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="align-content-center">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNo}</td>
                  <td>
                    <Link to={`Read/${user.id}`}>
                      <button className="btn btn-success">
                        <i class="fa-regular fa-eye"></i>
                      </button>
                    </Link>
                    <Link to={`/EditList/${user.id}`}>
                      <button
                        className="btn btn-secondary m-1"
                        onClick={() => <EditList />}
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger m-1"
                      onClick={() => handleDelete(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserListing
