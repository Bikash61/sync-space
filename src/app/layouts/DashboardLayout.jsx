import React from 'react'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
        <h1>This is for navbar</h1>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout