import { Tema } from './tema'

export class Postagem{
    
    public id!: number
    public titutlo!: string
    public texto!: string
    public data!: Date 
    public tema!: Tema
}