import { useState } from "react"
import { useTimeout } from "./use-timeout"

export const useCopyToClipBoard = (string: string, restoreTime: number = 0) => {
	const [isCopied, setIsCopied] = useState(false)
	useTimeout(() => setIsCopied(false), restoreTime)

	const copyToClipboard = async () => {
		if (!navigator?.clipboard) {
			console.warn("Clipboard not supported")
			return
		}

		try {
			await navigator.clipboard.writeText(string)
			setIsCopied(true)
		} catch (error) {
			console.warn("Copy failed", error)
			setIsCopied(false)
		}
	}

	return {
		isCopied,
		copyToClipboard,
	}
}
