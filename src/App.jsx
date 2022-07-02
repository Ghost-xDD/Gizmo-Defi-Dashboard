import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Dashboard,
  Exchange,
  Pool,
  Market,
  Transfer,
  Farm,
  Vaults,
  Save,
} from './pages';
import ConnectWallet from './pages/ConnectWallet';
import FullLayout from './pages/FullLayout';
import LoginLayout from './pages/LoginLayout';
import ProtectedRoutes from './pages/ProtectedRoutes';
import { useMoralis } from 'react-moralis';

function App() {
  const { isAuthenticated } = useMoralis();

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Login Route */}
          <Route element={<LoginLayout />}>
            <Route
              path="/connectwallet"
              element={<ConnectWallet isAuthenticated={isAuthenticated} />}
            />

            <Route
              path="/"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated}>
                  <FullLayout />
                  {/* <Dashboard /> */}
                </ProtectedRoutes>
              }
            >
              {/* dashboard  */}
              {/* <Route path="/" element={<Dashboard />} /> */}

              <Route path="/dashboard" element={<Dashboard />} />

              {/* pages  */}
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/market" element={<Market />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/farm" element={<Farm />} />
              <Route path="/save" element={<Save />} />
              <Route path="/pool" element={<Pool />} />
              <Route path="/vaults" element={<Vaults />} />
            </Route>
          </Route>

          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
