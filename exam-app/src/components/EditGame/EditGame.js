import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { offerServiceFactory } from "../../services/offerService";

export const EditGame = () => {
    const { offerId } = useParams();
    const offerService = offerServiceFactory()
    const [values, setValues] = useState({
        _id: '',
        title: '',
        imageUrl: '',
        city: '',
        price: '',
        description: ''
    });
    const navigate = useNavigate()


    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const editOffer = await offerService.edit(offerId, values)
            setValues(editOffer);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }
    const changeValues = (newValues) => {

        setValues(newValues);
    };
    console.log(values)

    useEffect(() => {
        offerService.getOne(offerId)
            .then(result => {
                changeValues(result);
            });
    }, [offerId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="post" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Offer</h1>
                    <label htmlFor="leg-title">Offer Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="category">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={values.city}
                        onChange={changeHandler}
                    />

                    <label htmlFor="levels">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min="1"
                        value={values.price}
                        onChange={changeHandler}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="description" id="summary" value={values.description} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
};