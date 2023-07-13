import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function SideBar({ show = false, set_sidebar }) {

  const [sub_page, set_sub_page] = useState(["常规", "科学计算器", "程序员"]);
  const [active_index, set_active_index] = useState(0);
  return (
    <div className='flex'>
      {
        show ? <>
          <div className='flex flex-auto flex-col gap-y-2 bg-sidebar '>
            {
              sub_page.map((item, idx) =>
                <button className={active_index === idx ? "selected_item" : "item"} onClick={() => set_active_index(idx)} key={idx} >
                  {item}
                </button>
              )
            }
          </div>
          <div className='flex-auto h-300 w-50' onClick={() => set_sidebar((current) => !current)} ></div>
        </>
          : <></>
      }

    </div>

  )
}

function Calc({ set_sidebar }) {
  const [input_buffer, set_input_buffer] = useState('0');
  return (
    <div className='h-full w-full flex flex-col gap-10 p-4' style={{ backgroundColor: "#202020" }}>
      <div className='flex flex-row'>
        <button onClick={() => set_sidebar((current) => !current)}>按钮</button>
        {/* <div>常规</div> */}
      </div>
      <Display input_buffer={input_buffer} />
      <KeyBoard set_input_buffer={set_input_buffer} />
    </div>
  )
}

function Display({ input_buffer }) {
  const select_bg = {
    '::selection': { // 选中文本的样式
      backgroundColor: 'yellow',
    },
  };
  return (
    <div className='h-20 w-full'>
      <div id='display' className='w-full h-full flex items-center justify-end	text-5xl font-medium p-2' >
        {input_buffer}
      </div>
    </div>
  )
}


function KeyBoard({ set_input_buffer }) {

  const calcValue = (buffer) => {
    return '0'
  }


  const handleEvent = (event) => {
    const value = event.target.id;
    set_input_buffer((buffer) => {
      switch (value) {
        case '': {
          return buffer
        }
        case 'A/C': {
          return '0'
        }
        case '=': {
          return calcValue(buffer);
        }
        case 'del': {
          if (buffer.length == 1) {
            return '0'
          }
          return buffer.slice(0, -1);
        }
        default: {
          if (buffer != '0') {
            return buffer + value
          }
          return value
        }
      }
    });

  }

  return (
    <div className="grid grid-rows-6 grid-cols-4 grid-flow-col gap-1 text-2xl h-120 " onClick={handleEvent}>
      <Key symbol="A/C" />
      <Key symbol="" />
      <Key symbol="7" />
      <Key symbol="4" />
      <Key symbol="1" />
      <Key symbol="%" />
      <Key symbol="(" />
      <Key symbol="" />
      <Key symbol="8" />
      <Key symbol="5" />
      <Key symbol="2" />
      <Key symbol="0" />
      <Key symbol=")" />
      <Key symbol="" />
      <Key symbol="9" />
      <Key symbol="6" />
      <Key symbol="3" />
      <Key symbol="." />
      <Key symbol="del" />
      <Key symbol="/" />
      <Key symbol="-" />
      <Key symbol="*" />
      <Key symbol="+" />
      <Key extraClass='bg-keyblue hover:bg-keybluehover active:bg-keyblueactive text-black' symbol='=' />

    </div>
  )
}

function Key({ symbol, extraClass = 'bg-key hover:bg-keyhover active:bg-keyactive text-white' }) {
  return (
    <div id={symbol} className={' flex items-center justify-center rounded-md font-light  ' + extraClass} >
      {symbol}
    </div>
  )
}

function App() {
  const [show_sidebar, set_sidebar] = useState(false);
  return (
    <div className='relative  w-full h-full min-w-120 '>
      <div className='w-full  left-0 top-0 absolute'>
        <SideBar show={show_sidebar} set_sidebar={set_sidebar} />
      </div>
      <Calc set_sidebar={set_sidebar} />
    </div>

  )
}

export default App
