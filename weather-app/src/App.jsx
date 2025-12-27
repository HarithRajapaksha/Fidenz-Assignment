import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './assets/Login.jsx';
import Weather from './assets/weather.jsx';
import Layout from "./Components/Layout.jsx";


function App() {

  return (
  <Router> 
    <Layout>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Layout>
  </Router>
  )
}

export default App
