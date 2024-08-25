import { useState, useRef } from 'react';
import uploadIcon from "../upload-icon.png"


export const FileUploaderComponent =()=>{
    const [fileName, setFileName] = useState(null)
    const [fileSize, setFileSize] = useState(null)
    const [file, setFile] = useState(null)
    const inputRef = useRef(null)

    
  
    const toggleUploaderComponent = ()=>{
        if (!file){
            inputRef.current.click()
        }
    }
  
    const fileChange =(event)=>{
      var file = event.target.files[0]
      console.log(file)
      setFileName(file.name);
      setFileSize(file.size)
      setFile(file);
    }

    const UploadFile = ()=>{
        return (
        <>
            <img src={uploadIcon} />
            <span>انتخاب فایل جهت آپلود</span>
            <p>
                حداکثر حجم فایل 150 مگابایت میباشد هر فایل به مدت 7 روز و برای اشتراک ویژه به مدت 1 سال باقی میماند   
            </p>
        </>
        )
    }

    const generateNumber = (number)=>{
        var floor = Math.floor(number/1000)

        if (floor >= 1000000){
            return floor/1000000+" گیگابایت"
        }else if (floor >= 1000){
            return floor/1000+" مگابایت"
        }else{
            return floor+" کیلوبایت"
        }
    }

    const startUploadingFile = ()=>{
        if (file){
            var form = new FormData();
            form.append(file)

            
        }
        
    }

    const selectNewFile = ()=>{
        if (file){
            setFile(null)
            setFileName(null)
            setFileSize(null)
            inputRef.current.value = ""
        }
    }

    const FileSelectedComponent = ()=>{
        return (
        <>
            <span>فایل انتخاب شد</span>
            <span style={{fontSize:"14px", marginTop:"15px", color:"gray"}}>{fileName}</span>
            <span style={{fontSize:"14px", color:"gray", direction: "rtl"}}>{generateNumber(fileSize)}</span>

            <div className='button-rows'>
                <button style={{fontSize:"14px", marginTop:"15px", fontFamily:"font"}} className='start-uploading-btn' onClick = {startUploadingFile}>
                    شروع آپلود
                </button>
                <button style={{fontSize:"14px", marginTop:"15px", fontFamily:"font"}} className='select-file-btn' onClick = {selectNewFile}>
                انتخاب فایل جدید
                </button>
            </div>
        </>
        )
    }
    
    return (
      <div className='file-uploader-component' onClick = {toggleUploaderComponent}>
        {fileName == null ? <UploadFile/> : <FileSelectedComponent/>}
        
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