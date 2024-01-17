
import { useBebidasGlobalState } from '../context/BebidasProvider';
import { Drink } from './Drink';

export const Drinks = () => {


    const {bebidas, setBebidas} = useBebidasGlobalState();
    
    
  return (
    <div>
        <h1 className='text-center font-bold text-red-500 text-3xl uppercase mt-5'>Drinks Founded:</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-auto mt-4'>
            {
                bebidas.map( (bebida,index) => 
                    <Drink key={index} bebida={bebida} />
                )
            }
        </div>
    </div>
  )
}
