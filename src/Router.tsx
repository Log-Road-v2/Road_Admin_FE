import { Route, Routes, BrowserRouter } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyles"
import Layout from "./components/Layout"
import StudentManager from "./pages/StudentManager"
import ContestManager from "./pages/ContestManager"

export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/student" element={<StudentManager />} />
          <Route path="/contest" element={<ContestManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}