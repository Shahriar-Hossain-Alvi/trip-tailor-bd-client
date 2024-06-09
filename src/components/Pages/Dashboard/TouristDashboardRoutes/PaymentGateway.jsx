import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import DaisyLoadingSpinner from '../../../Utility/DaisyLoadingSpinner';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const PaymentGateway = () => {
    const paramsId = useParams();
    const { id } = paramsId;
    const axiosSecure = useAxiosSecure();

    const { data: bookingPrice = [], isLoading } = useQuery({
        queryKey: ['bookingPrice', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/singleBooking/${id}`)
            return res.data;
        }
    })

    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    const getPrice = bookingPrice.map(price => price.price)
    const price = getPrice[0];

    return (
        <div className='mb-10 mx-2 md:mx-4'>
            <Elements stripe={stripePromise}>
                <CheckoutForm bookingId={id} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentGateway;