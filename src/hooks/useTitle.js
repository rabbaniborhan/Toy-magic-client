import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title=`${title}-toy magic`
    },[title])
}




export default useTitle;