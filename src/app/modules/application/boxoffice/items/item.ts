export class Item {
  VotingboxID:string
  CompanyID: string;
  CompanyName: string;
  SecurityName:string;
  SecurityNumber:string;
  MeetingEffectiveDate:string;
  MeetingCloseDateTime:string;
  Status:number;
  MeetingAddress:string;




  constructor() {
    this.CompanyID='';
  this.CompanyName='';
  this.SecurityName='';;
  this.SecurityNumber='';
  this.MeetingEffectiveDate='';
  this.MeetingCloseDateTime='';
  this.Status=1;
  this.VotingboxID='';
  this.MeetingAddress='';
  }
}
