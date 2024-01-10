import Creador from './components/Creador';
import Lista from './components/Lista';
import Elemento from './components/Elemento';

function App() {
  return (
    <section className='p-10 max-w-6xl mx-auto'>
      <Creador/>
      <Lista>
        {/* pensar en forma de añadir varios elementos */}
        <Elemento data={'test text'} />
        <Elemento data={'test text'} />
        <Elemento data={'test text'} />
        <Elemento data={'test text'} />
      </Lista>
    </section>
  )
}

export default App
