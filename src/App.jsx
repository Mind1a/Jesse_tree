import { Routes, Route } from "react-router-dom"
import { Home, Educators, About, Error } from "./routes"
import "./scss/style.scss"
import { Layout } from "./components/Layout"
import { CardDetails } from "./components/CardDetails"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:stories/:story" element={<CardDetails />} />
          <Route path="Educators" element={<Educators />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
