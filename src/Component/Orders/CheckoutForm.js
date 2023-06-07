/**
 * Collect card information
 * --------------
 * 1. stripe install
 * 2. card loadStripe 
 * : pk
 * 3. card element
 * 4. card form
 * 5. stripe, elements
 * 6. check card error and display error
 * 
*/



import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
   



const  CheckoutForm = ({order}) => {
    console.log(order)
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
   const [clientSecret, setClientSecret] = useState("");
   const navigate = useNavigate()
   console.log(order)
   const {_id,placeName,price,email,customer,phone} = order;
 
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('travelToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return ;
        }
         const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        });
        if (error) {
        //    console.log(error) 
        setCardError(error.message)
        }
        else{
            setCardError('')
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: placeName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
    
        if (paymentIntent.status==="succeeded") {
          
                 const payment={
                    price,
                    customer,
                    transactionId: paymentIntent.id,
                    email,
                    bookingId: _id,
                    phone
                 }
                 fetch('http://localhost:5000/payments',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization:`bearer ${localStorage.getItem('travelToken')}`
                    },
                    body: JSON.stringify(payment)
                 })
                 .then(res => res.json())
                 .then(data => {
                    setSuccess('congrats ! your payment completed')
                    setTransactionId(paymentIntent.id) ;
                    navigate('/orders')
                 })
        }
        setProcessing(false)    
    }


    return (
        <>
            <form className='mx-auto' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;