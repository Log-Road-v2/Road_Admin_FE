import {Route, Routes, BrowserRouter} from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyles"


export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}