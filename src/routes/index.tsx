import { FC, lazy, Suspense } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import LoadingScreen from '../components/LoadingScreen'

// eslint-disable-next-line react/function-component-definition
const Loadable = (Component: FC) => (props: object) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()
  const isDashboard = pathname.includes('/dashboard')

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }),
          }}
        />
      }>
      <Component {...props} />
    </Suspense>
  )
}

// Layouts

// const DashboardLayout = Loadable(
//   lazy(() => import('../components/layout/DashboardLayout'))
// );

const MainLayout = Loadable(lazy(() => import('../layouts/MainLayout')))
const NotFound = Loadable(lazy(() => import('../pages/NotFound')))
export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/app/dashboard" replace /> },
        // {
        //   path: 'login',
        //   element: <Login />,
        // },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ])
}
