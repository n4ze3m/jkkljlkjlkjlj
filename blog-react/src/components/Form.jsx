import React, { useState } from "react";
import axios from "axios";
function Form() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/posts", {
      title,
    });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post something broski"
          type="name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
