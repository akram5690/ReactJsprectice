import React, { useEffect, useState } from 'react';
import Updatedata from './Updatedata';
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Employee = () => {
  const [empdata, setempdata] = useState([]);
  const [editId, setEditId] = useState(null);
  const [dataupdate, setdataupdate] = useState({
    id: '',
    fullname: '',
    salary: '',
    designation: '',
    joindate: ''
  });

  useEffect(() => {
    const qry = query(collection(db, "Empdata"));
    const unsubscribe = onSnapshot(qry, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setempdata(data);
    });

    return () => unsubscribe();
  }, []);

  const deletdata = async (id) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      await deleteDoc(doc(db, "Empdata", id));
      alert("Employee deleted");
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setdataupdate({
      id: item.id,
      fullname: item.fullname,
      salary: item.salary,
      designation: item.designation,
      joindate: item.joindate
    });
  };

  const handleChange = (e) => {
    setdataupdate({ ...dataupdate, [e.target.name]: e.target.value });
  };

  const saveData = async (id) => {
    const docRef = doc(db, "Empdata", id);
    await updateDoc(docRef, {
      fullname: dataupdate.fullname,
      salary: dataupdate.salary,
      designation: dataupdate.designation,
      joindate: dataupdate.joindate
    });
    setEditId(null);
    setdataupdate({});
  };

  return (
    <>
      {/* <Updatedata /> */}
      <div className="container mt-5">
        <table className='table table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Designation</th>
              <th>Joining Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              empdata.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {editId === item.id ? (
                      <input type="text" name="fullname" value={dataupdate.fullname} onChange={handleChange} />
                    ) : (
                      item.fullname
                    )}
                  </td>
                  <td>
                    {editId === item.id ? (
                      <input type="text" name="salary" value={dataupdate.salary} onChange={handleChange} />
                    ) : (
                      item.salary
                    )}
                  </td>
                  <td>
                    {editId === item.id ? (
                      <select name="designation" value={dataupdate.designation} onChange={handleChange}>
                        <option value="HR">HR</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="QA Engineer">QA Engineer</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="Business Analyst">Business Analyst</option>
                        <option value="Software Tester">Software Tester</option>
                        <option value="Network Engineer">Network Engineer</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Technical Support">Technical Support</option>
                      </select>
                    ) : (
                      item.designation
                    )}
                  </td>
                  <td>
                    {editId === item.id ? (
                      <input type="date" name="joindate" value={dataupdate.joindate} onChange={handleChange} />
                    ) : (
                      item.joindate
                    )}
                  </td>
                  <td className='text-center'>
                    {
                      editId === item.id ? (
                        <button className='btn btn-success mx-1' onClick={() => saveData(item.id)}>✔</button>
                      ) : (
                        <>
                          <button className='btn btn-info mx-1' onClick={() => handleEdit(item)}>🖊</button>
                          <button className='btn btn-danger mx-1' onClick={() => deletdata(item.id)}>✖</button>
                        </>
                      )
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employee;
