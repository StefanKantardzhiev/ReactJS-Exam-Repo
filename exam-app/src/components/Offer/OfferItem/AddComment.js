import { useState } from "react";
import { commentServiceFactory } from "../../../services/commentService";
import { useParams } from "react-router-dom";
import { useLocalStorage } from '../../../hooks/useLocalStorage'

export const AddComment = () => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const userId = auth._id
    const commentService = commentServiceFactory()
    const [values, setValues] = useState('');

    console.log(values)
    const changeHandler = (e) => {
        setValues(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setValues(values);

    };
    console.log(values)
    const onCommentSubmit = async (values, userId) => {
        await commentService.create(values, userId);
        values.preventDefault();
        setValues('');
    };


    // const changeValues = (newValues) => {
    //     // TODO: Validate newValues shape (like initialValues)

    //     setValues(newValues);
    // };
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onCommentSubmit}>
                <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
};