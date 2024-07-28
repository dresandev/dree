import type { FileStructure } from "~/types"
import { LINE_STRINGS } from "~/constants"

/**
 * Represents all rendering options available
 * when calling `generateTree`
 */
interface GenerateTreeOptions {
	charset?: "ascii" | "utf-8"
	trailingDirSlash?: boolean
	fullPath?: boolean
	rootDot?: boolean
}

const defaultOptions: GenerateTreeOptions = {
	charset: "utf-8",
	trailingDirSlash: false,
	fullPath: false,
	rootDot: true,
}

/**
 * Generates an ASCII tree diagram, given a FileStructure
 * @param structure The FileStructure object to convert into ASCII
 * @param options The rendering options
 */
export const generateTree = (structure: FileStructure, options?: GenerateTreeOptions): string => {
	const opts = { ...defaultOptions, ...options }

	const result = flatten([
		getAsciiLine(structure, opts),
		structure.children.map((c) => generateTree(c, opts)),
	])
		.filter((line) => line != null)
		.join("\n")

	return result
}

/**
 * Returns a line of ASCII that represents
 * a single FileStructure object
 * @param structure The file to render
 * @param options The rendering options
 */
const getAsciiLine = (structure: FileStructure, options: GenerateTreeOptions): string | null => {
	const lines = LINE_STRINGS[options.charset as string]

	if (!structure.parent) {
		return options.rootDot ? structure.name : null
	}

	const chunks = [
		isLastChild(structure) ? lines.LAST_CHILD : lines.CHILD,
		getName(structure, options),
	]

	let current = structure.parent
	while (current && current.parent) {
		chunks.unshift(isLastChild(current) ? lines.EMPTY : lines.DIRECTORY)
		current = current.parent
	}

	return chunks.join("").substring(options.rootDot ? 0 : lines.CHILD.length)
}

/**
 * Returns the name of a file or folder according to the
 * rules specified by the rendering rules
 * @param structure The file or folder to get the name of
 * @param options The rendering options
 */
const getName = (structure: FileStructure, options: GenerateTreeOptions): string => {
	const nameChunks = [structure.name]

	if (options.trailingDirSlash && structure.children.length > 0 && !/\/\s*$/.test(structure.name)) {
		nameChunks.push("/")
	}

	if (options.fullPath && structure.parent) {
		nameChunks.unshift(getName(structure.parent, { ...options, trailingDirSlash: true }))
	}

	return nameChunks.join("")
}

/**
 * A utility function do determine if a file or folder
 * is the last child of its parent
 * @param structure The file or folder to test
 */
const isLastChild = (structure: FileStructure): boolean =>
	Boolean(structure.parent && structure.parent.children.slice(-1)[0] === structure)

/**
 * Flattens an array recursively
 * @param array The array to flatten
 */
const flatten = (array: any[]): any[] =>
	array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])
