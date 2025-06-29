import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Main from './pages/Main';
import Analitic from './pages/Analitic/Analitic';
// import Payments from './pages/Payments/Payments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Main />}>
          <Route index element={<Navigate to="analitic" replace />} />
          <Route path="analitic" element={<Analitic />} />
          {/* <Route path="payments" element={<Payments />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
