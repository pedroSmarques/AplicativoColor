import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRange, IonCard, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.page.html',
  styleUrls: ['color-change.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonRange, IonButton]
})
export class ColorChangePage implements OnInit {



  constructor(private rota: Router) { }

  ngOnInit() {
  }

  navegarParaHome() {
    this.rota.navigate(['/home']);
  }

  //PEGANDO OS VALORES DA RANGES

  r: number = 0;
  g: number = 0;
  b: number = 0;

  corBotao: string = 'rgb(0,0,0)';
  corFundo: string = 'linear-gradient(180deg, #0b1f5c, #000000)';

  //BOTÕES PARA ALTERAR COR

  mudarCorBotao() {
    this.corBotao = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  mudarFundo() {
    const cor = `rgb(${this.r}, ${this.g}, ${this.b})`;
    this.corFundo = `linear-gradient(180deg, ${cor}, #000000)`;
  }

}

