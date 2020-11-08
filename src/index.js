import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg'
import a from './a.module.css'

/**
 * JSX 语法的使用：
 *  基本用法 表达式用{}括起来-eg:<div>Hello React-{name}</div>
 *  1.函数形式 {}在识别内容时无法识别对象，我们可以通过函数的方式将对象的值处理成我们想要的形式    <div>{formatName(person1)}</div>
 *  2.JSX对象 const jsxObj = <div> 这是一段JSX语法 </div>   使用时{jsxObj}
 *  3.条件语句 const ifcondition = true; 使用{ifcondition?'结果为真':'结果为假'}或{ifcondition&&'我是真的'}
 *  4.数组 const arr = ['1','2','3'] {arr.map((item,index)=>{return <li key={index}>{item}</li>})}
 *  5.属性 <img src={logo} className="logo" style={{width:'50px',height:"50px"}}/>
 *    模块化属性 import a from './a.module.css'  <div className={a.container}></div> <img src={logo} className={a.logo}/>
 * */ 

const name = "Beauty"
const person1 = {
  firstName:"TT",
  lastName:"Feng"
}
function formatName(obj){
  return obj.firstName+' '+obj.lastName
}
const jsxObj = <div> 这是一段JSX语法 </div>
const ifcondition = true;
const arr = ['1','2','3']
const jsx = (
  <div className={a.container}>
    <div>Hello React-{name}</div>
    <div>
      {formatName(person1)}
    </div>
    {jsxObj}
    <div>
      {ifcondition?'结果为真':'结果为假'}
    </div>
    <div>
      {ifcondition&&'我是真的'}
    </div>
    <ul>
      {/* diff时，会先比较type，然后是key，所以同级同类别元素，key值必须唯一 */}
      {arr.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}
    </ul>
    {/* style中的{{}}不是mustache语法，而这里外层{}表示JSX语法，内层{}表示内容为一个对象 */}
    <img alt="图片加载失败" src={logo} className="logo" style={{width:'50px',height:"50px"}}/>
    <img alt="图片加载失败" src={logo} className={a.logo}/>
  </div>
)

ReactDOM.render(jsx,document.getElementById("root"))