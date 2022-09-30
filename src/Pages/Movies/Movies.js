import React from "react";
import axios from "axios";
import { useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=5919f1c554e02d47d9ffbbffdc257d24&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
    );

    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };
  React.useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <span className="pageTitle">Discover Movies</span>

      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </>
  );
};
export default Movies;
