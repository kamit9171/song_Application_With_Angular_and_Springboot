import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent implements OnInit {

  id!: number;
  song: Song = new Song();
  constructor(private songService: SongService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.songService.getSongById(this.id).subscribe(data => {
      this.song = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.songService.updateSong(this.id, this.song).subscribe( data =>{
      this.goToSongList();
    }
    , error => console.log(error));
  }

  goToSongList(){
    this.router.navigate(['/songs']);
  }
}



