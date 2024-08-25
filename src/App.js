import './App.css';
import {FileUploaderComponent} from "./components/FileUploader"
import { useState, useRef } from 'react';

function HeaderComponent(parms){
  return (
    <header className='header-container'>
      <h1>
        وبسایت آپلود فایل | {parms.websiteName}
      </h1>
      <p>
        میتوانید به سادگی فایل های خود را در  وبسایت {parms.websiteName} آپلود کنید و لینک دانلود آنها را در هرکجا که دوست دارید استفاده کنید
      </p>
      <FileUploaderComponent/>
    </header>
  )
}

function App() {  
  return (
   <div className="container">
    <HeaderComponent websiteName = "سایت آپلود"/>
   </div>
  );
}




export default App;
