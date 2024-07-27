"use client"

import { useState } from "react"
import SimpleEditor from "react-simple-code-editor"
import styles from "./Editor.module.css"

export const Editor = () => {
	const [code, setCode] = useState(`component-name
  component-name.module.css
  component-name.tsx
  index.ts`)

	return (
		<SimpleEditor
			className={styles.wrapper}
			value={code}
			onValueChange={setCode}
			highlight={(code) => code}
			padding={10}
		/>
	)
}
