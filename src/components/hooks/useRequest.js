import {useState} from "react";

export const useRequest = (callback) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const sendRequestWithLoader = async () => {
        try{
            setLoading(true)
            await callback()
        }catch (e){
            setError(e.message)
        }finally {
            setLoading(false)
        }
    }

    return [loading, error, sendRequestWithLoader]
}