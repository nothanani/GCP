import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [message , setMessage] = useState("")
                  
                  // replace this link with your backend url after deploying 
                  // your backend to cloud run 
                  // keep the localhost url for testing locally
  const API_URL = 'https://my-gcp-website-backend-802377120995.us-central1.run.app/' || 'http://localhost:3000'

 useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error fetching data:', error)
        setMessage("Backend Offline")
      });
  }, [API_URL]);

  return (
    <div className="container">
      <img height={"100px"} src="https://codelabs.developers.google.com/static/codelabs/cloud-starting-cloudrun-jobs/img/1965fab24c502bd5.png" alt="Google Cloud Run Logo" />
      <h1>GCP Cloud Run Deployment Workshop</h1>
      <div className="status-row">
        <h2>Hello! Default User is here!</h2>
        <p>Server Response: {message}</p>
      </div>
    </div>
  )
}

export default App