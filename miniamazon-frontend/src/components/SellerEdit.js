import React from 'react';
import axios from 'axios';
import SellerList from './SellerList';
    
    const serverURL = "http://localhost:8888"
    //const userId = "5f8b8eee77a1ab596021f8c4"

    export default class SellerEdit extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                product: true,

            };

          //need some sort of save button that 
          //saves the changes to the product in the 
          //database and return to my product list (similar to a tag so you 
          //can go back to your lift of buttons)
        }
        }