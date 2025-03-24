import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@cloudscape-design/components';
import Sidebar from './components/Sidebar';
import TopNavigationBar from './components/Topbar';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import ClinicalNotes from './pages/ClinicalNotes';
import Reports from './pages/Reports';
import KnowledgeBase from './pages/KnowledgeBase';
import Video from './pages/Video';
import Settings from './pages/Settings';
// import "./App.module.css"

const App: React.FC = () => {
  return (
    
    <Router>
      <TopNavigationBar />
      <AppLayout
        navigation={<Sidebar />}
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/clinical_notes" element={<ClinicalNotes />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/knowledge" element={<KnowledgeBase />} />
            <Route path="/video" element={<Video />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        }
        toolsHide={true}
      />
    </Router>
  );
};

export default App;