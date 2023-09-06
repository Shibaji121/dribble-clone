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
        <div class="content-block">
          <p>Hey all, </p>
          <p></p>
          <p>
            I've decided to make a redesign and animation for the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.ahead-app.com/"
            >
              Ahead
            </a>{" "}
            app. Please review and happy to read your feedback!
          </p>
          <p></p>
          <p>Design — Figma</p>
          <p style={{ textAlign: "start" }}>
            Illustrations — Adobe Illustrator
          </p>
          <p style={{ textAlign: "start" }}>Animation — Adobe After Effects</p>
          <p style={{ textAlign: "start" }}></p>
          <p style={{ textAlign: "start" }}>************&nbsp;</p>
          <p style={{ textAlign: "start" }}>
            💌 I am open to new projects!&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="mailto:hey@migulko.cz"
            >
              hey@migulko.cz
            </a>
            &nbsp;
          </p>
          <p style={{ textAlign: "start" }}>************</p>
          <p style={{ textAlign: "start" }}>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.instagram.com/ui_migulko/"
            >
              Instagram
            </a>
            &nbsp;|&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.linkedin.com/in/taras-migulko-818654152/"
            >
              Linkedin
            </a>
            &nbsp;|&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://ui8.net/users/ui_migulko"
            >
              UI8
            </a>
          </p>
          <p></p>
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/userupload/3938331/file/original-6350195b7dd8a06f9dbce8a8aeee3e72.jpg?resize=1200x7271&vertical=center"
            alt=""
          />
        </div>
        <div class="user-details-section">
          <div className="avatar-details">
            <span className="avatar-line"></span>
            <Avatar
              src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"
              sx={{ width: 56, height: 56 }}
            />
            <span className="avatar-line"></span>
          </div>

          <a class="user-name" rel="contact" href="/ui_migulko">
            Taras Migulko
          </a>

          <div class="user-bio">Email me hey@migulko. cz</div>

          <div class="profile-message">
            <a
              class="contact message-btn form-sub text-align-center w-100 "
              rel="tipsy"
              data-message-recipient="1998175"
              data-button-location="profile"
              href="/messages/new?recipient_id=ui_migulko"
              original-title="Send a message about a work opportunity"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
