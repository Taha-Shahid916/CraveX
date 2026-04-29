import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus,setOnline]=useState(true);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnline(true)
            });

        window.addEventListener("offline",()=>{
            setOnline(false)
    });
},[]);
    return OnlineStatus;
}  


export default useOnlineStatus;