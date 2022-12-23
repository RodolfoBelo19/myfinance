import React from 'react';

import { BottomNavigation } from "./components/BottomNavigation"
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="flex sm:hidden">
        <BottomNavigation />
      </div>
    </>
  )
}

export default App
