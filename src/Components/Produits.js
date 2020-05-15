import React, { Component } from 'react'
import axios from 'axios';
//import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import QuantityCounter from './QuantityCounter';
import Panier from './Panier';

 class Produits extends Component {
     state = {
         listProduits:[],
         quantite:1
     }
     componentDidMount()
     {
        const id = this.props.match.params.id;
        this.fetchData(id);
     }
     componentWillReceiveProps(nextProps)
     {
         const id = nextProps.match.params.id;
         this.fetchData(id);
     }

     fetchData = (id) =>
     {
        axios.get("http://www.json-generator.com/api/json/get/bZtanKZnoy?indent=2")
         .then(res =>{
             const produits = res.data;
             const listProduits = produits.filter(el => el.categorie === parseInt(id))
             
             this.setState({listProduits})
         })
     }
    render() {        
        const {listProduits} = this.state;
        return (
            <div className="container-fluid  listeProd">
                {listProduits.map((product, index) => 
                    <div className="boxProd  col-md-3 col-lg-3 text-center" key={product.id}>
                    <div className="boxProdInterne">
                        <div className="image-produit col-md-12 float-left">
                            <a href="#">
                                <img className="img-fluid" src={product.img} width="200"/>
                            </a>
                        </div>
                        
                        <div className="details-produit col-md-12 float-right"> 
                            <span>{product.ref}</span>                   
                            <h4 >{product.nom}</h4>
                            <span className="prix_promo">{product.prix_promo} €</span><br/>
                            <span className="prix_public">{product.prix} €</span><br/>
                            <p>Disponible : <b>{product.stock}</b></p>
                            <QuantityCounter index={index} product={product} listProduits={listProduits} />                            
                            <Button>
                                Détails    
                            </Button>                            
                        </div>
                    </div>
                </div>
                    )}
                    <Panier/>
            </div>
        )
    }
}

export default Produits
