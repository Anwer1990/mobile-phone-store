import React, { Component } from 'react';

import SliderPub from './SliderPub';
import ProduitsPromotion from './ProduitsPromotion';
import Panier from './Panier';
  
 class Accueil extends Component { 
              
    render() {
        
        return (
            <div>          
                <SliderPub/>
                <hr/>
                <Panier/>
                <ProduitsPromotion/>
                            
            </div>
        )
    }
}

export default Accueil;
