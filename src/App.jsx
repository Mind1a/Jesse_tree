import { Routes, Route, useLocation } from "react-router-dom"
import { Home, Story, Educators, About, Error } from "./routes"
import { Layout } from "./components/Layout"
import { useEffect } from "react"
import "./scss/style.scss"

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:stories/:story" element={<Story />} />
          <Route path="Educators" element={<Educators />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
