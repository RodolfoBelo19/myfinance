import React from 'react';

import { BottomNavigation } from "./components/BottomNavigation"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <BottomNavigation />
      </div>
    </>
  )
}

export default App
