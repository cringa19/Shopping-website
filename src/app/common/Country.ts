export class Country {
    constructor (
        private id?: number,
        private name?: string,
        private isSubscribed?: boolean) {this.isSubscribed=false;}
 
        getId() { return this.id; }
        getName() { return this.name; }
        getIsSubscribed() { return this.isSubscribed;}
   
        setIsSubscribed(val:boolean) { this.isSubscribed = val;}
}
 

