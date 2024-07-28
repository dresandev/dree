"use client"

import { useTreeStore } from "~/store/use-tree"
import { generateTree } from "~/helpers/generate-tree"
import { parseInput } from "~/helpers/parse-input"
import styles from "./Tree.module.css"

export const Tree = () => {
	const source = useTreeStore((state) => state.source)
	const { fancy, ...preferences } = useTreeStore((state) => state.preferences)

	const tree = generateTree(parseInput(source), {
		charset: fancy ? "utf-8" : "ascii",
		...preferences,
	})

	return <pre className={styles.wrapper}>{tree}</pre>
}
