import React from "react";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <div className="bg-light">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
                <PrivateRoute exact path="/" component={Dashboard} ></PrivateRoute>
                <PrivateRoute path="/update-profile" component={UpdateProfile} ></PrivateRoute>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
