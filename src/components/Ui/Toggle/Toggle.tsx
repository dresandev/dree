"use client"

import { forwardRef } from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import clsx from "clsx"
import styles from "./Toggle.module.css"

export const Toggle = forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
	<TogglePrimitive.Root ref={ref} className={clsx(styles.toggle, className)} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName
