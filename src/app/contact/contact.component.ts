import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;
  @ViewChild('loadingContainer') loadingContainer: ElementRef;

  changeImage: boolean;

  constructor() {
    this.changeImage = false;
  }


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.disableFields(nameField, mailField, messageField, sendButton);
    this.loadingAnimation();
    this.sendPost(nameField, mailField, messageField);
    this.hideLoadingAnimation();
    this.enableFields(nameField, mailField, messageField, sendButton);
    this.clearAllFields(nameField, mailField, messageField);
  }


  disableFields(nameField, mailField, messageField, sendButton) {
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disbaled = true;
  }


  enableFields(nameField, mailField, messageField, sendButton) {
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disbaled = false;
  }


  clearAllFields(nameField, mailField, messageField) {
    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
  }


  loadingAnimation() {
    this.loadingContainer.nativeElement.style.display = 'block';
  }


  hideLoadingAnimation() {
    this.loadingContainer.nativeElement.style.display = 'none';
  }


  async sendPost(nameField, mailField, messageField) {


     let fd = new FormData();
     fd.append('name', nameField.value);
     fd.append('mail', mailField.value);
     fd.append('message', messageField.value);
     await fetch('https://felix-roeder.developerakademie.net/send_mail/send_mail.php',
       {
         method: 'POST',
         body: fd
       });
  }
}
