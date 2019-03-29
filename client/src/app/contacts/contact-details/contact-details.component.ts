import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  title :String;
  contact : Contact;
  
  constructor(
    private contactListService: ContactListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.contact = new Contact();

    //This make sure that it fills all the data into data fields on page load

    if(this.title === 'Update Contact'){
      this.activatedRoute.params.subscribe(params => {
        this.contact._id = params.id;
        console.log(params.id);
      });
      this.getContact(this.contact);
    }
    
  }
  
  private getContact(contact:Contact):void{
    this.contactListService.getContact(contact).subscribe(data=>{
      this.contact = data.contact;
    })
  }

  public onContactDetailsSubmit():void{
    switch(this.title){
      case 'Add Contact':{
        this.contactListService.addContact(this.contact).subscribe(data => {
          if(data.success){
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          }
          else{
            this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          }
        });
      }
      break;
      case 'Update Contact':{
        this.contactListService.editContact(this.contact).subscribe(data => {
          if(data.success){
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          }
          else{
            this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
            this.router.navigate(['/contact/contact-list']);
          }
        });
      }
      break;
    }
  }

}
