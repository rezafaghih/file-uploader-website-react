import { useParams } from "react-router-dom"
import { useState , useEffect} from "react";
import axios from "axios";
export const LinkComponent = ()=>{
    let {data} = useParams();

    const [linkName, setLinkName] = useState(null);
    const [linkDate, setLinkDate] = useState(null);
    const [url, setURL] = useState(null);

    useEffect(()=>{
        var form = new FormData();
        form.append("link", data);
    
        axios.post("http://localhost/uploader-api/api/getLink/", form).then((res)=>{
            setLinkName(res.data.address)
            setLinkDate(res.data.date)
            setURL(res.data.url)
        })
    }, [])

    const handleDownload = ()=>{
        window.open(url, "_BLANK")
    }
    
    return (
        <>
            <div className = "download-container">
                <h1>
                    دانلود فایل
                </h1>
                <span>نام فایل : {linkName}</span>
                <span>تاریخ آپلود : {linkDate} </span>
                <button className="download-file-btn" onClick={handleDownload}> دانلود فایل</button>
            </div>
        </>
    )
}