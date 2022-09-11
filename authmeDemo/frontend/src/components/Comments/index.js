import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../../store/comments";

const Comment = () => {
  const [formData, setFormData] = useState({ content: "" });

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { userId: user.id, content: formData.content };
    const comment = await dispatch(createComment(payload));
    // send to database
  };

  if (!user || !user.id) return null;
  return (
    <div id="comments-container">
      <form type="submit">
        <input
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Send Comment
        </button>
      </form>
    </div>
  );
};

export default Comment;
