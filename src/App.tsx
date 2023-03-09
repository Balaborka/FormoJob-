import React from 'react';
import {Panel} from './components/panel'

function App() {
  return (
    <body className="h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto max-w-6xl pt-5">
        <Panel />
      </div>
    </body>
  );
}

export default App;
