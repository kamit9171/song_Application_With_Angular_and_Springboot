import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Song } from './song';
@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseURL = "https://songapplication-backend1-production.up.railway.app/api/v1/song"
  //private baseURL = "http://localhost:8080/api/v1/song"

  constructor(private httpClient: HttpClient) { }
  
  getSongsList(): Observable<Song[]>{
    return this.httpClient.get<Song[]>(`${this.baseURL}`);
  }

  createSong(song: Song): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, song);
  }

  getSongById(id: number): Observable<Song>{
    return this.httpClient.get<Song>(`${this.baseURL}/${id}`);
  }

  updateSong(id: number, song: Song): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, song);
  }

  deleteSong(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}




