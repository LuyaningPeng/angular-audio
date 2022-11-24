import {Component} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {StreamState} from "../../interfaces/stream-state";
import {AudioService} from "../../services/audio.service";
import {CloudService, FileType} from "../../services/cloud.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  files: Array<any> = [];
  state!: StreamState;
  currentFile: any = {};

  constructor(private audioService: AudioService,
              private cloudService: CloudService) {
    this.cloudService.getFiles().subscribe(files => {
      this.files = files;
      console.log(files)
    })

    this.audioService.getState().subscribe(state => {
      this.state = state;
    })
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {
      // console.log(this.state)
    })
  }

  openFile(file: FileType, index: number){
    this.currentFile = {index, file};
    this.audioService.stop();
    this.playStream(file.url)
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change: MatSliderChange) {
    this.audioService.seekTo(change.value!);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  play() {
    this.audioService.play();
  }

  pause() {
    this.audioService.pause();
  }

  stop() {
    this.audioService.stop();
  }
}
