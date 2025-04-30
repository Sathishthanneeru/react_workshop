import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Signed-In Users</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  logoutButton: {
    padding: "8px 16px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    fontSize: "14px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default HomePage;
