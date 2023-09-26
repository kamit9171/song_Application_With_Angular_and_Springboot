import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSongComponent } from './create-song/create-song.component';
import { SongListComponent } from './song-list/song-list.component';
import { UpdateSongComponent } from './update-song/update-song.component';
import { SongDetailsComponent } from './song-details/song-details.component';

const routes: Routes = [
  {path: 'songs', component: SongListComponent},
  {path: 'create-Song', component: CreateSongComponent},
  {path: '', redirectTo: 'songs', pathMatch: 'full'},
  
  {path: 'update-song/:id', component: UpdateSongComponent},
  {path: 'song-details/:id', component: SongDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }

