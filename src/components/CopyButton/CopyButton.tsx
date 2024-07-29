"use client"

import { useState } from "react"
import clsx from "clsx"
import { copyToClipboard } from "~/utils"
import { useTimeout } from "~/hooks/use-timeout"
import { CopyIcon } from "~/components/Svg/CopyIcon"
import { CheckIcon } from "~/components/Svg/CheckIcon"
import styles from "./CopyButton.module.css"

interface Props {
	className?: string
	text: string
}

const RESET_FEEDBACK_TIME = 2000
const ICON_SIZE = 20

export const CopyButton: React.FC<Props> = ({ className, text }) => {
	const [displayFeedback, setDisplayFeedback] = useState(false)

	const hideFeedback = () => setDisplayFeedback(false)

	useTimeout(hideFeedback, RESET_FEEDBACK_TIME)

	const handleOnClick = async () => {
		const isCopied = await copyToClipboard(text)
		setDisplayFeedback(isCopied)
	}

	return (
		<button
			className={clsx(styles.button, className)}
			aria-label="Copy directories/files tree"
			onClick={handleOnClick}
		>
			<CopyIcon
				width={ICON_SIZE}
				height={ICON_SIZE}
				className={clsx(styles.icon, { [styles.show]: !displayFeedback })}
			/>
			<CheckIcon
				width={ICON_SIZE}
				height={ICON_SIZE}
				className={clsx(styles.icon, { [styles.show]: displayFeedback })}
			/>
		</button>
	)
}
