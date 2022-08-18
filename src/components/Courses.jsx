import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

function Courses() {
  const [data, setData] = useState([]);
  const YOUTUBE_PLAYLIST_ITEMS_API =
    'https://www.googleapis.com/youtube/v3/playlistItems';

  useEffect(() => {
    fetchApi();
  }, []);
  // GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=UUpRmvjdu3ixew5ahydZ67uA&key={YOUR_API_KEY}

  async function fetchApi() {
    const response = await fetch(
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=UUpRmvjdu3ixew5ahydZ67uA&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const apiData = await response.json();
    setData(apiData.items);
    console.log(data);
  }

  return (
    <div className="container">
      {data.map((dataItem) => {
        console.log('item', dataItem);
        return (
          <div className="">
            <div className="">{dataItem.snippet.title}</div>
            <div className="">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${dataItem.snippet.resourceId.videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
