import { Route, Routes } from 'react-router-dom';
import './App.css';
import JokesPage from './pages/Jokes';
import Pages from './layout/Pages';
import WeatherPage from './pages/Weather';
import WelcomePage from './pages/Welcome';

export default function App() {
  return (
    <Routes>
      <Route element={<Pages />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/jokes" element={<JokesPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Route>
    </Routes>
  );
}
