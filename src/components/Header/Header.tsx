import { DreeLogo } from "~/components/Svg/DreeLogo"
import { Preferences } from "~/components/Preferences"
import { ShareUrlButton } from "~/components/ShareUrlButton"
import styles from "./Header.module.css"

export const Header = () => {
	return (
		<header className={styles.header}>
			<DreeLogo className={styles.dreeLogo} />
			<Preferences />
			<ShareUrlButton />
		</header>
	)
}
