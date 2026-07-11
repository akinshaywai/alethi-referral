import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layouts/MainLayout"
import { HomePage } from "@/pages/HomePage"
import { ApplyPage } from "@/pages/ApplyPage"
import { DashboardPage } from "@/pages/DashboardPage"
import "@/styles/index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/apply"
          element={
            <MainLayout>
              <ApplyPage />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
