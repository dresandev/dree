export interface LineStringSet {
	CHILD: string
	LAST_CHILD: string
	DIRECTORY: string
	EMPTY: string
}

export const LINE_STRINGS: { [charset: string]: LineStringSet } = {
	"ascii": {
		CHILD: "|-- ",
		LAST_CHILD: "`-- ",
		DIRECTORY: "|   ",
		EMPTY: "    ",
	},
	"utf-8": {
		CHILD: "├── ",
		LAST_CHILD: "└── ",
		DIRECTORY: "│   ",
		EMPTY: "    ",
	},
}

export const QUERY_KEY = "s"
