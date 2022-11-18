import React, { useEffect } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import { Route, useParams, Routes, Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const param = useParams();
  const { quoteid } = param;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteid);
  }, [sendRequest, quoteid]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!loadedQuote.text) {
    <p>no Quote found</p>;
  }
  return (
    <div>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <div className="centered">
        <Link className="btn--flat" to={`/allquotes/${param.quoteid}/comment`}>
          Add Comment
        </Link>
      </div>
      <Routes>
        <Route path="/comment" element={<Comments />}></Route>
      </Routes>
    </div>
  );
};
export default QuoteDetails;
