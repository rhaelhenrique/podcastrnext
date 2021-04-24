import styles from './styles.module.scss';

import format from 'date-fns/format'; 
import ptBR from 'date-fns/locale/pt-BR';
// Foi adicionado ao projeto a biblioteca date-fns.
// Nas duas linhas acima, estamos impotando os componentes format e locale/pt-BR
// para deixar a nossa data sendo mostrada de forma automatica
// e personalisada para o Brasil

export default function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    }); //Instanciando o objeto currentDate para capturar a data real e mostrar no formato escolhido
        //A data vai ser chamada com {currentDate}

    return (
        <header className={styles.headerContainer}>
            <a href="/" className={styles.linkHome}>
                <img src="/logo.svg" alt="Podcastr" />
            </a>

            <p>Organizador de Podcasts</p>

            <span>{currentDate}</span>
        </header>

    );

}