import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import DataTable from "./components/Table/Data-Table";

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    API.getEmployees().then((res) => {
      console.log(res);
      setEmployees(res.data.results);
    });
  }, []);
  
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <DataTable employees={employees} />
        </div>
      </Router>
    </div>
  );
}

export default App;
