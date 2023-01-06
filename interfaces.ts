export interface Player {
  id: number
  name: string
  rank?: number
  yes?: boolean
}

export interface Config {
  leagueName?: string
  teamCount: number
}

export interface Data {
  config: Config
  players: Player[]
  snapshot: any
}

export interface League {
  createdAt: Date
  hash: string
  data: any
}