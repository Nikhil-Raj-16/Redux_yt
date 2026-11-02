import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGifs } from "../src/api/mediaApi";
import {setError,setResults,setLoading,} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

  useEffect(
    function () {
      const getData = async () => {
        try {
          if (!query || query.trim() === "") {
            return; // Don't fetch if search input is empty
          }
          dispatch(setLoading());

          let data = [];

          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            // console.log(response.results);
            data = response.results.map((item) => ({
              // mapped items so that we get less property this is called normalization
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.hits.map((item) => ({
              id: item.id,
              type: "videos",
              title: item.name,
              thumbnail: item.videos.small.thumbnail,
              src: item.videos.tiny.url
            }));
          }
          if (activeTab == "GIFs") {
            let response = await fetchGifs(query);
            data = response.data.map((item) => ({
              id: item.id,
              type: "GIFs",
              title: "GIF",
              thumbnail: item.images.preview_gif.url,
              src: item.images?.original?.url || item.images?.fixed_height?.url,
            }));
          }

          // console.log(data);
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query,activeTab],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap justify-center w-full gap-6 overflow-auto px-10 py-5">
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item}/>
        </div>
      })}
    </div>
  );
};

export default ResultGrid;
