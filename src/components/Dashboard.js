import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handelLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Faild to lougout");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-2 text-primary">Profille</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong className="text-primary">Email: {currentUser.email}</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <Button className="w-100 text-center mt-2 text-success bg-danger text-white border-danger" onClick={handelLogout}>
        Logout
      </Button>
    </>
  );
}
