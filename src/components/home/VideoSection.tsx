import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=your-hotel-video-id"
            width="100%"
            height="100%"
            controls
            playing={false}
            light={true}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}