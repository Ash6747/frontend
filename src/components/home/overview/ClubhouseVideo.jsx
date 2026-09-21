import { useEffect, useRef, useState } from "react";

const ClubhouseVideo = ({
  videoId = "iGMXnUF83Ww",
  poster = "https://i.ytimg.com/vi/iGMXnUF83Ww/maxresdefault.jpg",
  title = "A clubhouse like Never Before",
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const initPlayer = () => {
      if (!isMounted || !containerRef.current || !window.YT || !window.YT.Player) return;

      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
          controls: 0,
          rel: 0,
          disablekb: 1,
          modestbranding: 1,
          iv_load_policy: 3,
          fs: 0,
          autohide: 1,
          showinfo: 0,
        },
        events: {
          onReady: (event) => {
            if (!isMounted) return;
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (!isMounted) return;
            // 1 = YT.PlayerState.PLAYING
            if (event.data === 1) {
              setIsLoaded(true);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      if (!window._ytApiCallbacks) {
        window._ytApiCallbacks = [];
        const prevReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (typeof prevReady === "function") prevReady();
          if (window._ytApiCallbacks) {
            window._ytApiCallbacks.forEach((cb) => cb());
            window._ytApiCallbacks = [];
          }
        };
      }

      window._ytApiCallbacks.push(initPlayer);

      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
          document.head.appendChild(tag);
        }
      }
    }

    return () => {
      isMounted = false;
      if (window._ytApiCallbacks) {
        window._ytApiCallbacks = window._ytApiCallbacks.filter((cb) => cb !== initPlayer);
      }
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore cleanup error
        }
      }
    };
  }, [videoId]);

  return (
    <div
      className={`clubhouse-video-wrapper ${className}`}
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <img
        src={poster}
        alt={title}
        className="clubhouse-preview-img"
        style={{
          opacity: isLoaded ? 0 : 1,
          pointerEvents: "none",
        }}
        loading="eager"
      />
      <div ref={containerRef} className="clubhouse-yt-player" />
    </div>
  );
};

export default ClubhouseVideo;

