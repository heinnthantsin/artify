import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import ArtistData from '../data/ArtistData'
import productData from '../data/ProductData'
import FollowingList from '../components/card/FollowingList'
import { useParams } from 'react-router-dom'
import Detail from '../components/card/Detail'

function ProductDetail() {
    const params = useParams();
    const artistId = params.id;
    const artist = ArtistData.find((artist) => artist.id == artistId)
    return (
        <>
            <Detail img={artist?.img} aboutArtist={artist?.aboutArtist} artist={artist?.artist} category={artist?.category} artistId={artist?.id} />

            <FollowingList itemList={productData} sectionTitle={"Artist's Works"} />
            <Link to="/product"><Button customeClass="w-auto" buttonName={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>} /></Link>


        </>
    )
}

export default ProductDetail