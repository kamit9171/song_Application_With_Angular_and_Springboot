import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSongComponent } from './create-song/create-song.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { SongListComponent } from './song-list/song-list.component';
import { UpdateSongComponent } from './update-song/update-song.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LastUpdatedDirective } from './last-updated.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateSongComponent,
    
    SongDetailsComponent,
    SongListComponent,
    UpdateSongComponent,
    LastUpdatedDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
