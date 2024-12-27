import "./App.css";
import SideNav from "./components/sideNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Analytics from "./pages/analytics";
import AddExpense from "./pages/addExpense";
import ViewExpense from "./pages/viewExpense";
import Settings from "./pages/settings";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addExpense" element={<AddExpense />} />
            <Route path="/viewExpense" element={<ViewExpense />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </SideNav>
      </BrowserRouter>
    </div>
  );
}

export default App;
