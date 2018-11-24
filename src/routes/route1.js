import React, { Fragment } from 'react'
import { Keyframes, animated, Spring, config } from 'react-spring'
import delay from 'delay'
import './routes.css'
import '../styles.css'
import * as Icons from '../icons'
import { Avatar, Form, Icon, Input, Button, Checkbox } from 'antd'

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [{ x: 0, from: { x: -100 }, delay: 500 }, { x: -100, delay: 800 }],
  // single items,
  open: { x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ x: -100 })
  }
})

// Creates a keyframed trail
/*const Content = Keyframes.Trail({
  peek: [{ x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 }, { x: -100, opacity: 0 }],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0 }
})*/

const Content = Keyframes.Trail({
  open: { delay: 1500, from: { y: -100, opacity:0 }, to: { y: 0, opacity:1 } },
  close: { to: { x: -100 }, config: config.slow }
});

//const letters = ['F','O','R','G','E','T'];
const letters = [
  {letter:'F',key:1, color:'#574826'},
  {letter:'O',key:2, color:'#48df31'},
  {letter:'R',key:3, color:'#8f3d3d'},
  {letter:'G',key:4, color:'#45c8d9'},
  {letter:'E',key:5, color:'#3da300'},
  {letter:'T',key:6, color:'#f8e468'}
];

const mottoF = [...'POUR UN SERVICE IMPECCABLE !'];
const mottoE = [...'FOR A BETTER SERVICE !'];

const itemsF = mottoF.map((char, index) => {
  return {letter:char,key:index}
})

const itemsE = mottoE.map((char, index) => {
  return {letter:char,key:index}
})

/*// Will fade children in and out in a loop
const Script = Keyframes.Spring(async next => 
  while (true) {
    await next({ opacity: 1, from: { opacity: 0 }, reset: true })
  }
)*/

const Route1 = ({ style, show, language }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#54c33d`, height:'100%' }}>

    <div style={{display:'flex',flexDirection:'column',alignItems:'center',boxSizing:'border-box'}}>
      
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',boxSizing:'border-box'}}>
        
        <Content
          native
          keys={letters.map(_ => _.key)}
          config={{ tension: 200, friction: 20 }}
          state={show ? "open" : "close"}
          state={"open"}
          >
          {letters.map(item => ({ y, opacity, ...props }) => (
            <animated.h1
              style={{
                transform: y.interpolate(value => `translateY(${value}vh)`),
                opacity: opacity,
                //letterSpacing: 5,
                color: `${item.color}`,
                padding: 5,
                margin: 5,
                //width: '10vw',
                //height: '10vw',
                minHeight: 0,
                borderRadius: '5px',
                textAlign: 'center',
                backgroundColor: 'rgba(0,0,0,0.05)',
                marginBlockStart: '0.0em',
                marginBlockEnd: '0.0em',
                lineHeight: '100px'
              }}
            >
              {item.letter}
            </animated.h1>
          ))}
        </Content>
      </div>

      <div style={{display:'flex',flexDirection:'row',alignItems:'center',boxSizing:'border-box'}}>
        

        <Content
          native
          //items={letters2.map(_=>_)}
          keys={language ? itemsF.map(_ => _.key) : itemsE.map(_ => _.key)}
          config={{ tension: 200, friction: 20 }}
          state={"open"}
          >
          {language ? itemsF : itemsE.map(item => ({ y, opacity, ...props }) => (
            <animated.div
              style={{
                transform: y.interpolate(value => `translateY(${value}px)`),
                opacity: opacity,
                fontSize: 40,
                letterSpacing: 3
              }}
            >
              {item.letter}
            </animated.div>
          ))}
        </Content>

      </div>
        
    </div>

  </animated.div>
)
export default Route1