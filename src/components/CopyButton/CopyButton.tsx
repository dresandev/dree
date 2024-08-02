"use client"

import clsx from "clsx"
import { useCopyToClipBoard } from "~/hooks/use-copy-to-clipboard"
import { Button } from "~/components/Ui/Button"
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
	const { isCopied, copyToClipboard } = useCopyToClipBoard(text, RESET_FEEDBACK_TIME)

	const handleOnClick = async () => {
		await copyToClipboard()
	}

	return (
		<Button
			variant="outlined"
			className={clsx(styles.button, className)}
			aria-label="Copy directories/files tree"
			onClick={handleOnClick}
		>
			<CopyIcon
				width={ICON_SIZE}
				height={ICON_SIZE}
				className={clsx(styles.icon, { [styles.show]: !isCopied })}
			/>
			<CheckIcon
				width={ICON_SIZE}
				height={ICON_SIZE}
				className={clsx(styles.icon, { [styles.show]: isCopied })}
			/>
		</Button>
	)
}
