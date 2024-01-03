import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = { display: "flex", alignment: "center", gap: "16px" };
const starcontainerstyle = {
  display: "flex",
  //   gap: "4px",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  onSetMovieRating: PropTypes.func,
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetMovieRating,
}) {
  const [Rating, setRating] = useState(defaultRating);
  const [temprating, setatemprating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
    onSetMovieRating(rating);
  }
  const textstyle = {
    lineheight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`, //`${size / 1.5}px`
  };
  return (
    <div style={containerStyle} className={className}>
      <div style={starcontainerstyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={temprating ? temprating >= i + 1 : Rating >= i + 1}
            onHoverIn={() => setatemprating(i + 1)}
            onHOverOut={() => setatemprating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textstyle}>
        {messages.length === maxRating
          ? messages[temprating ? temprating - 1 : Rating - 1]
          : temprating || Rating || ""}
      </p>
    </div>
  );
}

function Star({ onRate, full, onHoverIn, onHOverOut, color, size }) {
  const starStyle = {
    width: `${size}px`, //`${size}px`
    height: `${size}px`, //"32px"
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      style={starStyle}
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHOverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        //EMPTY STAR
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

// FULL STAR

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 20 20"
//   fill="#000"
//   stroke="#000"
// >
//   <path
//     d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//   />
// </svg>

// EMPTY STAR

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="#000"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="{2}"
//     d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//   />
// </svg>

// */
