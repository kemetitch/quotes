import React, { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
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
  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return <NoQuotesFound />;
  }
  return (
    <div>
      <QuoteList quotes={loadedQuote} />
    </div>
  );
};
export default AllQuotes;
