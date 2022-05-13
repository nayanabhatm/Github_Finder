import Navbar from './components/layout/Navbar/Navbar.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import User from './pages/User/User.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import './App.scss';
import { GithubProvider } from './context/Github/GithubContext.jsx';
import { AlertContextProvider } from './context/Alert/AlertContext.jsx';

function App() {
  return (
    <GithubProvider>
      <AlertContextProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubProvider>
  );
}

export default App;
