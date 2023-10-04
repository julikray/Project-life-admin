// import React from 'react';
// import Adminpanel from './component/Adminpanel/Adminpanel';
// // import Header from './component/header/Header';
// // import Home from './component/home-body/Home';
// // import Chapter1 from './component/chapter1/Chapter1';



// function App() {
//   return (
//     <div >
//       {/* <Header/> */}
//       <Adminpanel/>

      
      
     
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Adminpanel from './component/Adminpanel/Adminpanel';
import Home from './component/home-body/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Adminpanel/>} />
        
     
    </Routes>
    </BrowserRouter>

  );
}

export default App;