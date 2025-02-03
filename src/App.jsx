import { Suspense, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes'
import AuthLayout from './components/Layouts/AuthLayout'
import NonAuthLayout from './components/Layouts/NonAuthLayout'

function App() {
 
 const isLoggedIn = true;
  return (
    <>
    <Routes>
    {PublicRoutes.map(({ path, exact, component: Component }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          element={
            <Suspense fallback="loading">
              <NonAuthLayout>
                <Component />
              </NonAuthLayout>
            </Suspense>
          }
        />
      ))}
      <Route path="/" exact element={<AuthLayout />}>
        {PrivateRoutes?.map(({ path, exact, component: Component, access }) => {
          return isLoggedIn ? (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Component />}
            />
          ) : (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Navigate to="/login" />}
            />
          );
        })}
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
    
    </>
  )
}

export default App
