import {ADD_PANIER, CLOSE_PANIER, DELETE_PRODUCT} from '../actions/action-types';
import {OPEN_PANIER} from '../actions/action-types';

function rootReducer(state, action)
{     
    let check = false;
    if (action.type === ADD_PANIER) {
        state.panier.map((element,index) => {
            if(element.produit.ref===action.produit.ref)
            {
                
                state.panier[index].quantite=action.quantite+element.quantite
                check = true;
            }
            else
            {
                check = false
            }
            
        })
        if(check===false)
        {
            
            state.panier=[...state.panier,{produit:action.produit,quantite:action.quantite}]
        }
       
        return {...state};
        
    }
   
    if(action.type === OPEN_PANIER)
    {
        state.panierOpen = action.panierOpen;
        return {...state};
    }
    if(action.type === CLOSE_PANIER)
    {
        state.panierOpen = action.panierClosed;
        return {...state};
    }
    if(action.type === DELETE_PRODUCT)
    {       
        const new_state =   {...state};
        new_state.panier.splice(action.indexProduct,1)
        return {...new_state};
    }
    return state;
}

export default rootReducer;