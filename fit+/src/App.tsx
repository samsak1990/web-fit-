import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Main from './components/Main';

// Временные заглушки для отсутствующих страниц
const Analitic = () => <div>Analitic Page (заглушка)</div>;
const Payments = () => <div>Payments Page (заглушка)</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Main />}>
          <Route path="analitic" element={<Analitic />} />
          <Route path="payments" element={<Payments />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
