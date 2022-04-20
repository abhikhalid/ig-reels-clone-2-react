import { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';

import db from './firebase';

function App() {

  const [reels, setReels] = useState([]);


  useEffect(() => {

    //App component will run ONCE when it loads,and never again

    db.collection('reels').onSnapshot(snapshot => {

      setReels(snapshot.docs.map(doc => doc.data()));
    });



  }, [])




  return (
    //BEM naming convention
    <div className="app">

      <div className="app__top">

        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/180px-Instagram_icon.png"
          alt="" />

        <h1>Reels</h1>


      </div>

      <div className="app__videos">
        {/* Container of app__videos (scrollable container) */}

        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url} playsinline="" autoplay="" class="tiktok-1sm3sg-VideoBasic e1yey0rl4"
            likes={likes}
            shares={shares}
          />


        ))
        }

      </div>



    </div>
  );
}

export default App;
