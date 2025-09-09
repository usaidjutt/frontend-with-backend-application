import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

import { useState, useEffect } from "react";

function App() {
  const [jamiadtata, setjamiadata] = useState([]);

  useEffect(() => {
     axios.get("/api/jamiadata").
     then(response =>{
        setjamiadata(response.data)
        .catch(error => {
          console.log("Error fetching Data",error);
          
        })
     })
    
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
  <h1 style={{ 
    color: "#2c3e50", 
    marginBottom: "40px", 
    fontSize: "32px", 
    fontWeight: "bold" 
  }}>
    JAMIA UL ULOOM UL ISLAMIA
  </h1>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto"
  }}>
    {jamiadtata.map(person => (
      <div key={person.id} style={{
        border: "1px solid #ddd",
        borderRadius: "16px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
        transition: "transform 0.3s, box-shadow 0.3s"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.1)";
      }}
      >
        <img
          src={person.image || "https://via.placeholder.com/150"}
          alt={person.name}
          style={{
            borderRadius: "50%",
            marginBottom: "15px",
            width: "120px",
            height: "120px",
            objectFit: "cover",
            border: "3px solid #2c3e50"
          }}
        />
        <h2 style={{ color: "#2c3e50", fontSize: "18px", margin: "10px 0" }}>
          {person.name}
        </h2>
        <p style={{ color: "#7f8c8d", fontSize: "14px" }}>
          {person.designation}
        </p>
      </div>
    ))}
  </div>
</div>

  );
}

export default App;

