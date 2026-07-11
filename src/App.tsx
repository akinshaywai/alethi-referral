import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { MainLayout } from "@/layouts/MainLayout"
import { SignInPage } from "@/pages/SignInPage"
import { SignUpPage } from "@/pages/SignUpPage"
import { ApplyPage } from "@/pages/ApplyPage"
import { DashboardPage } from "@/pages/DashboardPage"
import "@/styles/index.css"

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - No Layout */}
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* App Routes - With Layout */}
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

        {/* Default redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App
