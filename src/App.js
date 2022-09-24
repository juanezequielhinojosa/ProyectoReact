import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import PaletteDisplay from './routes/Palette/PaletteDisplay';
import { useEffect, useState } from 'react';
import { getColorPalettes } from './service';
import { ColorPalettesContext} from './context/ColorPalettesContext'

function App() {
  const [colorPalettes, setColorPalettes] = useState([]);
  useEffect(()=> {
    getColorPalettes()
    .then((data) => {
      setColorPalettes(data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
      <div className='App'>
        <ColorPalettesContext.Provider value={{colorPalettes, setColorPalettes}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/palette/:id' element={<PaletteDisplay/>}/>
          </Routes>
        </ColorPalettesContext.Provider>
      </div>
  );
}

export default App;
