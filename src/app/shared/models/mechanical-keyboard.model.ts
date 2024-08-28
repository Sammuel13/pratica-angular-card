export class MechanicalKeyboard {
    constructor(
        public id: number,
        public model: string,
        public brand: string,
        public switchType: string,
        public keycapMaterial: string,
        public connectionType: string[], //USB, BT, 2.4
        public isErgonomic: boolean,
        public hasRGB: boolean,
        public currentPrice: number,
        public releaseDate: Date,
    ) {}
}
