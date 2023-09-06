import { Avatar } from "@mui/material";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="header">
          <Avatar src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868" />
          <div className="details">
            <div>Ahead app redesign concept</div>
            <div>Taras Migulko • Follow</div>
          </div>
          <div className="hireme">
            <a href="/hireme" title="Send a message about a work opportunity">
              Hire me
            </a>
          </div>
        </div>
        <HoverVideoPlayer videoSrc="https://cdn.dribbble.com/userupload/3938332/file/original-984e9c8aa7bb40df5be856ec56201be1.mp4" />
      </div>
    </div>
  );
}
