import React from 'react';

import { EventBoard } from "./components/EventBoard";
import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <EventBoard />
    </GlobalProvider>
  )
}

export default App
