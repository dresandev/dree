import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Preferences {
	fancy?: boolean
	trailingDirSlash?: boolean
	rootDot?: boolean
}

interface TreeState {
	source: string
	preferences: Preferences
	setSource: (text: string) => void
	setPreferences: (preferences: Preferences) => void
}

const INIT_STATE = {
	source: `component-name
  component-name.module.css
  component-name.tsx
  index.ts`,
	preferences: {
		fancy: true,
		trailingDirSlash: true,
		rootDot: true,
	},
}

export const useTreeStore = create<TreeState>()(
	persist(
		(set, get) => ({
			...INIT_STATE,
			setSource: (source) => set({ source }),
			setPreferences: (newPreferences) => {
				const { preferences } = get()

				return set({
					preferences: {
						...preferences,
						...newPreferences,
					},
				})
			},
		}),
		{ name: "source" }
	)
)
