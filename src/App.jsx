import Creador from './components/Creador';
import Lista from './components/Lista';
import Elemento from './components/Elemento';
import './App.css'

function App() {
  return (
    <section className='p-10 max-w-6xl mx-auto'>
      <Creador/>
      <Lista>
        {/* pensar en forma de añadir varios elementos */}
        <Elemento />
      </Lista>
    </section>
  )
}

export default App
