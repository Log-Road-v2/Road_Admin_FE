import { Route, Routes, BrowserRouter } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyles"
import Layout from "./components/Layout"
import StudentManager from "./pages/StudentManager"
import ContestManager from "./pages/ContestManager"
import View from "./pages/contest/View"
import ContestEdit from "./pages/contest/Edit"
import Contest from "./pages/contest"

export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/student" element={<StudentManager />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/contestlist" element={<ContestManager />} />
          <Route path="/contestview" element={<View />} />
          <Route path="/contestEdit" element={<ContestEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}