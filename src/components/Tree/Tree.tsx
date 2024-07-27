import styles from "./Tree.module.css"

export const Tree = () => {
	const tree = `.
└── component-name/
    ├── component-name.module.css
    ├── component-name.tsx
    └── index.ts`

	return <pre className={styles.wrapper}>{tree}</pre>
}
