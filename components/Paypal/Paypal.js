import React, { useEffect, useRef, useState } from "react"

const Paypal = ({ onApprove, onError, orders }) => {

    const [loaded, setLoaded] = useState(false)

    const paypal = useRef()

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 
            'https://www.paypal.com/sdk/js?client-id=AQReEd8nU21jcTrjIBpnMWucHSjFX8Adf9CrXull6QaprE7_xc5CGej-LFvgEJKILvaW1tZ6b0zRGcd0&currency=CAD&buyer-country=CA'
        script.addEventListener('load', () => setLoaded(true))
        document.body.appendChild(script)
    }, [])

    useEffect(() => {
        if(loaded) {
            window.paypal.Buttons({

                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    value: "0.01",
                                },
                            },
                        ],
                        application_context: {
                            shipping_preference: 'NO_SHIPPING'
                        }
                    });
                },
                onApprove: onApprove,
                onError: onError
    
            }).render(paypal.current)
        }
    }, [loaded])

    return (
        <div style={{ marginTop: '1.2rem' }} >
            <div ref={paypal}></div>
        </div>
    );
}

export default Paypal;