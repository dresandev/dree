"use client"

import SimpleEditor from "react-simple-code-editor"
import { useTreeStore } from "~/store/use-tree"
import styles from "./Editor.module.css"

export const Editor = () => {
	const source = useTreeStore((state) => state.source)
	const setSource = useTreeStore((state) => state.setSource)

	return (
		<SimpleEditor
			className={styles.wrapper}
			value={source}
			onValueChange={setSource}
			highlight={(code) => code}
			padding={10}
		/>
	)
}
