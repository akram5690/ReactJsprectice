import React from 'react';
import { useSelector } from 'react-redux';

const Showempdata = () => {
  const showemp = useSelector((state) => state.crudapp);

  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="table-responsive shadow-sm">
          <table className="table table-bordered table-hover">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Designation</th>
                <th>Joining Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {showemp.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.salary}</td>
                  <td>{item.designation}</td>
                  <td>{item.joindate}</td>
                  <td>
                    {/* You can later add edit/delete buttons here */}
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
              {showemp.length === 0 && (
                <tr>
                  <td colSpan="6">No employees added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Showempdata;
