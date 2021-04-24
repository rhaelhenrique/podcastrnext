import Header from '../components/Header'

import '../styles/global.scss' //impotando arquivo CSS
import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import Player from '../components/Player';


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
          </main>
          <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
