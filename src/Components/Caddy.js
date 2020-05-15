import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge, NavbarText } from 'reactstrap';


 class Caddy extends Component {
    //  state = {
    //      totalQuantity:0
    //  }
    //  componentWillReceiveProps(NextProps)
    //  {
    //      let quantiteTotal  =   NextProps.panier.reduce((totalQ, item) => totalQ + item.quantite, 0);
    //      this.setState({
    //          totalQuantity :quantiteTotal
    //      })
    //  }
    handleOpenPanier = () => {        
        this.props.OpenPanier(true)
    }
    render() {
        
       
        return (
            <NavbarText><button className="btn-panier"  onClick={this.handleOpenPanier}>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <Badge color="secondary">{this.props.quantiteTotal}</Badge></button>
            </NavbarText>
        )
    }
}
function mapStateToProps(state)
{
    let quantiteTotal  =   state.panier.reduce((totalQ, item) => totalQ + item.quantite, 0);
    return{ quantiteTotal}
}
const mapDispatchToProps = dispatch =>
{
    return (
        {
            OpenPanier:(panierOpen) =>
            {
                dispatch({type : "OPEN_PANIER" ,panierOpen : panierOpen})
            }
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps) (Caddy)
