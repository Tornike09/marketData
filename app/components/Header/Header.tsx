import styles from './Header.module.css'
import { navBar } from '@/app/datas/navBar'
export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blackCont}>
                <div className={styles.blackContContent}>
                    <div>
                        <p>WSJ</p>
                        <p>Barron's</p>
                        <p>MarketWatch</p>
                        <p>IBD</p>
                    </div>
                    <p>Buy Side from WSJ</p>
                </div>
            </div>
            <div className={styles.headerNavCont}>
                <h1 className={styles.wsj}>WSJ</h1>
                <h1>MARKETS</h1>
            </div>
            <div className={styles.navBar}>
                <div>
                    {
                        navBar.map((navBarItem) => <p key={navBarItem.id}>
                            {navBarItem.title}
                        </p>)
                    }
                </div>
            </div>
        </div>
    )
}