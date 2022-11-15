import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../Assets/css/GithubUsersData.css";

function GithubUsersData() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData([
      {
        id: 1,
        name: "Joe Williams",
        email: "joe.williams@yahoo.com",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
        },
        company: { name: "DTF Enterprizes" },
      },
      {
        id: 2,
        name: "Alex Adams",
        email: "alex.adams@yahoo.com",
        address: {
          street: "Elizebeth Tower",
          suite: "Apt. 333",
          city: "Gwenborough",
        },
        company: { name: "DTF Enterprizes" },
      },
      {
        id: 3,
        name: "Shawn SR",
        email: "shawn.sr@yahoo.com",
        address: {
          street: "Street 176",
          suite: "Apt. 221",
          city: "Gwenborough",
        },
        company: { name: "DTF Enterprizes" },
      },
    ]);
  }, []);

  const beFunc = () => {
    const getTableData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      return json;
    };
    const callingFunc = getTableData();
    callingFunc.then((data) => {
      setTableData(data);
    });
  };

  const removeData = () => {
    setTableData([
        {
          id: 1,
          name: "Joe Williams",
          email: "joe.williams@yahoo.com",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
          },
          company: { name: "DTF Enterprizes" },
        },
        {
          id: 2,
          name: "Alex Adams",
          email: "alex.adams@yahoo.com",
          address: {
            street: "Elizebeth Tower",
            suite: "Apt. 333",
            city: "Gwenborough",
          },
          company: { name: "DTF Enterprizes" },
        },
        {
          id: 3,
          name: "Shawn SR",
          email: "shawn.sr@yahoo.com",
          address: {
            street: "Street 176",
            suite: "Apt. 221",
            city: "Gwenborough",
          },
          company: { name: "DTF Enterprizes" },
        },
      ]);
  };

  const githubProfile = () => {
    if (tableData.length > 3) {
      window.open(
        "https://github.com/HamzaBadar1217",
        "Github",
        "width=800, height=800"
      );
    } else {
        alert('First Click on Display Data Button');
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100 d-flex justify-content-center align-items-center">
          <div className="col-12 py-5">
            <Table bordered className="text-center">
              <thead className="rounded-top">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Company Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {tableData.length > 0 &&
                    tableData.map((data, i) => (
                      <>
                        <tr>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>
                            {data.address.suite} {data.address.street},{" "}
                            {data.address.city}
                          </td>
                          <td>{data.company.name}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={githubProfile}
                            >
                              <FontAwesomeIcon icon={faEye} className="pe-2" />
                              View Profile
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                </>
              </tbody>
            </Table>
            <button
              type="button"
              className="btn btn-primary ms-3"
              onClick={beFunc}
            >
              Display Data
            </button>
            <button
              type="button"
              className="btn btn-danger ms-3"
              onClick={removeData}
            >
              Remove Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubUsersData;
