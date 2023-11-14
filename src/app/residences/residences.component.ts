import { Component } from '@angular/core';
import { Residence } from '../Model/Residence';
import { Appartement } from '../Model/Appartement';
import { Observable, filter, of } from 'rxjs';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  imageUrl: string = "/assets/images/"; 
  selectedOption! : number;
  searchBySurface: any;
  apps: Appartement [] = [];
  favorites: Appartement []= [];

  residencesList: Residence[]=[
    {id: 1, name: "Residence 1", address: "Address 1", image: this.imageUrl+"residence1.jpg"},
    {id: 2, name: "Residence 2", address: "Address 2", image: this.imageUrl+"residence2.jpg"},
    {id: 3, name: "Residence 3", address: "Address 3", image: this.imageUrl+"residence3.jpg"}
  ]

  appartementsList: Appartement[]=
  [
    {
      id: 1, 
      terrasse: "Terrasse 1", 
      numAppart: 18, 
      numEtage: 0, 
      surface: 500, 
      surfaceTerrasse: 250, 
      category: "category 1", 
      description: "appartement desc 1", 
      status: true ,
      residence: this.residencesList[0]
    },
    {id: 2, terrasse: "Terrasse 2", numAppart: 21, numEtage: 5, surface: 250, surfaceTerrasse: 250, category: "category 2", description: "appartement desc 2", status: false ,residence: this.residencesList[0]},
    {id: 3, terrasse: "Terrasse 3", numAppart: 16, numEtage: 8, surface: 300, surfaceTerrasse: 250, category: "category 3", description: "appartement desc 3", status: true ,residence: this.residencesList[0]},
    {id: 4, terrasse: "Terrasse 4", numAppart: 16, numEtage: 8, surface: 600, surfaceTerrasse: 250, category: "category 4", description: "appartement desc 4", status: true ,residence: this.residencesList[1]},
    {id: 5, terrasse: "Terrasse 5", numAppart: 16, numEtage: 8, surface: 100, surfaceTerrasse: 250, category: "category 5", description: "appartement desc 5", status: true ,residence: this.residencesList[1]},
    {id: 6, terrasse: "Terrasse 6", numAppart: 16, numEtage: 8, surface: 420, surfaceTerrasse: 260, category: "category 6", description: "appartement desc 6", status: true ,residence: this.residencesList[2]},

  ]

  appartements: Appartement[] = this.appartementsList;


  showOrElse(e: number) {
    let aux: Appartement [] = [];
    for(let i = 0; i<this.appartementsList.length; i++) {
      if(this.appartementsList[i].residence.id == e) {
        aux.push(this.appartementsList[i]);
      }
    }
    this.apps = aux;
  }

  addToFavorite(appId : number){
    //let checkId = (app: Appartement) => app.id == appId;
    //let newFav: Appartement = this.appartementsList.find(checkId) as Appartement;
    if(!this.favorites.some((app)=>app.id == appId))
      for (let i = 0; i < this.appartementsList.length; i++) {
        if(this.appartementsList[i].id == appId)
          this.favorites.push(this.appartementsList[i]);
      }
    console.log(this.favorites);
  }

  removeFromFavorites(id: number) {
      this.favorites = this.favorites.filter((app)=>app.id!=id);
  }

  clearFavorites() {
    this.favorites = []
  }

  filterAppartements() {
    if(this.searchBySurface == "")
      this.appartements = this.appartementsList;
    else
      this.appartements = this.appartementsList.filter((app) => app.surface >= this.searchBySurface)
  }
  
}
