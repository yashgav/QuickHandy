import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Landing_page from './Pages/Landing_page/Landing_page';
import Worker_main from './Pages/Worker/Worker_main/Worker_main';
import { UserProvider } from './UserContext';
import Customer_main from './Pages/Customer/Customer_main/Customer_main';
import SamplePage from './Pages/SamplePage';

function App() {


  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<SamplePage />} /> */}
            <Route path="/" element={<Landing_page />} />
            <Route path="/worker" element={<Worker_main />} />
            <Route path="/customer" element={<Customer_main />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
