import { useState, useRef, useEffect} from 'react';
import uploadIcon from "../upload-icon.webp"
import axios from 'axios';

export const FileUploaderComponent =()=>{
    const [fileName, setFileName] = useState(null);
    const [fileSize, setFileSize] = useState(null);
    const [file, setFile] = useState(null);
    const inputRef = useRef(null) 
    const [callResponse, setCallResponse] = useState(null);
    const [responseStatus, setResponseStatus] = useState(null);
    const [url, setFileURL] = useState(null);

    const [filePassword, setFilePassword] = useState("")
    const [fileDays, setFileDays] = useState(3)
  
    const toggleUploaderComponent = (event)=>{
        if (event.target.tagName == "INPUT" || event.target.tagName == "LABEL"  || event.target.tagName == "SELECT"){
            return;
        }
        if (!file){
            inputRef.current.click()
        }
    }
  
    const fileChange =(event)=>{
      var file = event.target.files[0]
      var password = document.querySelector("#password-input");
      var days = document.querySelector("#days-input");

      setFileDays(days.value);
      setFilePassword(password.value);

      setFileName(file.name);
      setFileSize(file.size)
      setFile(file);
    }



    const UploadFile = ()=>{
        return (
        <>
            <img src={uploadIcon} />
            <span>انتخاب فایل</span>
            <p>
                با کلیک بر روی این باکس فایل خود را جهت آپلود انتخاب کنید (حداکثر حجم 150 مگابایت)
            </p>

            <div className='row'>
            <div className = "input-container">
                <label>
                    رمز فایل <sub>اختیاری</sub>
                </label>
                <input type = "password" id = "password-input" className='form-input'/>
            </div>
            
            <div className = "input-container">
                <label>
                   فایل بعد از چند روز حذف شود
                </label>
                <select className='form-input' id = "days-input">
                    <option hidden selected value = "-1">انتخاب زمان حذف فایل</option>
                    <option value = "1">1 روز</option>
                    <option value = "2">3 روز</option>
                    <option value = "3">7 روز</option>
                    <option value = "4">15 روز</option>
                    <option value = "5">30 روز</option>
                </select>
            </div>
        </div>
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
            form.append("file", file);
            form.append("password", filePassword);
            form.append("days", fileDays);
            
            // file 
            // password
            // days -> 1, 3, 7, 15, 30
            axios.post("http://localhost/uploader-api/api/uploadFile/", form).then((res)=>{
                var json = JSON.parse(res.data);
                if (json.response == "success"){
                    setResponseStatus("success");
                    setFileURL(`http://localhost:3000/link/${json.link}`);
                }
                setCallResponse(true);
            })
        }        
    }
    const selectNewFile = ()=>{
        if (file){
            setFile(null)
            setFileName(null)
            setFileSize(null)
            setResponseStatus(null);
            setFileURL(null)
            setFilePassword("")
            setFileDays(3)
            setCallResponse(null)
            inputRef.current.value = ""
            
        }
    }

    const StartUploading = ()=>{
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

    const UploadResponse =()=>{
        if (responseStatus == "success"){
            return (
                <>
                    <div className = "upload-response-container" style={{flexDirection:"column"}}>
                        <div className='row'>
                            <div className = "input-container">
                                <label>
                                    آدرس فایل
                                </label>
                                <input type = "url" className='form-input' id = "file-password" readOnly value = {url}/>
                            </div>
                        </div>
                        <div className='button-rows'>
                            <button style={{fontSize:"14px", marginTop:"15px", fontFamily:"font"}} className='select-file-btn' onClick = {selectNewFile}>
                            انتخاب فایل جدید
                            </button>
                        </div>
                    </div>
                </>
            )
        }
        
    }

    const FileSelectedComponent = ()=>{
        return (
        <>
            {callResponse == null ? <StartUploading/> : <UploadResponse/>}
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