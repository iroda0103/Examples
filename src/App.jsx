import { useState } from 'react';
import Navbar from "./layout/Navbar";
import './App.css'
import MainPage from './pages/main';
import ThemeContext from './context/ThemeContext';
function App() {
  const [theme, setTheme] = useState('light');
  function changeTheme() {
    setTheme(theme == 'light' ? 'dark' : 'light')
  }
  return (
    <div className="App">
      <Navbar functions={[theme, changeTheme]}></Navbar>
      <ThemeContext.Provider value={theme}>
        <MainPage />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
