class TF3 extends Phaser.Scene{

  constructor(){
    super({key:'TF3'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tf', 'tfAnim3');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, "I won't! See ya later, fish.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 5, "See ya.", "fish");
    checkNextScene(this, 3, "TF3", "x1");
  }
}
