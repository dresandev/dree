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

	const handleOnValueChange = (value: string) => {
		setSource(value)
	}

	return (
		<SimpleEditor
			aria-label="Escructura tu sistema de archivos"
			className={clsx(styles.wrapper, className)}
			value={source}
			onValueChange={handleOnValueChange}
			highlight={(code) => code}
			padding="var(--playground-padding)"
		/>
	)
}
