import './App.css'
import { WheelView } from './features/wheel/WheelView'
import { BumperView } from './features/bumper/BumperView'
import { CustomerView } from './features/customer/CustomerView'
import { HoodView } from './features/hood/HoodView'
import { HeadlightView } from './features/headlight/HeadlightView'
import { MirrorView } from './features/mirror/MirrorView'
import { KeychainView } from './features/keychain/KeychainView'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="first-container">
          <WheelView />
          <BumperView />
        </div>
        <div className="second-container">
          <HoodView />
          <HeadlightView />
        </div>
        <div className="third-container">
          <MirrorView />
          <KeychainView />
        </div>
      </div>
      <CustomerView />
    </div >
  )
}

export default App
