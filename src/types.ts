export interface FileStructure {
	name: string
	children: FileStructure[]
	indentCount: number
	parent: FileStructure | null
}
