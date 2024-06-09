/* eslint-disable react/no-unescaped-entities */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ price, bookingId }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [tnxId, setTnxId] = useState('');
    const [tnxAmount, setTnxAmount] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const totalPrice = price;

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('Payment error', error);
            setError(error.message);
        }
        else {
            console.log('Payment method', paymentMethod);
            setError('');
        }


        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('Confirm error', confirmError);
            toast.error(confirmError);
        }
        // ---------------------
        else {
            if (paymentIntent.status === 'succeeded') {
                setTnxId(paymentIntent.id);
                setTnxAmount(paymentIntent.amount);
                toast.success('Payment successful');


                const paymentInfo = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    bookingId: bookingId,
                    transactionId: paymentIntent.id,
                    status: 'paid'
                }

                const res = await axiosSecure.post('/payments', paymentInfo);
                
                if (res.data?.insertedId) {
                    toast.success('Thank you for purchasing.')
                }
            }
        }
    }

    return (
        <div>
            <h2 className='text-center font-semibold text-xl mb-10'>Amount have to pay: {totalPrice} tk</h2>
            <form className="text-center space-y-4" onSubmit={handleSubmit}>
                <ToastContainer></ToastContainer>
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
                <button type="submit" className="btn-success text-white btn-wide btn" disabled={!stripe || !clientSecret || tnxId}>
                    Pay
                </button>
                <p className="text-red-500 font-medium text-lg">{error}</p>
                {
                    tnxId && <div>
                        <p className="text-lg font-semibold text-green-600"><span className="italic font-bold text-black">Transaction ID:</span> {tnxId}</p>
                        <p className="text-lg font-medium text-red-600 mb-4"><span className="text-black italic font-bold">Paid Amount:</span> {tnxAmount / 100}tk</p>
                        <p className='text-red-600 font-medium'>Please store this Transaction Id for. <br /> It'll be needed to verify your purchase if error occurs during Transaction or in our servers.</p>
                    </div>
                }
            </form>
            <div className='mt-5 text-center space-x-4'>
                <Link to='/'>
                    <button className="btn btn-md bg-ttPrimary text-white hover:bg-ttSecondary">Go to Home</button>
                </Link>
                <Link to='/dashboard/myBookings'>
                    <button className="btn bg-ttSecondary text-white hover:bg-ttPrimary">Go to my bookings</button>
                </Link>
            </div>
        </div>
    );
};

CheckoutForm.propTypes = {
    price: PropTypes.number,
    bookingId: PropTypes.string
}

export default CheckoutForm;