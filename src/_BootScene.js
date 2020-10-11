class BootScene extends Phaser.Scene{

  constructor(){
    super({ key: 'BootScene' });
  }

  preload(){
    this.load.spritesheet('loading', 'assets/UI/loading.png', { frameWidth: 1920, frameHeight: 1080 });
    this.load.spritesheet('startButton', 'assets/UI/loading_startbutton.png', { frameWidth: 838, frameHeight: 232 });
    this.allowClick = false;
  }

  create(){}

  update(){
    this.scene.stop('BootScene');
    this.scene.start('Preload');
  }
}
