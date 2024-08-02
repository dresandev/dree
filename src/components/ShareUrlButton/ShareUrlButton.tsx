"use client"

import { useEffect, useState } from "react"
import { buildShareableUrl, useTreeStore } from "~/store/use-tree-store"
import { useCopyToClipBoard } from "~/hooks/use-copy-to-clipboard"
import { Button } from "~/components/Ui/Button"
import styles from "./ShareUrlButton.module.css"

const RESET_FEEDBACK_TIME = 2500

export const ShareUrlButton = () => {
	const [url, setUrl] = useState("")
	const source = useTreeStore((state) => state.source)
	const preferences = useTreeStore((state) => state.preferences)
	const { isCopied, copyToClipboard } = useCopyToClipBoard(url, RESET_FEEDBACK_TIME)

	useEffect(() => {
		const url = buildShareableUrl({ source, preferences })
		setUrl(url)
	}, [preferences, source])

	const handleOnClick = async () => {
		await copyToClipboard()
	}

	return (
		<Button className={styles.button} type="button" onClick={handleOnClick}>
			{isCopied ? "URL copied!" : "Share"}
		</Button>
	)
}
