import React from 'react';
import Header from './components/header'
import TodoPanel from './components/todo_panel';

function App() {


  return (
    <div>

      {/* header section */}
      <Header />

      {/* todo section */}
      <TodoPanel />

      {/* footer section */}
      <p className='text-center text-gray-400'> Copyright © 2021 </p>
    </div>
  );
}

export default App;
