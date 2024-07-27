import { Toggle } from "~/components/Ui/Toggle"
import styles from "./Preferences.module.css"

export const Preferences = () => {
	return (
		<div className={styles.wrapper}>
			<Toggle>Fancy</Toggle>
			<Toggle>Trailing /</Toggle>
			<Toggle>Root .</Toggle>
		</div>
	)
}
