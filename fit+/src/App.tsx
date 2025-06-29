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
        <Route path="/" element={<Auth />} />
        <Route path="/" element={<Main />}>
          <Route index path="analitic" element={<Analitic />} />
          {/* <Route path="payments" element={<Payments />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
