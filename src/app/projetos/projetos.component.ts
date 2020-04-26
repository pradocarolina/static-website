import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  public projetos: Array<Object>;

  constructor() { }

  ngOnInit(): void {
    this.projetos = [
      {
        titulo: 'Projeto 1',
        img: '../../assets/imgs/projeto-1.jpg',
        url: 'https://www.behance.net/gallery/94754665/Apartment-in-Ukraine-Kharkiv-85m2?tracking_source=search_projects_recommended%7Carchitecture'
      },
      {
        titulo: 'Projeto 2',
        img: '../../assets/imgs/projeto-2.jpg',
        url: 'https://www.behance.net/gallery/94175089/House-in-the-forest?tracking_source=search_projects_recommended%7Carchitecture'
      },
      {
        titulo: 'Projeto 3',
        img: '../../assets/imgs/projeto-3.jpg',
        url: 'https://www.behance.net/gallery/94607211/Casa-AF?tracking_source=search_projects_recommended%7Carchitecture'
      },
      {
        titulo: 'Projeto 4',
        img: '../../assets/imgs/projeto-4.jpg',
        url: 'https://www.behance.net/gallery/90679439/AB-Architects?tracking_source=search_projects_recommended%7Carchitecture'
      },
      {
        titulo: 'Projeto 5',
        img: '../../assets/imgs/projeto-5.jpg',
        url: 'https://www.behance.net/gallery/95055575/Casa-Cook-Chania?tracking_source=search_projects_recommended%7Carchitecture'
      },
      {
        titulo: 'Projeto 6',
        img: '../../assets/imgs/projeto-6.jpg',
        url: 'https://www.behance.net/gallery/95366887/Horatio-Court-Santa-Monica?tracking_source=search_projects_recommended%7Carchitecture'
      },
    ]
  }

  goto(url) {
    window.open(url)
  }

}
