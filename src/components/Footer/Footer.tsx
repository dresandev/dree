import styles from "./Footer.module.css"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				Developed by{" "}
				<a className={styles.link} href="https://dresan.dev" target="_blank" rel="noopener">
					Dresan
				</a>{" "}
				based on{" "}
				<a
					className={styles.link}
					href="https://tree.nathanfriend.io/"
					target="_blank"
					rel="noopener"
				>
					tree.nathanfriend.io
				</a>
				.
			</p>
		</footer>
	)
}
