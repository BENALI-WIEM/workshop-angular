import { Residence } from "./Residence";

export class Appartement {
    id!: number;
    numAppart!: number;
    numEtage!: number;
    surface!: number;
    terrasse!: string;
    surfaceTerrasse!: number;
    category!: string;
    description!: string;
    status!: boolean;
    residence!: Residence;
}