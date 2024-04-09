import './App.css'
import {GlobalConstant} from "./Common/global-constant.ts";

function App() {

  return (
    <>
      <div className="container">
          <h1>Welcome to ScanLib</h1>
          {GlobalConstant.isLogged ?
              <div className="">
                  <a className={"btn btn-primary"} href="/cart">voir mon panier</a>
              </div>
              :
              <>
                  <div className="">
                      <a className={"btn btn-primary"} href="/login">log require</a>
                  </div>
              </>
          }
      </div>
    </>
  )
}

export default App
