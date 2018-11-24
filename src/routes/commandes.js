import 'antd/dist/antd.css'
import '../styles2.css'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Keyframes, animated, config } from 'react-spring'
import { Avatar, Form, Icon, Input, Button, Checkbox, Select, DatePicker } from 'antd'
import delay from 'delay'

const Option = Select.Option;

const fast = { ...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01 }

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [
    { delay: 500, from: { x: -100 }, to: { x: 0 }, config: fast },
    { delay: 800, to: { x: -100 }, config: config.slow }
  ],
  // single items,
  open: { to: { x: 0 }, config: config.default },
  // or async functions with side-effects
  close: async call => {
    await delay(400)
    await call({ to: { x: -100 }, config: config.gentle })
  }
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [{ delay: 600, from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } }, { to: { x: -100, opacity: 0 } }],
  open: { delay: 100, to: { x: 0, opacity: 1 } },
  close: { to: { x: -100, opacity: 0 } }
})

export default class Commandes extends React.Component {

  state = { open: this.props.state }
  toggle = () => this.setState(state => ({ open: !state.open }))

  componentDidUpdate(prevProps) {
    console.log("calling london",this.props.state);
    // Typical usage (don't forget to compare props):
    if (this.props.state !== prevProps.state) {
      this.setState({ open: !this.state.open })
    }
  } 

  handleChange = (value) => { console.log(`selected ${value}`); }
  onChange = (date, dateString) => { console.log(date, dateString); }

  render() {

    const items = [
      <Avatar src="https://semantic-ui.com/images/avatar2/large/matthew.png" />,
      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom" />,
      <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Courriel" />,
      <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Téléphone" />,
      <div style={{display:'flex'}}>
        <Select defaultValue="type de service" onChange={this.handleChange} style={{flexGrow:1}}>
        <Option value="cueillette">cueillette</Option>
        <Option value="conteneur">conteneur</Option>
        <Option value="tri">tri</Option>
        <Option value="connexe">matériaux secs</Option>
        </Select>
        <DatePicker onChange={this.onChange} style={{marginLeft:2,flexGrow:1}}/>
      </div>,
      <Fragment>
        <Button type="primary" htmlType="submit" className="login-form-button" children="Passer la commande" />
      </Fragment>
    ];

    const state = this.state.open ? 'open' : 'close'
    const icon = this.state.open ? 'fold' : 'unfold'
    console.log("render state",state);
    return (
      <Fragment>
        <Sidebar native state={state}>
          {({ x }) => (
            <animated.div className="sidebar" style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
              <Icon type={`menu-fold`} className="toggle" style={{ left:20 }} onClick={this.toggle} />
              <Content native keys={items.map((_, i) => i)} config={{ tension: 200, friction: 20 }} state={state}>
                {items.map((item, i) => ({ x, ...props }) => (
                  <animated.div
                    style={{
                      transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                      ...props
                    }}>
                    <Form.Item className={i === 0 ? 'middle' : ''}>{item}</Form.Item>
                  </animated.div>
                ))}
              </Content>
            </animated.div>
          )}
        </Sidebar>
      </Fragment>
    )
  }
}