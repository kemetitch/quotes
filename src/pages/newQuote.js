import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const navigate = useNavigate();
  useEffect(() => {
    if (status === "completed") {
      navigate("/allquotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};
export default NewQuote;
