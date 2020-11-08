
import React,{useState,useEffect} from "react";

export default function FunctionComponent(props) {
    const [date,setDate] = useState(new Date()) // 使用useState存储状态值，括号内为初始值

    // 相当于componentDidMount、componentDidUpdate、componentWillUnmount的集合
    useEffect(()=>{
        console.log('useEffect')
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        // 此处执行 componentWillUnmount
        return ()=>clearInterval(timer)
    },[]) // []依赖项，加入后 useEffect 只赋值一次，不加就会一直执行赋值
    return (
        <div>
            <h3>Function组件</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}