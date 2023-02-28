export class MUSIC {
    constructor (private id?: number,
        private record_price?: number,
        private record_name?: string,
        private record_description?: string,
        private record_vinyl?: string,
        private record_total?: number,
        private isSubscribed?: boolean) {this.isSubscribed=false;}
   
    getId() { return this.id; }
    getRecordPrice() { return this.record_price;}
    getRecordName() { return this.record_name;}
    getRecordDescription() { return this.record_description;}
    getRecordVinyl() { return this.record_vinyl;}
    getRecordTotal() { return this.record_total;}
    getIsSubscribed() { return this.isSubscribed;}
   
    setIsSubscribed(val:boolean) { this.isSubscribed = val;}
}
 

