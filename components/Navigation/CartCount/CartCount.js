import { useSession } from 'next-auth/client';
import React, { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import fetch from '../../../config/fetch';

const CartCount = ({ className }) => {

    const [count, setCount] = useState(0)
    const [session] = useSession()

    useEffect(() => {
        if(session) {
            const headers = { Authorization: `Bearer ${session.accessToken}` }
            fetch('users/me/cart?count=true', { headers })
                .then(res => {
                    setCount(res.data)
                })
        }
        else if(typeof window != 'undefined' && localStorage.getItem('carts')) {
            const carts = JSON.parse(localStorage.getItem('carts'))
            setCount(carts.length)
        }
    }, [session])
    

    return count > 0 ? <span className={className}>{count}</span> : null
};

export default CartCount;