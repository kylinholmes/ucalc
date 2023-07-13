import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function SideBar() {

  const [sub_page, set_sub_page] = useState(["常规", "科学计算器", "程序员"]);
  const [active_index, set_active_index] = useState(0);
  return (
    <div className='flex flex-col gap-y-2 bg-slate-200 w-80'>
      {
        sub_page.map((item, idx)=> 
         <button className={active_index === idx? "selected_item": "item"} onClick={ () => set_active_index(idx) } key={idx} >
          {item} 
          </button>
        )
      }
    </div>
  )
}

function Calc () {

  return  (
    <div className='bg-neutral-400 h-full w-full flex flex-col gap-10'>
        <Display />
        <KeyBoard />
    </div>
  )
}

function Display() {
  return (
    <div className='h-20 w-full'>
      <input className='h-full w-full'></input>
    </div>
  )
}

function KeyBoard() {

  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4 text-2xl ">
        <Key symbol="A/C"  />
        <Key symbol="/"  />
        <Key symbol="*"  />
        <Key symbol="-"  />
        <Key symbol="7"  />
        <Key symbol="8"  />
        <Key symbol="9"  />
        <Key className="row-span-2" symbol="+"  />
        <Key symbol="4"  />
        <Key symbol="5"  />
        <Key symbol="6"  />
        <Key symbol="1"  />
        <Key symbol="2"  />
        <Key symbol="3"  />
        <Key className="row-span-2" symbol="="  />
        <Key symbol=""  />
        <Key symbol="0"  />
        {/* <div class="">.</div> */}
        <Key symbol='.'/>

    </div>
  )
}
function Key({symbol, className}) {
  return (
    <div className={ className + ' bg-slate-200 text-slate-900 text-center h-15' }>
     { symbol }
    </div>
  )
}

function App() {
  return (
    <div className='flex flex-row w-150 h-300'>
      {/* <SideBar className='z-3'/> */}
      <Calc className='z-2'/>
    </div>

  )
}

export default App
