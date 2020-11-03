import React from 'react';
import axios from 'axios';
import SellerList from './SellerList';
    
    const serverURL = "http://localhost:8888"
    //const userId = "5f8b8eee77a1ab596021f8c4"

    export default class Seller extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isShippingEntered: false,
                isPaymentEntered: false,
                isBillingEntered: false,
                isBillingSame: false,
                isCheckingOut: false,
                isReviewingInformation: false,
                isCheckoutButton1Visible: true,

                sellerID: "",
                sellerName: "",
                sellerEmail: "",
                shippingAddressLine1: "",
                shippingAddressLine2: "",
                shippingAddressCity: "",
                shippingAddressState: "",
                shippingAddressZip: "",
                paymentCardNumber: "",
                paymentCardExpire: "",
                paymentCardSecurityCode: "",
                paymentCardName: "",
                billingName: "",
                billingAddressLine1: "",
                billingAddressLine2: "",
                billingAddressCity: "",
                billingAddressState: "",
                billingAddressZip: "",
                orderPrice: 0.0,
                orderStatus: "",
                orderDate: "",
                orderDeliveryDate: "",
                orderDateCheckedOut: "",
                orderPrice: false,
                orders: [],
                products: []
            };
            this.setShippingEntered = this.setShippingEntered.bind(this);
            this.setPaymentEntered = this.setPaymentEntered.bind(this);
            this.setBillingEntered = this.setBillingEntered.bind(this);
            this.setBillingSame = this.setBillingSame.bind(this);
            this.setCheckingOut = this.setCheckingOut.bind(this);
            this.setReviewingInformation = this.setReviewingInformation.bind(this);
            this.setCheckoutButtonInvisible = this.setCheckoutButtonInvisible.bind(this);

            this.setOrderID = this.setOrderID.bind(this);
            this.setOrderName = this.setOrderName.bind(this);
            this.setShippingAddressLine1 = this.setShippingAddressLine1.bind(this);
            this.setShippingAddressLine2 = this.setShippingAddressLine2.bind(this);
            this.setShippingAddressCity = this.setShippingAddressCity.bind(this);
            this.setShippingAddressState = this.setShippingAddressState.bind(this);
            this.setShippingAddressZip = this.setShippingAddressZip.bind(this);
            this.setPaymentCardNumber = this.setPaymentCardNumber.bind(this);
            this.setPaymentCardExpire = this.setPaymentCardExpire.bind(this);
            this.setPaymentCardSecurityCode = this.setPaymentCardSecurityCode.bind(this);
            this.setPaymentCardName = this.setPaymentCardName.bind(this);
            this.setBillingName = this.setBillingName.bind(this);
            this.setBillingAddressLine1 = this.setBillingAddressLine1.bind(this);
            this.setBillingAddressLine2 = this.setBillingAddressLine2.bind(this);
            this.setBillingAddressCity = this.setBillingAddressCity.bind(this);
            this.setBillingAddressState = this.setBillingAddressState.bind(this);
            this.setBillingAddressZip = this.setBillingAddressZip.bind(this);
            this.setOrderPrice= this.setOrderPrice.bind(this);
            this.setOrderStatus= this.setOrderStatus.bind(this);
            this.setOrderDate= this.setOrderDate.bind(this);
            this.setOrderDeliveryDate= this.setOrderDeliveryDate.bind(this);
            this.setOrderDateCheckedOut= this.setOrderDateCheckedOut.bind(this);
        }
        }