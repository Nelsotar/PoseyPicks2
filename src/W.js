class W extends Phaser.Scene{

  constructor(){
    super({key:'W'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_waitingditty');

    artBox(this, 'w1', 'w1Anim');
    this.overlay = this.add.sprite(0,0,'dots').setOrigin(0);
    this.overlay.anims.play('dotsAnim');

    initialDialogue(this, 0, "Posey waited a little longer…", "narrator");
  }

  update(){
    checkNextScene(this, 2, "W", "W2");
  }
}
