import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {
  public nome_usuario:string = "charles franca do código";
  public objeto_feed ={
    nome:"Charles Franca",
    data:"nov 5 1995",
    descricao:"Estou criando um app incrivel",
    qt_likes:50,
    qt_comments:4,
    time_comment:"11h ago"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private MoovieProvider:MoovieProvider) {
  }

  public somaDoisNumeros(num1:number,num2:number):void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
   // this.somaDoisNumeros(100,99);

   this.MoovieProvider.getLatestMovie().subscribe(
     data=>{
      alert(data);
   },error=>{
     alert(error);
   });
   
  }

}
