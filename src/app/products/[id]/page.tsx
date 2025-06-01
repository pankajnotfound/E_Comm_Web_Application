import Image from 'next/image';
import React from 'react'
import ProductPage from '../../../../components/ProductPage';

const page = async ({params,}: {params: { id: string}}) => {
    const id = parseInt(params.id);

    if (isNaN(id)) {
        return <div>Invalid product ID</div>;
    }

    return (
        <ProductPage id={id} />
    )
}

export default page