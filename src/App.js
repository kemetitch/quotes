import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
const NewQuote = React.lazy(() => import("./pages/newQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/allquotes"></Navigate>}
          ></Route>
          <Route path="/allquotes" element={<AllQuotes />}></Route>
          <Route path="/newquote" element={<NewQuote />}></Route>
          <Route
            path="/allquotes/:quoteid/*"
            element={<QuoteDetails />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
