import { Route, Routes, BrowserRouter } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyles"
import Layout from "./components/Layout"
import StudentManager from "./pages/StudentManager"


export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/student" element={<StudentManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}