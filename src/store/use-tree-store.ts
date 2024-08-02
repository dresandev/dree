import { create } from "zustand"
import { persist, type StateStorage, createJSONStorage } from "zustand/middleware"

interface Preferences {
	fancy?: boolean
	trailingDirSlash?: boolean
	rootDot?: boolean
}

export type TreeState = {
	source: string
	preferences: Preferences
}

type TreeActions = {
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

const storageOptions = {
	name: "treeStore",
	storage: createJSONStorage<TreeState & TreeActions>(() => persistentStorage),
}

const getUrlSearch = () => {
	return window.location.search.slice(1)
}

const persistentStorage: StateStorage = {
	getItem: (key): string => {
		if (getUrlSearch()) {
			const searchParams = new URLSearchParams(getUrlSearch())
			const storedValue = searchParams.get(key)
			return JSON.parse(storedValue as string)
		} else {
			return JSON.parse(localStorage.getItem(key) as string)
		}
	},
	setItem: (key, newValue): void => {
		if (getUrlSearch()) {
			const searchParams = new URLSearchParams(getUrlSearch())
			searchParams.set(key, JSON.stringify(newValue))
			window.history.replaceState(null, "", `?${searchParams.toString()}`)
		}

		localStorage.setItem(key, JSON.stringify(newValue))
	},
	removeItem: (key): void => {
		const searchParams = new URLSearchParams(getUrlSearch())
		searchParams.delete(key)
		window.location.search = searchParams.toString()
	},
}

const buildURLSuffix = (params: TreeState, version = 0) => {
	const searchParams = new URLSearchParams()

	const zustandStoreParams = {
		state: params,
		version,
	}

	searchParams.set("treeStore", JSON.stringify(zustandStoreParams))
	return searchParams.toString()
}

export const buildShareableUrl = (params: TreeState, version?: number) => {
	return `${window.location.origin}?${buildURLSuffix(params, version)}`
}

export const useTreeStore = create<TreeState & TreeActions>()(
	persist(
		(set, get) => ({
			...INIT_STATE,
			setSource: (source) => set({ source }),
			setPreferences: (newPreferences) => {
				const { preferences } = get()

				set({
					preferences: {
						...preferences,
						...newPreferences,
					},
				})
			},
		}),
		{
			name: "treeStore",
			storage: createJSONStorage<TreeState & TreeActions>(() => persistentStorage),
		}
	)
)
