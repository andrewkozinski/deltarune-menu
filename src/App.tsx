import './App.css'
import DeltaruneMenu from './components/DeltaruneMenu.tsx'
import bgMusicCh1 from './assets/soundeffects/mainmenu.mp3'
import bgMusicCh2 from './assets/soundeffects/Before the Story.mp3'
import bgVideo from './assets/images/fountainmenu.mp4'
import { useEffect, useRef, useState } from 'react'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [endMenu, setEndMenu] = useState(false);

  // Set the volume of the audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  // Add event listener for keydown to start audio
  useEffect(() => {
    const handleKeyDown = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={`main-body ${endMenu ? "ch2" : ""}`}>
        
        <video preload="auto" autoPlay muted loop id={`video-bg`} className={`${endMenu ? "" : "vanish"}`}>
          <source src={bgVideo} />
          Your browser does not support the video tag.
        </video>

        <audio id="music" ref={audioRef} src={ endMenu ? bgMusicCh2 : bgMusicCh1} autoPlay loop />
        <DeltaruneMenu ch2menu={endMenu}/>

        <div className="slider-container">
          <label className="switch">
            <input type="checkbox" checked={endMenu} onChange={() => setEndMenu(!endMenu)} />
            <span className="slider round"></span>
          </label>
        </div>

      </div>
    </>
  )
}

export default App
