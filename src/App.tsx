import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Features from './pages/Features';
import Team from './pages/Team';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';

const basename = import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Features />} />
          <Route path="team" element={<Team />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}