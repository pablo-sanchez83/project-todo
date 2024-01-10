import { useState } from 'react';
import Creador from './components/Creador';
import Lista from './components/Lista';
import Elemento from './components/Elemento';

function App() {
  const [listaDatos, setListaDatos] = useState([]);

  function handleAdd(tarea) {
    setListaDatos((prevList) => {
      const newList = [...prevList, tarea];
      return newList;
    });
  }
  return (
    <section className='p-10 max-w-6xl mx-auto'>
      <Creador onCreate={handleAdd} />
      <Lista>
        {listaDatos.map((tarea, index) => (
          <Elemento data={tarea} key={index} />
        ))}
      </Lista>
    </section>
  )
}

export default App
