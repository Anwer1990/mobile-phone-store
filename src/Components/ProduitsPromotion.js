import React, { Component } from 'react';
import axios from "axios";
import QuantityCounter from './QuantityCounter';
import { Button } from 'reactstrap';

  

 class ProduitsPromotion extends Component {
     state={
         products:[],
         promotion:[]
     }
     componentDidMount() {
        axios.get(`http://www.json-generator.com/api/json/get/bZtanKZnoy?indent=2`)
          .then(res => {
            const products = res.data;
            const tabPromotion = products.filter(el => el.promotion === true)
            this.setState({ products:products , promotion:tabPromotion  });
          })         
      }
      
    render() {
        return (
            <div className="container-fluid  listeProd">
                <h1 className="text-center">Produits en Promotion</h1>
                {this.state.promotion.map((product,index) =>  
                <div className="boxProd  col-md-3 col-lg-3 text-center" key={product.id}>
                    <div className="boxProdInterne">
                        <div className="image-produit col-md-12 float-left">
                            <a href="#">
                                <img className="img-fluid" src={product.img} width="200"/>
                            </a>
                        </div>
                        
                        <div className="details-produit col-md-12 float-right">                    
                            <h4 >{product.nom}</h4>          
                            <span className="prix_promo">{product.prix_promo} €</span><br/>
                            <span className="prix_public">{product.prix} €</span><br/>
                            <p>Disponible : <b>{product.stock}</b></p>
                            <QuantityCounter index={index} product={product} listProduits={this.state.promotion} />
                            <Button>
                                Détails    
                            </Button>      
                        </div>
                    </div>
                </div>
                )
                }
            </div>
        )
    }
}

export default ProduitsPromotion;