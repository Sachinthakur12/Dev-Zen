import {useState,useEffect} from 'react'

const prefix='code_editor__'
export default function useLocalStorage(key,initialVal) {
    // getting the value in local storage
    const prefixKey=prefix+key
    const [value,setValue]=useState(()=>{
        const jsonValue = localStorage.getItem(prefixKey)
        if(jsonValue != null)
            return JSON.parse(jsonValue)
        if(typeof initialVal === 'function')
            return initialVal()
        else
            return initialVal
    })
    // saving the value in local storage
    useEffect(()=>{   
        localStorage.setItem(prefixKey, JSON.stringify(value))
    },[prefixKey,value])
   
    // returning the value
    return [value,setValue]
  
}
