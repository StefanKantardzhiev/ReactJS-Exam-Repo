import { useState } from "react";
import { commentServiceFactory } from "../../../services/commentService";
import { useParams } from "react-router-dom";


export const AddComment = () => {

    const { commentId } = useParams()
    const commentService = commentServiceFactory()
    const [values, setValues] = useState('');


    const changeHandler = (e) => {
        setValues(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setValues(values);

    };
    console.log(values)

    const onCommentSubmit = async (commentId, values) => {
        await commentService.create(commentId, values.comment);
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