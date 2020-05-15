import { ADD_PANIER, CLOSE_PANIER, DELETE_PRODUCT } from './action-types';

export function addPanier (ProduitPanier,QuantitePanier)
{
    return {type: ADD_PANIER,ProduitPanier,QuantitePanier}
}
export function OpenPanier(panierOpen)
{
    return {type : OPEN_PANIER,panierOpen}
}
export function ClosePanier(panierclosed)
{
    return{type: CLOSE_PANIER,panierclosed}
}
export function DeleteProduct(indexProduct)
{
    return{type: DELETE_PRODUCT,indexProduct}
}