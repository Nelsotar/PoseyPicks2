class WC41 extends Phaser.Scene{

  constructor(){
    super({key:'WC41'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_scary');
    artBox(this, 'wcmv2', 'wcmv2Anim2');
    initialDialogue(this, 5, "...and that's how you stay awake... FOREVER!", "videofish");
    this.progressBarOutside = this.add.graphics();
    this.progressBarOutside.fillStyle(0xb8b8b8, 0.4);
    this.progressBarOutside.fillRect(621, 509, 765, 26);

    this.progressBarInside = this.add.graphics();
    this.progressBarInside.fillStyle(0xd1151b, 1);
    this.progressBarInside.fillRect(621, 509, 760, 26);
    this.progressBarInside.setDepth(1);

    this.pause = this.add.image(563,500,'wcmv_giantpauseicon').setOrigin(0);
    this.pause.setScale(0.1);
  }

  update(){
    checkNextScene(this, 2, 'WC41', 'WC42');
  }
}
