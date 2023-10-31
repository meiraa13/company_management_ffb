import { About } from "./components/About"
import { CompanyList } from "./components/CompanyList"
import { Header } from "./components/Header"
import "./globalStyles.less"


function App() {
  

  return (
    <>
      <Header />
      <main className="container">
        <About />
        <CompanyList />
      </main>
    </>
      


  )
}

export default App
