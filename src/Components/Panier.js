import React, { Component } from 'react';
import { connect } from 'react-redux';


class Panier extends Component {
    state = {
        panier:[],
        panierOpen: false,
        nbrItems : 0
    }
    componentWillReceiveProps(nextProps)
    {
        console.log("panier items",nextProps.panier)
        this.setState({
            panier: nextProps.panier,
            panierOpen : nextProps.panierOpen
            
        })
    }
    handleClosePanier = () => 
    {
        this.props.ClosePanier(false)        
    }
    handleDelete = (index) => {
        this.props.DeleteProduct(index)
        this.setState({
            panier: this.props.panier,
        })
    }
    render() {
        let TotalGlobal = 0;
        const panierItems = this.state.panier;
        const panierOpen = this.state.panierOpen===true?"panierOpen":"panierClose";
        //console.log("panierOpen",this.props.panierOpen)
        return (
            <div className={"panier-container "+panierOpen+""}>
            <a href="#" onClick={this.handleClosePanier} className="Close">X</a>         
               
                <table width="100%">
                    <tr>
                        <th>Quantité</th>
                        <th>Photo</th>
                        <th>Réferance</th>
                        <th>Nom de produit</th>
                        <th>Prix</th>
                        <th>Total produit</th>
                    </tr>
                    {panierItems.map((item ,index)=>(
                       TotalGlobal = TotalGlobal + item.quantite * item.produit.prix,

                    <tr>
                        <td>{item.quantite}</td>
                        <td><img className="img-fluid" width="100" src={item.produit.img} /></td>
                        <td>{item.produit.ref}</td>
                        <td>{item.produit.nom}</td>
                        <td>{item.produit.prix} €</td>
                        <td>{item.quantite * item.produit.prix}</td>
                        <td><button onClick={()=>this.handleDelete(index)}> <i className="fa fa-trash" aria-hidden="true"></i></button></td>
                    </tr>
                    ))
                        }
                    <tr>
                        <td colSpan="5" >Total panier :</td>
                        <td className="totalCase">{TotalGlobal} €</td>
                    </tr>                           
                </table>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return{panier : state.panier,panierOpen:state.panierOpen}
}
const mapDispatchToProps = dispatch =>
{
    return (
        {
            ClosePanier : (panierClosed) =>
            {
                dispatch(
                {type : "CLOSE_PANIER" ,panierClosed : panierClosed},
                )
            } ,
            DeleteProduct : (index) =>
            {
                dispatch(
                {type : "DELETE_PRODUCT" ,indexProduct : index},
                )
            }
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps) (Panier)
