export class Item {
  CompanyID: string;
  CompanyName: string;
  SecurityName:string;
  SecurityNumber:string;
  MeetingEffectiveDate:string;
  MeetingCloseDateTime:string;
  VotingItemSubject:string;
  Status:number;




  constructor() {
    this.CompanyID='';
  this.CompanyName='';
  this.SecurityName='';;
  this.SecurityNumber='';
  this.MeetingEffectiveDate='';
  this.MeetingCloseDateTime='';
  this.VotingItemSubject='';
  this.Status=1;
  }
}
