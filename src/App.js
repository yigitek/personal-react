import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/" element={<Sidebar />} />
    </Routes>
    </>
  );
}

export default App
