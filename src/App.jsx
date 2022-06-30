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
  // console.log(isAuthenticated);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Login Route */}
          <Route element={<LoginLayout />}>
            <Route path="/connectwallet" element={<ConnectWallet />} />

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

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoutes isAuthenticated={isAuthenticated}>
                    <Dashboard />
                  </ProtectedRoutes>
                }
              />

              {/* pages  */}
              <Route
                path="/exchange"
                element={
                  <ProtectedRoutes isAuthenticated={isAuthenticated}>
                    <Exchange />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/market"
                element={
                  <ProtectedRoutes isAuthenticated={isAuthenticated}>
                    <Market />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/transfer"
                element={
                  <ProtectedRoutes isAuthenticated={isAuthenticated}>
                    <Transfer />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/farm"
                element={
                  <ProtectedRoutes isAuthenticated={isAuthenticated}>
                    <Farm />
                  </ProtectedRoutes>
                }
              />
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
