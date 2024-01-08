import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App-v1.jsx";
import "./index.css";
// import StarRating from "./star";
// import star from "./star";

// function Test() {
//   const [movieRatings, setMovieRatings] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={5}
//         onSetMovieRating={setMovieRatings}
//       />
//       <p>
//         This movie was rated <b>{movieRatings}</b> stars
//       </p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
);
