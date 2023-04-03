import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { offerServiceFactory } from '../../services/offerService'

export const Create = () => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: Number,
        city: '',
        imageUrl: '',
        _ownerId: auth._id
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const offerService = offerServiceFactory(auth.accessToken);


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const offerData = await offerService.create(formData)
            navigate('/offers');
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <section id="create-page" className="auth" >
            <form id="create" method="post" onSubmit={onSubmitHandler}>
                <div className="container">
                    <h1>Create an offer</h1>

                    <label htmlFor="leg-title">Offer title:</label>
                    <input onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">City:</label>
                    <input onChange={changeHandler} type="text" id="category" name="city" placeholder="Enter game category..." />

                    <label htmlFor="levels">Price:</label>
                    <input onChange={changeHandler} type="number" id="maxLevel" name="price" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Description:</label>
                    <textarea name="description" id="summary" onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section >
    );
};
