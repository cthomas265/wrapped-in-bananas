import React from "react";

const Comment = ({ comments }) => {
  return (
    <div>
      <div>
        <span>Comments</span>
      </div>
      <div>
        {comments &&
          comments.map((comment) => (
            <p key={comment._id}>
              {comment.commentBody}
              <p>
                {comment.username} on {comment.createdAt}
              </p>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Comment;
