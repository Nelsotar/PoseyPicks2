class TB22 extends Phaser.Scene{

  constructor(){
    super({key:'TB22'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tb3', 'tb3Anim2');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 6, "Hey, I'm out here. I just can't breathe.", "fish");
  }

  update(){
    checkNextScene(this, 2, 'TB22', 'TB23');
  }
}
