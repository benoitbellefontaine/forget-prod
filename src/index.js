import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Parallax } from 'react-spring'
import { Transition, Keyframes, animated, config } from 'react-spring'
import { Avatar, Form, Icon, Input, Button, Checkbox, Menu, Switch as SwitchA } from 'antd'
import delay from 'delay'
import * as Icons from './icons'
import Route1 from './routes/route1'
import Route2 from './routes/route2'
import Commandes from './routes/commandes'

import { LocaleProvider } from 'antd';
import fr_FR from 'antd/lib/locale-provider/fr_FR';
import 'moment/locale/fr';

import './styles.css'
import 'antd/dist/antd.css'
import './styles2.css'
import './routes/routes.css'

const Item = Menu.Item;

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

  const Page = ({ offset, caption, first, second, gradient, onClick }) => (
    <React.Fragment>
      <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
        <div className="slopeBegin" />
      </Parallax.Layer>
  
      <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
        <div className={`slopeEnd ${gradient}`} />
      </Parallax.Layer>
  
      <Parallax.Layer className="text number" offset={offset} speed={0.3}>
        <span>0{offset + 1}</span>
      </Parallax.Layer>
  
      <Parallax.Layer className="text header" offset={offset} speed={0.4}>
        <span>
          <p style={{ fontSize: 20 }}>{caption}</p>
          <div className={`stripe ${gradient}`} />
          <p>{first}</p>
          <p>{second}</p>
        </span>
      </Parallax.Layer>
    </React.Fragment>
  )

class AppHorizontal extends React.Component {
  scroll = to => this.parallax.scrollTo(to)
  render() {
    return (
      <div style={{ background: '#dfdfdf' }}>
        <Parallax
          className="container"
          ref={node => (this.parallax = node)}
          pages={3}
          horizontal
          scrolling={false}>
            <Page offset={0} gradient="pink" caption="CHARGEMENT AVANT" first="Lorem ipsum" second="dolor sit" onClick={() => this.scroll(1)} />
            <Page offset={1} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(2)} />
            <Page offset={2} gradient="tomato" caption="what we want" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)} />
        </Parallax>
      </div>
    )
  }
}

class AppVertical extends React.Component {
    render() {
      return (
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
  
          <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
  
          <Parallax.Layer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src={url('earth')} style={{ width: '60%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          />
  
          <Parallax.Layer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={url('server')} style={{ width: '20%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={url('bash')} style={{ width: '40%' }} />
          </Parallax.Layer>
  
          <Parallax.Layer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} />
          </Parallax.Layer>
        </Parallax>
      )
    }
}

/****************************************** Keyframes */
const fast = { ...config.stiff, restSpeedThreshold: 1, restDisplacementThreshold: 0.01 }

const NavLink = props => (
  <li className="navItem">
    <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
  </li>
)

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
    await call({ to: { x: 120 }, config: config.gentle })
  }
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { delay: 600, 
      from: { x: -100, opacity: 0 }, 
      to: { x: 0, opacity: 1 } 
    }, 
    { to: { x: -100, opacity: 0 } 
  }],
  open: { delay: 100, to: { x: 0, opacity: 1 } },
  close: { to: { x: 120, opacity: 0 } }
})

const items2 = [
  <Avatar src="https://semantic-ui.com/images/avatar2/large/matthew.png" />,
  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />,
  <Fragment>
    <Checkbox>Remember me</Checkbox>
    <a className="login-form-forgot" href="#" children="Forgot password" />
    <Button type="primary" htmlType="submit" className="login-form-button" children="Log in" />
    Or <a href="#">register now!</a>
  </Fragment>
]

class App extends React.Component {
  state = { open: false, openOrder: false, language: true }
  toggle = () => this.setState(state => ({ open: !state.open }))
  toggleOrder = () => this.setState(state => ({ openOrder: !state.openOrder }))
  toggleLanguage = () => this.setState(state => ({ language: !state.language }))
  render() {
    const state = this.state.open === undefined ? 'peek' : this.state.open ? 'open' : 'close'
    const stateOrder = this.state.openOrder ? 'open' : 'close'
    const icon = this.state.open ? 'fold' : 'unfold'
    console.log(stateOrder);
    const items = [
      //<Avatar src="https://semantic-ui.com/images/avatar2/large/matthew.png" />,
      <div className="ant-truck"><Icons.PickUpTruck /></div>,
      <h3 style={{margin:0,padding:0,textAlign:'center'}}>Communiquer avec nous</h3>,
      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom" />,
      <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Adresse courriel" />,
      <Input.TextArea prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Message" />,
      <Button type="primary" htmlType="submit" className="login-form-button" children="Envoyer votre message" onClick={this.toggle}/>,
      <h3 style={{margin:0,padding:0,textAlign:'center'}}>ou</h3>,
      <Button prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} 
        type="disabled" htmlType="submit" className="login-form-button" children="appeler nous au (819) 643-4448" />,
    ]

    //const rollOff = Icons[`CloseSquareO`]
    return (
        <div style={{height:'100vh',boxSizing:'border-box'}}>
          <Router>
            <Route
              render={({ location, ...rest }) => (
                <div className="fill">
                  <Route exact path="/" render={() => <Redirect to="/route1" />} />
                  <nav style={{height:'10vh',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div style={{margin:10,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <div style={{fontSize:40,marginLeft:20}}>
                        Centre de tri Forget
                      </div>
                      <ul className="nav">
                        <NavLink to="/route1"><span>Accueil</span></NavLink>
                        <NavLink to="/route2"><span>Services</span></NavLink>
                        <li className="navItem" onClick={this.toggleOrder} style={{display:'flex'}}><Icon type="gift" themed="filled" style={{ color: 'rgba(0,0,0,.25)', margin: '4px 5px' }} /> Commandes</li>
                        <li className="navItem" onClick={this.toggle} style={{display:'flex'}}><Icon type="mail" themed="filled" style={{ color: 'rgba(0,0,0,.25)', margin: '4px 5px'  }} /> Contact</li>
                        <li className="navItem" onClick={this.toggleLanguage}><SwitchA checkedChildren="F" unCheckedChildren="E" defaultChecked /></li>
                      </ul>
                    </div>
                  </nav>
                  <div className="content-route">
                    <Transition
                      native
                      config={{ tension: 1, friction: 10 }}
                      keys={location.pathname.split('/').filter(a => a)[0]}
                      from={{ transform: 'translateY(500px)', opacity: 0 }}
                      enter={{ transform: 'translateY(0px)', opacity: 1 }}
                      leave={{ transform: 'translateY(500px)', opacity: 0 }}>
                      {style => (
                        <Switch location={location}>
                          <Route path="/route1" render={props => Route1({ ...props, style })} />
                          <Route path="/route2" render={props => Route2({ ...props, style })} />
                          <Route render={() => <div>Not Found</div>} />
                        </Switch>
                      )}
                    </Transition>
                  </div>
                </div>
              )}
            />
          </Router>
        
        {/* SIDEBAR */}
        <div style={{position:'absolute',top:0,right:0,height:'100vh',overflow:'hidden'}}>
          <Sidebar native state={state} style={{overflow:'hidden',overflowY:'auto'}}>
            {({ x }) => (
              <animated.div className="sidebar" style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
                <Icon type={`menu-unfold`} className="toggle" style={{ right:20 }} onClick={this.toggle} />
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
          </div>

          <div style={{position:'absolute',top:0,left:0,height:'100vh',overflow:'hidden'}}>
            { 
              this.state.language 
                ? <LocaleProvider locale={fr_FR}><Commandes state={this.state.openOrder}/></LocaleProvider>
                : <Commandes state={this.state.openOrder}/>
            }
          </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))