export class User {
    constructor(
        public name: string,
        public followers: number,
        public following: number,
        public Bio: string,
        public created: string,
        public url:string,
        public repos:number

    ) {}
}
