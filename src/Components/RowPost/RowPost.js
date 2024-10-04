import React, { useContext, useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import axios from "../axios";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import {YoutubeContexs} from '../../YoutubeContexs'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlid] = useState("");
  const navigate = useNavigate()
  const {setYouTubeVideo} = useContext(YoutubeContexs)
  useEffect(() => {
    axios.get(props.url).then((Response) => {
      console.log(Response.data);
      setMovies(Response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieTrailer = (id) => {
    axios
      .get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`)
      .then((Response) => {
        const officialTrailer = Response.data.results.find(
          (video) =>
            video.type === "Trailer" &&
            video.name.toLowerCase().includes("official")
        );
        if (officialTrailer) {
          // setUrlid(officialTrailer);
          setYouTubeVideo(officialTrailer)
          navigate('/Screen')
        } else {
          alert("Official trailer is unavailable");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovieTrailer(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.poster_path}`}
          
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
