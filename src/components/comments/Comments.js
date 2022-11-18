import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();
  const { quoteid } = param;
  const { sendRequest, status, data: loadedComment } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteid);
  }, [quoteid, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteid);
  }, [sendRequest, quoteid]);

  let comment;
  if (status === "pending") {
    comment = <LoadingSpinner />;
  }
  if (status === "completed" && loadedComment) {
    comment = <CommentsList comments={loadedComment} />;
  }
  if (
    status === "completed" &&
    (!loadedComment || loadedComment.length === 0)
  ) {
    comment = <p className="centered">no comments added yet</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={param.quoteid}
          onAddComment={addCommentHandler}
        />
      )}
      {comment}
    </section>
  );
};

export default Comments;
