import { useEffect, useState, useRef } from "react";
const key = "16f27ccf";
const key2 = "a5dcbc1b";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isloading, setloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();
      async function fetchmovies() {
        try {
          setloading(true);
          setErrorMessage("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching the movies");
          const data = await res.json();

          if (data.Response === "False") throw new Error("movie not found");
          setMovies(data.Search);
          console.log(data.Search);
          setErrorMessage("");

          setloading(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            setErrorMessage(err.message);
            console.log(err.message);
          }
        } finally {
          setloading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setErrorMessage("");
        return;
      }
      //   handlecloseMovie();
      fetchmovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isloading, errorMessage };
}
