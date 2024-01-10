import { useState, useEffect } from 'react';
import Creador from './components/Creador';
import Lista from './components/Lista';
import Elemento from './components/Elemento';

function App() {
  const storedData = JSON.parse(localStorage.getItem('listaDatos')) || [];
  const [listaDatos, setListaDatos] = useState(storedData);

  useEffect(() => {
    localStorage.setItem('listaDatos', JSON.stringify(listaDatos));
  }, [listaDatos]);
  
  function handleAdd(tarea) {
    setListaDatos((prevList) => {
      const newList = [...prevList, tarea];
      return newList;
    });
  }

  function handleDelete(toRemove) {
    setListaDatos((prevList) => {
      const newList = [...prevList];
      newList.splice(toRemove, 1);
      return newList;
    });
  }

  return (
    <section className='p-10 max-w-6xl mx-auto'>
      <Creador onCreate={handleAdd} />
      <Lista>
        {listaDatos.map((tarea, index) => (
          <Elemento data={tarea} key={index} onDelete={() => handleDelete(index)}/>
        ))}
      </Lista>
    </section>
  )
}

export default App
