import { create } from "zustand"

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

export const useTreeStore = create<TreeState>()((set) => ({
	...INIT_STATE,
	setSource: (source) => set((state) => ({ source })),
	setPreferences: (preferences) =>
		set((state) => ({
			preferences: {
				...state.preferences,
				...preferences,
			},
		})),
}))
