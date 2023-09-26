import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  id!: number
  song!: Song
  constructor(private route: ActivatedRoute, private employeService: SongService,private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.song = new Song();
    this.employeService.getSongById(this.id).subscribe( data => {
      this.song = data;
    });
  }
  goBack() {
    // Use the router to navigate back to the previous page
    this.router.navigate(['/songs']); // Replace 'previous-page' with the actual route
  }

}



