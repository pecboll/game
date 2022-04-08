import './styles/App.css';
import  {Borde}  from './components/Borde';
import { GAME_SIZE } from './settings/constants';
import { Debuger } from './components/debugger/Debugger';
import Canvasprovider from './contexts/canvas';
import ChestProvider from './contexts/chest';

function App() {
  return (
    <div className="App">  
      <div
      style={{
        position: 'relative',
        width: GAME_SIZE,
        height: GAME_SIZE
      }}
      > <Canvasprovider>
       <ChestProvider>
       <Debuger />
        <Borde />
       </ChestProvider>
      </Canvasprovider>
       
      </div>
    
    </div>
  );
}

export default App;
