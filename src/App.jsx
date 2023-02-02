import { useEffect, useState } from "react";
import "./css/app.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import {v4 as uuidv4} from 'uuid';
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {

  const [technos, setTechnos] = useState([])
  const STORAGE_KEY = 'technos'
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, [])

  useEffect(() => {
    console.log('useEffect with []');
    setTechnos(storedTechnos)
  }, [])

  useEffect(()=>{
    console.log('useEffect with [technos]');
    setStoredTechnos(technos)
  }, [technos])

  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id))
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/add-techno" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/all-technos" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>
    </>
  );
}

export default App;
