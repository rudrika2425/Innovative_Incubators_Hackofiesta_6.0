import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./Context/LanguageContext";  
import Dashboard from "./home/Dashboard";
import Rent from "./rental/rent";
import RentProduct from "./rental/receiveRent";
import Description from "./rental/description";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import SoilTestReportUploader from "./information/Test";
import FarmerDashboard from "./information/FarmerDashboard";
import Chatbot from "./ChatBoat/Chatboat";
import FarmerInput from "./information/FarmerInput";
import SoilTest from "./information/SoilTest";



function App() {
  return (
    <LanguageProvider>  
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/receive" element={<RentProduct />} />
          <Route path="/description" element={<Description />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/test" element={<SoilTestReportUploader />} />
          <Route path="/farmer-Information" element={<FarmerDashboard />}>
            <Route path="basicInformation" element={<FarmerInput />} />
            <Route path="soilTesting" element={<SoilTest />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
