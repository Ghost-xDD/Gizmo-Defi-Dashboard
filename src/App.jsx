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

const styles = {
  settingsContainer: 'flex relative dark:bg-main-dark-bg',
  settingsWrapper: 'fixed right-4 bottom-4 z-[1000]',
  button: 'text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray',
};

function App() {
  const { isAuthenticated, user } = useMoralis();
  

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
