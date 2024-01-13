import { Routes, Route } from "react-router-dom"
import { Home, Educators, About, Error } from "./routes"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Educators" element={<Educators />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
