import React, { useState } from 'react'
import Navbar from '../Navbar'

const Empdata = () => {
  let [empdata, setEmpdata] = useState({
    id: "",
    name: "",
    email: "",
    salary: "",
    doj: "",
    profile: "",
    designation: "",
  })

  let hendelchange = (e) => {
    setEmpdata({ ...empdata, [e.target.name]: e.target.value });
  }


  let hendelsubmite = (e) => {
    e.preventDefault();


    // let empgetdata;
    // try {
    //     const storedData = JSON.parse(localStorage.getItem("employee"));
    //     empgetdata = Array.isArray(storedData) ? storedData : [];
    // } catch (e) {
    //     empgetdata = [];
    // }

    let empgetdata = JSON.parse(localStorage.getItem("employee")) || []

    let newempdata = [...empgetdata, empdata]
    localStorage.setItem("employee", JSON.stringify(newempdata));
    alert("add employee data")
    setEmpdata({
      id: "",
      name: "",
      email: "",
      salary: "",
      doj: "",
      profile: "",
      designation: "",
    })
  }
  return (
    <>
      <Navbar />
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-20">

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST" onSubmit={hendelsubmite}>
            <div>
              <label for="name" class="block text-sm/6 font-medium text-gray-900">ID</label>
              <div class="mt-2">
                <input onChange={hendelchange} value={empdata.id} type="number" name="id" id="id" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <label for="name" class="block text-sm/6 font-medium text-gray-900">Full Name</label>
              <div class="mt-2">
                <input onChange={hendelchange} value={empdata.name} type="text" name="name" id="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
              <div class="mt-2">
                <input onChange={hendelchange} value={empdata.email} type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <label for="salary" class="block text-sm/6 font-medium text-gray-900">Salary</label>

              <div class="mt-2">
                <input onChange={hendelchange} value={empdata.salary} type="number" name="salary" id="salary" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <label for="doj" class="block text-sm/6 font-medium text-gray-900">Date of joining</label>

              <div class="mt-2">
                <input onChange={hendelchange} value={empdata.doj} type="date" name="doj" id="doj" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <label htmlFor="designation" className="block text-sm/6 font-medium text-gray-900">Designation</label>
              <div className="mt-2">
                <select name="designation" id="designation" value={empdata.designation} onChange={hendelchange} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option value="">Select Designation</option>
                  <option value="HR">HR</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>
            </div>

            <div>
              <label for="profile" class="block text-sm/6 font-medium text-gray-900">profile pic</label>

              <div class="mt-2">
                <input onChange={hendelchange} value={empdata.profile} type="text" name="profile" id="profile" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add data</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Empdata
