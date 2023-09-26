import { Component, OnInit } from '@angular/core';
import { Song } from '../song'
import { SongService } from '../song.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs!: Song[];

  constructor(private songService: SongService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSongs();
    
  }
   totalsongs:any=0;

  total(t:number)
  {
    //console.log(t);
    this.totalsongs = Math.floor(t).toString().length;
   // t.forEach(element => {
     //console.log(element)
     //this.totalsongs=this.totalsongs+1;
   // });
   console.log(this.totalsongs)
  
  }

  private getSongs(){
    this.songService.getSongsList().subscribe(data => {
      this.songs = data;
    });
  }

  songDetails(id: number){
     if(confirm("Are you sure You want to see the Details ")) 
  
    this.router.navigate(['song-details', id]);
  }

  updateSong(id: number){
    this.router.navigate(['update-song', id]);
  }

  deleteSong(id: number){
    if(confirm("Are you sure You want to Delete! ")) 
    this.songService.deleteSong(id).subscribe( data => {
      console.log(data);
      this.getSongs();
    })
  }


}



