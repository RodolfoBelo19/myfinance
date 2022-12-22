import React from 'react';

import { BottomNavigation } from "./components/BottomNavigation"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="block sm:hidden">
        <BottomNavigation />
      </div>
    </>
  )
}

export default App
