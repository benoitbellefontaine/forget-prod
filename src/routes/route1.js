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
  open: { delay: 100, from: { y: -100 }, to: { y: 0 } },
  close: { to: { x: -100 }, config: config.slow }
});

const items = [
  <Avatar src="https://semantic-ui.com/images/avatar2/large/matthew.png" />,
  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />,
  <Fragment>
    <Checkbox>Remember me</Checkbox>
    <a className="login-form-forgot" href="#" children="Forgot password" />
    <Button type="primary" htmlType="submit" className="login-form-button" children="Log in" />
    Or <a href="#">register now!</a>
  </Fragment>
];

//const letters = ['F','O','R','G','E','T'];
const letters = [{letter:'F',key:1},{letter:'O',key:2},{letter:'R',key:3},{letter:'G',key:4},{letter:'E',key:5},{letter:'T',key:6}];


/*// Will fade children in and out in a loop
const Script = Keyframes.Spring(async next => 
  while (true) {
    await next({ opacity: 1, from: { opacity: 0 }, reset: true })
  }
)*/

const Route1 = ({ style, show }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#ffffff`, height:'100%' }}>

        <div style={{height:'50vh',display:'flex',alignItems:'center',boxSizing:'border-box'}}>
          
        <Content
          native
          keys={letters.map(_ => _.key)}
          config={{ tension: 200, friction: 20 }}
          state={"open"}
          >
          {letters.map(item => ({ y, ...props }) => (
            <animated.div
              style={{
                transform: y.interpolate(value => `translateY(${value}vh)`)
              }}
            >
              {item.letter}
            </animated.div>
          ))}
        </Content>
            
        </div>

    
  </animated.div>
)
export default Route1