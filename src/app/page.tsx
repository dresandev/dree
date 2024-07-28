import { Editor } from "~/components/Editor"
import { Tree } from "~/components/Tree"
import styles from "./page.module.css"

export default function Home() {
	return (
		<main className={styles.main}>
			<Editor className={styles.playground} />
			<Tree className={styles.playground} />
		</main>
	)
}
