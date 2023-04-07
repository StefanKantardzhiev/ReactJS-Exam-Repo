import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { offerServiceFactory } from '../../services/offerService'
import { useParams, useNavigate } from "react-router-dom"




export const Profile = ({ offers }) => {


    const context = useContext(AuthContext)
    const user = context.user
    const [offer, setOffer] = useState([])

    // const navigate = useNavigate()
    const offerService = offerServiceFactory()

    const userId = user._id
    useEffect(() => {
        offerService.getByOwner()
            .then(data => {
                setOffer(data)
            })
    }, []);

    return (
        < div className="card" >
            <h1>{user.email}</h1>

            <h1>Your Buildz</h1>
            <div className="your_items">
                <div className="item_box">
                    <figure>
                        <img src={offer.imageUrl} width="300" height="200" alt="img" />
                    </figure>
                    {/* <h3><a >{{ item.title }}</a></h3> */}
                    {/* <h2>{{ item.price }} Euro</h2><br> */}
                    {/* <p>{{ item.description }}</p> */}
                </div>
            </div >
        </div >

    )
}