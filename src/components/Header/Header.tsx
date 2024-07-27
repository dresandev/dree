import { DreeLogo } from "~/components/Svg/DreeLogo"
import { Preferences } from "~/components/Preferences"
import styles from "./Header.module.css"

export const Header = () => {
	return (
		<header className={styles.header}>
			<DreeLogo className={styles.dreeLogo} />
			<Preferences />
			<i className={styles.nothing}></i>
		</header>
	)
}
