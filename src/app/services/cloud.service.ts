import { Injectable } from '@angular/core';
import {of} from "rxjs";

export interface FileType {
  url: string;
  name: string;
  artist: string;
}

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  // service for audio files

  files: FileType[] = [
    {
      url: 'http://m801.music.126.net/20221123203938/d4686f59dfc9ca08b6d5512ace7b4536/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14937610832/8261/6680/3559/2b7989f11eef9bd16b980354f4459219.mp3',
      name: 'Psycho, Pt. 2',
      artist: 'Russ'
    },
    {
      url: 'http://m7.music.126.net/20221124115557/2432556163cd86263dbe013cb1a31d5f/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3',
      name: 'Bob',
      artist: 'Jack'
    },
    // {
    //   url: 'http://m7.music.126.net/20221124115829/93f1a5e44b47c4bf21ad18db4512c14b/ymusic/4c19/c99d/a372/c8bb250f93046594998a3e278261e374.mp3',
    //   name: 'remain',
    //   artist: 'main'
    // }
  ]

  getFiles(){
    return of(this.files);
  }

  constructor() { }
}
