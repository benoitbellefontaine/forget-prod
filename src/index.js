import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import './styles.css'

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

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'))