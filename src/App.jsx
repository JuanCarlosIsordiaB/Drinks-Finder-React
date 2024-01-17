
import { Form } from './components/Form';
import { Drinks } from './components/Drinks';
import { ModalBebida } from './components/ModalBebida';

const App = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-6xl py-7 text-white bg-red-500'>Drinks Finder</h1>
      <Form/>
      <Drinks />
      <ModalBebida />
    </div>
  )
}
export default App;