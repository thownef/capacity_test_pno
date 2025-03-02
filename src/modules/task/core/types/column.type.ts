export type Task = {
  id: string
  title: string
  description: string
  priority: string
  type: string
}

export type DragItem = {
  id: string
  index: number
  columnId: string
  type: string
}

export type ColumnData = {
  [key: string]: Task[]
}

export type TitleMenu = {
  [key: string]: string
}
