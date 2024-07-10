/* eslint-disable @typescript-eslint/no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//#if 德玛
console.log('德玛 mode')
//#endif
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {/* #if 德玛 */}
          <img src={reactLogo} className="logo react" alt="React logo" />
          {/* #endif */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
