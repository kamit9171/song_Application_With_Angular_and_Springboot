import { Component ,OnInit} from '@angular/core';

import {Router } from '@angular/router'
import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {


  song: Song = new Song();
  constructor(private songService: SongService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveSong(){
    this.songService.createSong(this.song).subscribe( data =>{
      console.log(data);
      this.goToSongList();
    },
    error => console.log(error));
  }
  goToSongList(){
    this.router.navigate(['songs']);
  }
  
  onSubmit(){
    console.log(this.song);
   this.saveSong();
    
 }
 // onSubmit() {     
  // console.log("submited");  
 // this.goTosongList();  
 //this.savesong();     // }
}
