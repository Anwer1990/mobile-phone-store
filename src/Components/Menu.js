import React, { Component } from 'react';
import {NavItem,Nav} from 'reactstrap';
import axios from "axios";
import {Link} from "react-router-dom";

 class Menu extends Component {
     state = {
         categories:[]
     }
     componentDidMount() {
        axios.get(`http://www.json-generator.com/api/json/get/cabzgqYppe?indent=2`)
          .then(res => {
            const categories = res.data;
            this.setState({ categories  });
          })         
      }
    render() {
        
        return (       
                    <Nav className="mr-auto nav-categories" navbar>
                        {this.state.categories.map(categorie =>
                            <NavItem>                                
                                <Link className="liens-categorie" to={"/produits/"+categorie.id} >
                                    {categorie.nom}
                                    </Link>                                                                 
                            </NavItem>
                             
                            )}                    
                    </Nav>
               
        )
    }
}

export default Menu;
