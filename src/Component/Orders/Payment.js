import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../Loader/Loading';

const stripePromise = loadStripe('pk_test_51N3foiGn4oE3WVXCXuWUa81lLAsKL1UKB57oDZDZLPCMn1oe5HJOsQAsk6G9PFRytzqIZTRXMCHwbSBHS4fhvDTA00eurMaCKb')
console.log(stripePromise)
const Payment = () => {
    const order  = useLoaderData();
     const navigation = useNavigation()
    // console.log('booking' , booking)
    const {_id,placeName,price,email,phone} = order;
    if (navigation.state==="loading") {
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">Payment For {placeName}</h2>
           
            <p className='text-xl'>Price {price} </p>
           
        <div className='w-96 my-6'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                order={order}
                ></CheckoutForm>
            </Elements>
        </div>
        </div>
    );
};

export default Payment;
// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Payment = () => {
//     const order  = useLoaderData();
//     console.log(order)
//     return (
//         <div>
//           <h2 className='text-3xl' > Payment For {order.placeName} </h2>
//         </div>
//     );
// };

// export default Payment;