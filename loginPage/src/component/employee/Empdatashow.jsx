import React, { useEffect, useState } from 'react';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Empdatashow = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('employee')) || [];
    setEmployees(storedData);
  }, []);

  return (
    <>
      <div className="overflow-x-auto mt-10 px-6">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Salary</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Date of Joining</th>
              <th className="px-4 py-2 text-left text-sm font-medium">Profile Pic</th>
              <th className="px-4 py-2 text-left text-sm font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((emp, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 text-sm">{emp.id}</td>
                  <td className="px-4 py-2 text-sm">{emp.name}</td>
                  <td className="px-4 py-2 text-sm">{emp.email}</td>
                  <td className="px-4 py-2 text-sm">₹{emp.salary}</td>
                  <td className="px-4 py-2 text-sm">{emp.doj}</td>
                  <td className="px-4 py-2 text-sm">
                    <img
                      src={emp.profile}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 text-sm"><button className='m-2'><FontAwesomeIcon icon={faPenToSquare}/></button> <button className='m-2'><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Empdatashow;
