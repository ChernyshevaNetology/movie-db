import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/MoviesSlice";
import { MovieCard } from "../components/MovieCard";
import { MoviePagination } from "../components/MoviePagination";
import { useLocation, useParams } from "react-router-dom";
import { MoviePageHeader } from "../components/MoviePageHeader";

// const POSTER_PATH = `http://image.tmdb.org/t/p/w440_and_h660_face/${POSTER_PATH}`;
const MainPage = () => {
  /**
   * 1 поправить верстку
   * 2 добавить шапку сверху Header - h1 новинки кино
   * 3 Добавить путь страницы в URL
   * 4 Сделать компонент классовым
   * 5 Выводить по 4 фильма, а не по три (в ряд)
   * */
  const location = useLocation();
  const params = useParams();
  console.log("---------------------------------");
  console.log("params from MainPage componets", params);
  console.log("---------------------------------");

  const pageNum = parseInt(location.pathname.slice(-1)) || 1;

  const [currentPage, setCurrentPage] = useState(pageNum);
  const dispatch = useDispatch();
  const API_KEY = "e9f559802c673e3e74a73543bc0c8382";
  const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
  const movies = useSelector(({ movies }) => movies.movies);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(
      fetchMovies({
        API,
        testVal: 3,
      })
    );
  }, [currentPage, API]);
  return (
    <>
      <MoviePageHeader currentPage={currentPage} />
      <div className={"movies-container"}>
        {movies &&
          movies.map(({ id, title, overview, poster_path }) => (
            <MovieCard
              key={id}
              id={id}
              title={title}
              description={overview}
              img={`http://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
            />
          ))}
      </div>
      <div className="pagination">
        <MoviePagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
};
export { MainPage };
