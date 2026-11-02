"use client";

import { useState } from "react";
import Image from "next/image";
import { videos } from "../data/videos";
import Arrow from "./arrow";

export default function VideoGallery() {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = videos[selected];

  return (
    <div className="video-gallery">
      <div className="featured-video">
        <div className="video-stage">
          {playing ? (
            <iframe
              key={video.id}
              title={`${video.title} — ${video.performer}`}
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              className="video-poster"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${video.title} by ${video.performer}`}
            >
              <Image
                src={video.image}
                alt=""
                fill
                sizes="(max-width: 760px) 90vw, 60vw"
              />
              <span className="poster-shade" />
              <span className="play-button" aria-hidden="true">
                ▶
              </span>
              <span className="poster-label">WATCH MINISTRATION</span>
              <span className="video-duration">{video.duration}</span>
            </button>
          )}
        </div>
        <div className="video-caption">
          <div>
            <h3>{video.title}</h3>
            <p>
              {video.performer} <span aria-hidden="true">·</span> {video.date}
            </p>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-external"
            aria-label={`Watch ${video.title} on YouTube`}
          >
            YouTube <Arrow />
          </a>
        </div>
      </div>
      <div className="video-selection">
        <p className="eyebrow">SELECTED MINISTRATIONS</p>
        <div className="video-list">
          {videos.map((item, index) => (
            <button
              key={item.id}
              className={`video-item${selected === index ? " is-selected" : ""}`}
              aria-pressed={selected === index}
              onClick={() => {
                setSelected(index);
                setPlaying(false);
              }}
            >
              <span className="video-thumb">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 28vw, (max-width: 760px) 30vw, 104px"
                />
                <span aria-hidden="true">▶</span>
              </span>
              <span className="video-item-copy">
                <strong>{item.title}</strong>
                <span>{item.date}</span>
                <small>{item.duration}</small>
              </span>
              <span className="selection-indicator" aria-hidden="true">
                {selected === index ? "●" : <Arrow />}
              </span>
            </button>
          ))}
        </div>
        <p className="selection-note">
          A moment to pause.
          <br />A reason to praise.
        </p>
      </div>
    </div>
  );
}
