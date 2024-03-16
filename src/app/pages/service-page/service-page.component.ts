import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent   {
  serviceForm: FormGroup;
  videoId:string | null = '';
  displayLoading:boolean = false;
  textsLoading: string[] = ['Espere um momento 😀', 'Assistindo a Aula 🧐', 'Aprendendo o Assunto 🫡', 'Criando o Resumo 😎', 'Enviando pra Você ✅']
  textDisplayIndex: number = 0;
  textDisplay: string = this.textsLoading[this.textDisplayIndex]

  constructor(private fb: FormBuilder) { 
    this.serviceForm = this.fb.group({
      linkUrl: ['', [Validators.required]]
    });
  }


 
  selectedItemIndex: number | null = null;

  onItemClick(index: number): void {
    this.selectedItemIndex = index;
  }

  inviteData() {
    console.log(this.selectedItemIndex)
    console.log(this.serviceForm.value.linkUrl);
    let linkUrl = this.serviceForm.value.linkUrl;
    this.videoId =  this.extrairIdDoVideo(linkUrl)
    console.log(this.videoId)
    this.displayLoading = true;

    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight, 
        behavior: 'smooth' 
      });
    }, 500)

    this.changeTextLoading()
    
  }

  extrairIdDoVideo(linkUrl: string): string | null {
    if (linkUrl.includes('https://www.youtube.com/watch?v=')) {
        const startIndex = linkUrl.indexOf('v=') + 2; 
        const endIndex = linkUrl.indexOf('&', startIndex); 

        const idEndIndex = endIndex !== -1 ? endIndex : linkUrl.length;

        const videoId = linkUrl.substring(startIndex, idEndIndex);
        return videoId;
    } else if (linkUrl.includes('https://youtu.be/')) {
        const startIndex = linkUrl.indexOf('.be/') + 4; 
        const endIndex = linkUrl.indexOf('?', startIndex); 

        const idEndIndex = endIndex !== -1 ? endIndex : linkUrl.length;

        const videoId = linkUrl.substring(startIndex, idEndIndex);
        return videoId;
    }
    
    else {
        return null; 
    }
  }

  changeTextLoading():void {
    setInterval(() => {
      this.textDisplayIndex = (this.textDisplayIndex + 1) % this.textsLoading.length;
      this.textDisplay = this.textsLoading[this.textDisplayIndex];
    }, 5000);
  }

  
}
