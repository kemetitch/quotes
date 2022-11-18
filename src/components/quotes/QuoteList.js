import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
const sortingQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else return quoteA.id < quoteB.id ? 1 : -1;
  });
};
const QuoteList = (props) => {
  const navigate = useNavigate();

  const location = useLocation();

  const queryparam = new URLSearchParams(location.search);

  const isSortingAscending = queryparam.get("sort") === "asc";
  const sortQuotes = sortingQuotes(props.quotes, isSortingAscending);
  const handleSorting = () => {
    navigate("/allquotes?sort=" + (isSortingAscending ? "desc" : "asc"));
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleSorting}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
