import './App.css';
import { useState, useRef } from 'react';
import uploadIcon from "./upload-icon.png"


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

function FileUploaderComponent(){

  
  const [fileName, setFileName] = useState("آپلود فایل")
  const inputRef = useRef(null)

  const toggleUploaderComponent = ()=>{
    inputRef.current.click()
  }

  const fileChange =(event)=>{
    var file = event.target.files[0]
    setFileName(file.name);
  }
  
  return (
    <div className='file-uploader-component' onClick = {toggleUploaderComponent}>
      <img src = {uploadIcon}/>
      
      <span>{fileName}</span>
      <p>
        حداکثر حجم فایل 150 مگابایت میباشد هر فایل به مدت 7 روز و برای اشتراک ویژه به مدت 1 سال باقی میماند
      </p>
      <input
        type = "file"
        hidden
        onChange={fileChange}
        style={{display:"none"}}
        ref = {inputRef}
      />
    </div>
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
