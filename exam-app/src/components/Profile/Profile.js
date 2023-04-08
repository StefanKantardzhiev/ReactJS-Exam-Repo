import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { offerServiceFactory } from '../../services/offerService'
import { useParams, useNavigate } from "react-router-dom"
import { OfferItem } from "../Offer/OfferItem/OfferItem"



export const Profile = () => {


    const context = useContext(AuthContext)
    const user = context.user
    const [offers, setOffers] = useState([])

    // const navigate = useNavigate()
    const offerService = offerServiceFactory()

    const userId = user._id
    useEffect(() => {
        offerService.getAll()
            .then(data => {
                setOffers(data)
            })
    }, []);


    console.log(offers)
   
    const filteredData = offers.filter(offer => 
        offer._ownerid === userId
        return )

    console.log(filteredData)




    return (
        <></>
        // < div className="card" >
        //     <h1>{user.email}</h1>

        //     <h1>Your Offers</h1>
        //     <div className="your_items">
        //         <div className="item_box">
        //             <figure>
        //                 <img src={offer.imageUrl} width="300" height="200" alt="img" />
        //             </figure>
        //             {/* {
        //                 filteredData.map(x =>
        //                     <OfferItem key={x._id} {...x} />
        //                 )
        //             }
        //             {
        //                 filteredData.length === 0 || filteredData === null && (
        //                     <h3 className="no-articles">No articles yet</h3>
        //                 )
        //             } */}
        //         </div>
        //     </div >
        // </div >

    )
}