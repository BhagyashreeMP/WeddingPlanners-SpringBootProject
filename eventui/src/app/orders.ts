export class Orders {
    eventCode: number;
    orderCode : number;
    custName : string;
    location : string;
    date : string;

    constructor(){
        this.eventCode = 0;
        this.orderCode = 0;
        this.custName = '';
        this.location = '';
        this.date ='';
    }

}
