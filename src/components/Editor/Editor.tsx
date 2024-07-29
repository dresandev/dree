"use client"

import clsx from "clsx"
import SimpleEditor from "react-simple-code-editor"
import { useTreeStore } from "~/store/use-tree-store"
import styles from "./Editor.module.css"

interface Props {
	className?: string
}

export const Editor: React.FC<Props> = ({ className }) => {
	const source = useTreeStore((state) => state.source)
	const setSource = useTreeStore((state) => state.setSource)

	return (
		<SimpleEditor
			className={clsx(styles.wrapper, className)}
			value={source}
			onValueChange={setSource}
			highlight={(code) => code}
			padding={10}
		/>
	)
}
