class TF2 extends Phaser.Scene{

  constructor(){
    super({key:'TF2'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    gameState.fishLikeSock = true;
    artBox(this, 'tf', 'tfAnim2');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, "It's great! It really brings out your fish abs!", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 5, "You're too kind. I do love my abs.", "fish");
    checkNextDialogue(this, 3, 5, "Please don't eat them.", "fish");
    checkNextScene(this, 4, 'TF2', 'TF3');
  }
}
