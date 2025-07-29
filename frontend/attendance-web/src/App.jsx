import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EmployeeListPage from "./pages/EmployeeListPage.jsx";
import {Route, Routes} from "react-router-dom";
import AttendanceListPage from "./pages/AttendanceListPage.jsx";
import AttendanceDashboard from "./dashboards/AttendanceDashboard.jsx";
import EmployeeDashboard from "./dashboards/EmployeeDashboard.jsx";
import EmployeePage from "./pages/EmployeePage.jsx";
import HandleLogin from "./authentications/HandleLogin.jsx";
import LogoutPage from "./authentications/LogoutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import {AuthContext} from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
    // const [count, setCount] = useState(0)
    const {isAuth} = useContext(AuthContext);

  return (
    <>
      {/*<div>*/}
      {/*  <a href="https://vite.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}

        <Routes>
            {/*<Route path="/" element={<h1>Welcome Home</h1>} />*/}
            <Route path="/employees" element={<ProtectedRoute element={<EmployeeListPage/>} isAuthenticated={isAuth}/>} />
            <Route path="/employee" element={<ProtectedRoute element={<EmployeePage/>} isAuthenticated={isAuth}/>} />
            <Route path="/attendance" element={<ProtectedRoute element={<AttendanceListPage/>} isAuthenticated={isAuth}/>} />


            <Route path="/dashboard/attendance" element={<ProtectedRoute element={<AttendanceDashboard/>} isAuthenticated={isAuth}/>} />
            <Route path="/dashboard/employee" element={<ProtectedRoute element={<EmployeeDashboard/>} isAuthenticated={isAuth}/>} />

            <Route path="/authentication" element={<HandleLogin />} />
            <Route path="/loggedout" element={<LogoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  )
}

export default App
