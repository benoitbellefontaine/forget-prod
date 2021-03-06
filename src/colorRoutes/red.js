import React from 'react'
import { animated } from 'react-spring'
import './styles.css'
import '../styles.css'
import * as Icons from '../icons'

const Red = ({ style }) => (
    <animated.div className="mainRoute" style={{ ...style, background: `#ef5350`,height:'100%' }}>
      <div style={{width:'100vw',height:'100%',display:'flex',alignItems:'flex-start'}}>  
          <div className="box-service" style={{backgroundColor:'#d30000'}}>
            <div style={{fontFamily:'Kanit',fontSize:40,marginTop:110}}>
              CUEILLETTE
            </div>
            <div className="ant-truck">
              <Icons.PickUpTruck />
            </div>
            <p className="text-service">
              Nous avons le bon bac pour la cueillette de vos rebuts au moment qui vous convient. 
              Vous pouvez choisir une des trois grandeurs selon le volume et l'heure de la cueillette 
              quotidienne ou journalière.  
            </p>        
          </div>
          <div className="box-service" style={{backgroundColor:'#54c33d'}}>
            <div style={{fontFamily:'Kanit',fontSize:40,marginTop:110}}>
              CONTENEURS
            </div>
            <div className="ant-truck"> 
              <Icons.BinTruck />
            </div>
            <p className="text-service">
              Besoin d'un conteneur pour une courte ou une longue durée: pas de problème, nous avons plusieurs grandeurs 
              en plus de choisir la date de la livraison et la date de la cueillette.
            </p>
          </div>
          <div className="box-service" style={{backgroundColor:'#3d54c3',width:'34vw'}}>
                  <div style={{fontFamily:'Kanit',fontSize:40,marginTop:110}}>
                    TRI
                  </div>
                  <div className="ant-truck">
                    <Icons.Recycle />
                  </div>
                  <p className="text-service">
                    Notre centre de tri est notre contribution pour un meilleur environnement et nous l'avons
                    conçu pour maximiser le compostage et le recyclage. Notre devise : réutiliser, réduire et recycler.    
                  </p>
                </div>
      </div>
    </animated.div>
)

export default Red