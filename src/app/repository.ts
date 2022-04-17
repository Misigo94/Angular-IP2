export class Repository {
    public display:boolean
    constructor(
        public description: string,
        public name: string,
        public forks: number,
        public watching: number,
        public languages: string,
        public url: string,
        public stars:number
    ) {
        this.display = true;
}

}
