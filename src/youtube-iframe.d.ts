// TypeScript declarations for YouTube IFrame API
declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: {
        videoId: string;
        playerVars?: {
          autoplay?: number;
          controls?: number;
          rel?: number;
          modestbranding?: number;
        };
        events?: {
          onReady?: (event: any) => void;
        };
      }) => {
        seekTo: (seconds: number, allowSeekAhead: boolean) => void;
        playVideo: () => void;
        pauseVideo: () => void;
        destroy: () => void;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export {};

