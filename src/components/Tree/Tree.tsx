"use client"

import clsx from "clsx"
import { useTreeStore } from "~/store/use-tree-store"
import { generateTree } from "~/helpers/generate-tree"
import { parseInput } from "~/helpers/parse-input"
import { CopyButton } from "~/components/CopyButton"
import styles from "./Tree.module.css"

interface Props {
	className?: string
}

export const Tree: React.FC<Props> = ({ className }) => {
	const source = useTreeStore((state) => state.source)
	const { fancy, ...preferences } = useTreeStore((state) => state.preferences)

	const tree = generateTree(parseInput(source), {
		charset: fancy ? "utf-8" : "ascii",
		...preferences,
	})

	return (
		<div className={clsx(styles.wrapper, className)}>
			<CopyButton className={styles.copyButton} text={tree} />
			<pre>{tree}</pre>
		</div>
	)
}
