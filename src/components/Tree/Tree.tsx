"use client"

import { useTreeStore } from "~/store/use-tree"
import { generateTree } from "~/helpers/generate-tree"
import { parseInput } from "~/helpers/parse-input"

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

	return <pre className={className}>{tree}</pre>
}
