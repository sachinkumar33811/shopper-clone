import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from '../public/Component/Navigation'
import Herosection from '../public/Component/Herosection'
import Center from '../public/Component/Center'
import Airpod from '../public/Component/Airpod'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navigation />
    <Herosection />
    <Center />
    <Airpod />
    </div>
  );
};

export default App;
