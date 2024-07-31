import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

// PayPal client ID and currency
const initialOptions = {
  clientId: "",  // Replace with your actual PayPal client ID
  currency: "USD",
};

const PayPalButton = ({ amount }) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
              },
            }],
          });
        }}
        onApprove={async (data, actions) => {
          try {
            const order = await actions.order.capture();
            alert('Transaction completed by ' + order.payer.name.given_name);
          } catch (error) {
            console.error('Error capturing order:', error);
            alert('Transaction failed');
          }
        }}
        onError={(err) => {
          console.error('PayPal Error:', err);
          alert('Transaction failed');
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
