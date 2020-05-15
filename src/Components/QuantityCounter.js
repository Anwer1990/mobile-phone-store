import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';

class QuantityCounter extends Component {
    state = {
        quantite:1
    }

    // fonction pour incrimenté la quantité
    handlePlus = (index) =>
    {
        
       if(this.state.quantite<this.props.listProduits[index].stock)
       {          
           let newQuantite =   this.state.quantite + 1;
           
           this.setState({
               quantite:newQuantite
           })
       }
    }

    // fonction pour descrimenté la quantité
    handleMoin = () => {
       
        if(this.state.quantite>1)
        {
            let newQuantite =  this.state.quantite - 1;
            this.setState({
                quantite:newQuantite
            })
        }
    }

  

    //fonction pour ajouter au panier
    handleAdd = (product) => 
    {       
        this.props.addPanier(product,this.state.quantite);
    }
    render() {
        const index = this.props.index;
        const product   = this.props.product;
        return (
            <div>
                <div className="box-qty">
                    <button className="plus" onClick={() =>this.handlePlus(index)}>+</button>
                    <input type="text" className="qty-field" ref="qtyField"  value={this.state.quantite} /> 
                    <button className="moin" onClick={() =>this.handleMoin()}>-</button>                               
                </div>
                <Button   color="primary" className="m-1" onClick={() =>this.handleAdd(product)}>
                    Ajouter <span className="glyphicon glyphicon-shopping-cart"></span>
                </Button>
            </div>
            
        )
    }
}

const mapDispatchToProps    =   dispatch =>
{
    return {
        addPanier :(ProduitPanier,QuantitePanier)   => {
            dispatch({type: "ADD_PANIER", produit:ProduitPanier, quantite:QuantitePanier})
        }
    }
}

export default connect(null,mapDispatchToProps) (QuantityCounter)
