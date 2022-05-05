const soundBaseUrl = '/sidila/snd/';

export class Sound {
  constructor(file) {
    this.sound = document.createElement("audio");
    this.sound.src = `${soundBaseUrl}/${file}`;
  }

  play() {
    this.sound.play();
  }
  pause() {
    this.sound.pause();
  }
}