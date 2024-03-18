
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { ClientService } from 'src/app/services/client.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss', './service-page-responsive.scss', './service-page-form.scss']
})
export class ServicePageComponent   {
  serviceForm: FormGroup;
  videoId:string | null = '';
  displayLoading:boolean = false;
  displayResults:boolean = false;
  displayService:boolean = false;
  textsLoading: string[] = ['Espere um momento 😀', 'Assistindo a Aula 🧐', 'Aprendendo o Assunto 🫡', 'Criando o Resumo 😎', 'Enviando pra Você ✅']
  textDisplayIndex: number = 0;
  textDisplay: string = this.textsLoading[this.textDisplayIndex]
  serviceResult: string = ``; 

  constructor(private fb: FormBuilder, private clientService: ClientService) { 
    this.serviceForm = this.fb.group({
      linkUrl: ['', [Validators.required]]
    });
  }


 
  selectedItemIndex: number | null = null;

  onItemClick(index: number): void {
    this.selectedItemIndex = index;
  }

  inviteData() {
    if (this.serviceForm.value.linkUrl === '') {
      console.log('Preencha o formulario')    
    } else {
      console.log(this.selectedItemIndex)
      console.log(this.serviceForm.value.linkUrl);
      let linkUrl = this.serviceForm.value.linkUrl;
      this.videoId =  this.extrairIdDoVideo(linkUrl)
      console.log(this.videoId)
      this.displayLoading = true;
      this.displayResults = false;
      this.displayService = true
  
      setTimeout(() => {
        window.scrollBy({
          top: window.innerHeight, 
          behavior: 'smooth' 
        });
      }, 500)
  
      this.changeTextLoading()

      if (this.selectedItemIndex !== null && this.videoId !== null) {
        if (this.selectedItemIndex == 0) {
          this.clientService.postTranscription(this.videoId, environment.USER_UID).subscribe(response => {
            console.log('Resposta da transcrição:', response);
            this.serviceResult = response.message.content;
            this.applyStyles()
            this.displayLoading = false;
            this.displayResults = true
          }, error => {
            console.error('Erro na transcrição:', error);
          });
        } else if (this.selectedItemIndex == 1) {
          this.clientService.postSummary(this.videoId, environment.USER_UID).subscribe(response => {
            console.log('Resposta do resumo:', response);
            this.serviceResult = response.message.content;
            this.applyStyles()
            this.displayLoading = false;
            this.displayResults = true

          }, error => {
            console.error('Erro no resumo:', error);
          });
        } else if (this.selectedItemIndex == 2) {
          this.clientService.postReview(this.videoId, environment.USER_UID).subscribe(response => {
            console.log('Resposta da revisão:', response);
            this.serviceResult = response.message.content;
            this.applyStyles()
            this.displayLoading = false;
            this.displayResults = true
          }, error => {
            console.error('Erro na revisão:', error);
          });
        }
      } else {
        console.log('Selecione um serviço antes de enviar a solicitação');
      }
    }
  }

  getContentWithoutHeadAndFooter(): string {
    return this.serviceResult.replace(/<head>[\s\S]*<\/head>/, '')
    .replace(/<footer>[\s\S]*<\/footer>/, '');
  }

  applyStyles():void {
    setTimeout(() => {
      const serviceContainer = document.querySelector('.service-page__container-result-service')
      let titles = serviceContainer?.querySelectorAll('h1')
      let subtitles = serviceContainer?.querySelectorAll('h2')
      let topics = serviceContainer?.querySelectorAll('h3')
      let subtopics = serviceContainer?.querySelectorAll('h4')
      let paragraphs = serviceContainer?.querySelectorAll('p')
      let lists = serviceContainer?.querySelectorAll('ul')
      let listItems = serviceContainer?.querySelectorAll('li')

      const isMobile = window.innerWidth <= 480;

      if (titles && subtitles && topics && subtopics && lists && listItems) {
        titles.forEach(title => {
          title.style.fontSize =  isMobile ?  '2rem' :'3rem'
          title.style.marginBottom = '3rem'
          title.style.textAlign = 'left'
        })

        subtitles.forEach(subtitle => {
          subtitle.style.fontSize = isMobile ? '1.75rem' : '2.5rem'
          subtitle.style.marginTop = '2rem'
          subtitle.style.marginBottom = '1rem'
          subtitle.style.textAlign = 'left'
          subtitle.textContent = '>> ' + subtitle.textContent
        })

        topics.forEach(topic => {
          topic.style.marginTop = '1.5rem'
          topic.style.fontSize= '1.7rem'
          topic.style.textAlign = 'left'
          topic.textContent = '>>> ' + topic.textContent
        })

        subtopics.forEach(subtopic => {
          subtopic.style.marginTop = '1.5rem'
          subtopic.style.fontSize= '1.7rem'
          subtopic.style.textAlign = 'left'
          subtopic.textContent = '>>>> ' + subtopic.textContent
        })

        paragraphs?.forEach(paragraph => {
          paragraph.style.fontSize = '1.6rem'
          paragraph.style.color = '#7D7987'
          paragraph.style.lineHeight = '3rem'
        })

        lists?.forEach(list => {
          list.style.display = 'flex'
          list.style.flexDirection = 'column'
          list.style.gap = '1rem'
          list.style.marginLeft = '5rem'
        })

        listItems?.forEach(listItem => {
          listItem.style.color = '#7D7987'
        })
      }
    }, 0)
    
    
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
    }, 15000);
  }
}
