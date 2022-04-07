import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import CreateTask from './Components/CreateTask/CreateTask';
import Header from './Components/HeaderComponent/Header';
import ViewScreen from './Components/ViewScreen/ViewScreen';

function App() {
       return (
        <>
       
        <Header/>
        <div className="App">
           <Routes>
            <Route path="/" element={<CreateTask />} />
            <Route path="/view" element={<ViewScreen />} />
          
          </Routes> 
         
          </div>
        
         
          </>
     
    
  );
}

export default App;
