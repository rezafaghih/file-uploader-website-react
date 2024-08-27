import './App.css';
import {FileUploaderComponent} from "./components/FileUploader"
import { useState, useRef } from 'react';
import uploadIcon from "./upload-icon.webp"
import secureIcon from "./files/secure.png"
import rocketIcon from "./files/rocket.png"

var global_website_name = "سایت آپلود";

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
    <HeaderComponent websiteName = {global_website_name}/>
    <main>
    <div className='row justify-center align-center gap-20 mtb-20'>
      <div className='box-item'>
        <img src = {secureIcon} alt = "آپلود فایل"/>
        <span>فضای نگهداری امن</span>
      </div>
      <div className='box-item'>
      <img src = {rocketIcon} alt = "آپلود فایل"/>
      <span>سرعت آپلود و دانلود بالا</span>
      </div>
      <div className='box-item'>
      <img src = {secureIcon} alt = "آپلود فایل"/>
      <span>بدون محدودیت تعداد آپلود</span>
      </div>
    </div>

    <div className='about-website-section'>
      <div className='section-side'>
        <h2>کاربرد وبسایت {global_website_name} چیست؟</h2>
        <p>
          در وبسایت {global_website_name} شما این امکان را دارید تا فایل های خود را در یک فضای امن و پرسرعت آپلود بکنید و لینک دانلود منحصر به فایل خود را دریافت کنید تا هر زمان که نیاز داشتید از آنها برای دانلود فایل مورد نظر استفاده کنید
        </p>
      </div>
      <div className='section-side'>
          <img src = {uploadIcon} alt = "آپلود فایل"/>
      </div>
    </div>

    <div className='about-website-section'>
      
      <div className='section-side'>
          <img src = {uploadIcon} alt = "آپلود فایل"/>
      </div>
      <div className='section-side'>
        <h2>کاربرد وبسایت {global_website_name} چیست؟</h2>
        <p>
          در وبسایت {global_website_name} شما این امکان را دارید تا فایل های خود را در یک فضای امن و پرسرعت آپلود بکنید و لینک دانلود منحصر به فایل خود را دریافت کنید تا هر زمان که نیاز داشتید از آنها برای دانلود فایل مورد نظر استفاده کنید
        </p>
      </div>
    </div>


    </main>

   </div>
  );
}




export default App;
