"use client"

import { useTreeStore } from "~/store/use-tree"
import { Toggle } from "~/components/Ui/Toggle"
import styles from "./Preferences.module.css"

const preferenceLabel: { [key: string]: string } = {
	fancy: "Fancy",
	trailingDirSlash: "Trailing /",
	rootDot: "Root .",
}

export const Preferences = () => {
	const preferences = useTreeStore((state) => state.preferences)
	const setPreferences = useTreeStore((state) => state.setPreferences)

	return (
		<div className={styles.wrapper}>
			{Object.entries(preferences).map(([key, value]) => (
				<Toggle key={key} pressed={value} onClick={() => setPreferences({ [key]: !value })}>
					{preferenceLabel[key as string]}
				</Toggle>
			))}
		</div>
	)
}
