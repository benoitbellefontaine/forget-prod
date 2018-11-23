import React, { Fragment } from 'react'
import { Keyframes, Spring, animated, config } from 'react-spring'
import { Avatar, Form, Icon, Input, Button, Checkbox } from 'antd'
import delay from 'delay'

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
const Content = Keyframes.Trail({
  peek: [{ x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 }, { x: -100, opacity: 0 }],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0 }
})

const items2 = [
  <Avatar src="https://semantic-ui.com/images/avatar2/large/elyse.png" />,
  <Input size="small" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
  <Input
    size="small"
    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
    type="password"
    placeholder="Password"
  />,
  <Fragment>
    <Checkbox size="small">Remember me</Checkbox>
    <a className="login-form-forgot" href="#" children="Forgot password" />
    <Button size="small" type="primary" htmlType="submit" className="login-form-button" children="Log in" />
  </Fragment>
]

const items = [{text:'F',key:'F'},{text:'O',key:'O'},{text:'R',key:'R'},{text:'G',key:'G'},{text:'E',key:'E'},{text:'T',key:'T'}];

const Route3 = ({ style }) => (
    <animated.div className="mainRoute" style={{ ...style, background: `#ffffff`, height:'100%' }}>
        <div style={{opacity:1,width:'100%',height:'100%'}}>
        <div>Hello</div>
        <Spring
            native
            from={{ opacity: 1 }}
            to={{ opacity: 1 }}>
            {props =>
                <animated.div style={props}>hello</animated.div>}
        </Spring>
        </div>
    </animated.div>
)
export default Route3