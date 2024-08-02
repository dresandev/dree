import { forwardRef } from "react"
import { clsx } from "clsx"
import { Slot } from "~/components/Ui/Slot"
import styles from "./Button.module.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
	variant?: "primary" | "outlined"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { className, variant = "primary", asChild, ...delegated } = props
	const Component = asChild ? Slot : "button"

	return (
		<Component
			ref={ref}
			className={clsx(styles.button, styles[variant], className)}
			{...delegated}
		/>
	)
})

Button.displayName = "Button"
