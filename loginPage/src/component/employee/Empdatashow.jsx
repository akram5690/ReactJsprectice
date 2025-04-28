import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'

const Empdatashow = () => {
  const [getdata, setGetdata] = useState([])
  const [editdata, setEditdata] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const fetchdata = () => {
    const data = JSON.parse(localStorage.getItem("employee")) || []
    setGetdata(data)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const handleEdit = (item) => {
    setEditdata(item)
    setModalOpen(true)
  }

  const handleChange = (e) => {
    setEditdata({ ...editdata, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const updated = getdata.map(item => item.id === editdata.id ? editdata : item)
    localStorage.setItem("employee", JSON.stringify(updated))
    setGetdata(updated)
    setModalOpen(false)
  }

  const handleDelete = (id) => {
    const filtered = getdata.filter(item => item.id !== id)
    setGetdata(filtered)
    localStorage.setItem("employee", JSON.stringify(filtered))
  }

  return (
    <>
      <Navbar />
      <div className="overflow-x-auto mt-20">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Salary</th>
              <th className="py-2 px-4">DOJ</th>
              <th className="py-2 px-4">Designation</th>
              <th className="py-2 px-4">Profile</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {getdata.map(item => (
              <tr key={item.id} className="text-center border-b">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">₹ {item.salary}</td>
                <td className="py-2 px-4">{item.doj}</td>
                <td className="py-2 px-4">{item.designation}</td>
                <td className="py-2 px-4">
                  <img src={item.profile} alt="profile" className="h-12 w-12 rounded-full object-cover mx-auto" />
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button onClick={() => handleEdit(item)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-40">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Edit Employee</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">ID</label>
                <input type="text" name="id" value={editdata.id} disabled className="w-full border px-3 py-2 rounded bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input type="text" name="name" value={editdata.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" name="email" value={editdata.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Salary</label>
                <input type="number" name="salary" value={editdata.salary} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium">Date of Joining</label>
                <input type="date" name="doj" value={editdata.doj} disabled className="w-full border px-3 py-2 rounded bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium">Designation</label>
                <select name="designation" value={editdata.designation} onChange={handleChange} className="w-full border px-3 py-2 rounded">
                  <option value="">Select</option>
                  <option value="HR">HR</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="Team Lead">Team Lead</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="QA Engineer">QA Engineer</option>
                  <option value="Intern">Intern</option>
                  <option value="Support Engineer">Support Engineer</option>
                  <option value="Project Manager">Project Manager</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Profile Pic URL</label>
                <input type="text" name="profile" value={editdata.profile} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              </div>

              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Empdatashow
