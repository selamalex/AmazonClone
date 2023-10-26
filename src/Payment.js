import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
function Payment(){
    const [{basket,user}, dispatch]=useStateValue();
    return (
        <div className='paymentProceed'>
            <div className='payment_nav'>
                <h1> Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
            </div>
            <div className='address-displayer'>
                <div className='deliverInfo'> 
                    <h2>Delivery Address</h2>
                </div>
                <div >
                    <p>{user?.email}</p>
                    <p> 123 React Lane</p>
                    <p>Chicago, IL</p>
                </div>
            </div>
            <div>

                <h2 className='Review-items'> Review items and delivery</h2>
                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                ))};
            </div>
            <div className='payment-method-section'>
                <div>
                    <h2 className='payment-method'>Payment Method</h2>
                </div>
                {/* <div>
                 <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <CurrencyFormat 
                    renderText={(value)=> <h3>Order Total: {value}</h3>}
                     decimalScale={2}
                     value={getBasketTotal(basket)}
                     displayType={'text'}
                     thousandSeparator={true}
                     prefix={'$'}/>
                     <button disabled={processing || disabled|| succeeded}>
                        <span>{processing?<p>Processing</p>: 'Buy Now'}
                            </span> </button>
                            <div>
                            {error && <div>{error}</div>}
                            </div>
                            
                 </form> 
                </div> */}

            </div>
        </div>
    );

}

export default Payment;
