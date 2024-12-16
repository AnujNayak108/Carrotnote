import React, { useState } from "react";

const Section2 = () => {
  // State for the main video URL
  const [mainVideo, setMainVideo] = useState("https://www.youtube.com/embed/dQw4w9WgXcQ");

  // Video data for thumbnails
  const videos = [
    {
      title: "It’s a no-brainer",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://via.placeholder.com/50", // Replace with actual thumbnail
    },
    {
      title: "Earn money with your study notes",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      thumbnailUrl: "https://via.placeholder.com/50", // Replace with actual thumbnail
    },
    {
      title: "How to upload a document",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      thumbnailUrl: "https://via.placeholder.com/50", // Replace with actual thumbnail
    },
  ];

  return (
    <div className="px-12 w-screen mt-20 mb-20">
    <div className="bg-white p-0 rounded-lg  mx-auto flex flex-row justify-between gap-8">
      {/* Main Video Section */}
      <div className="relative w-[65%]">
        <iframe
          className="w-full h-[25rem] "
          src={mainVideo}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-sm rounded-lg">
          Want to earn easy money as a student?
        </div>
      </div>

      {/* Side Thumbnails */}
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setMainVideo(video.videoUrl)}
            className="flex items-center gap-4 bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition"
          >
            <img
              src={video.thumbnailUrl}
              alt={`Thumbnail for ${video.title}`}
              className="rounded-full w-12 h-12"
            />
            <span className="text-blue-700 font-medium">{video.title}</span>
          </button>
        ))}
      </div>
    </div>
    <div className="flex justify-center items-center my-20">
    <div>
                <button className='bg-[#22c5b6] py-4 px-8 rounded-[30px] text-[1.2em] font-medium text-white'>Start Selling</button>
            </div>
    </div>
    </div>
  );
};

export default Section2;
