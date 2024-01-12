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
      const newList = [...prevList, tarea.toUpperCase()];
      return newList;
    });
  }

  function handleDelete(index) {
    setListaDatos((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  }

  function handleEdit(index, newValue) {
    setListaDatos((prevList) => {
      const newList = [...prevList];
      newList[index] = newValue;
      return newList;
    });
  }

  return (
    <section className='p-10 max-w-6xl mx-auto'>
      <Creador onCreate={handleAdd} />
      <Lista>
        {listaDatos.map((tarea, index) => (
          <Elemento
            data={tarea}
            index={index}
            key={index}
            onDelete={() => handleDelete(index)}
            onEdit={(index, value) => handleEdit(index, value)}
          />
        ))}
      </Lista>
    </section>
  );
}

export default App;
