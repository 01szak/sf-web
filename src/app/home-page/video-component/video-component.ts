import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AutoRevealComponent} from '../auto-reveal-component/auto-reveal-component';

@Component({
  selector: 'app-video-component',
  imports: [],
  templateUrl: './video-component.html',
  styleUrls: ['./video-component.css']
})
export class VideoComponent extends AutoRevealComponent implements AfterViewInit {

  @ViewChild('video0') video0!: ElementRef<HTMLVideoElement>;
  @ViewChild('video1') video1!: ElementRef<HTMLVideoElement>;

  protected videos = [
    '/video/horizontal-camper-park-cut-version.mp4',
    '/video/around-camper-park-cut-version.mp4'
  ];


  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.video0.nativeElement.muted = true;
    this.video1.nativeElement.muted = true;
    this.video0.nativeElement.classList.add('primary');
    this.video0.nativeElement.autoplay = true;
  }

  protected onEnd(video: HTMLVideoElement) {
    const v0 = this.video0.nativeElement;
    const v1 = this.video1.nativeElement;

    if (video === v0) {
      v0.classList.remove('primary');
      v1.classList.add('primary');
      v1.play();
    } else {
      v1.classList.remove('primary');
      v0.classList.add('primary');
      v0.play();
    }
  }

}
