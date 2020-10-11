class TF5 extends Phaser.Scene{

  constructor(){
    super({key:'TF5'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tf', 'tfAnim3');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, "I'm happy for you! Talk to you later, fish.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 5, "Byyyye.", "fish");
    checkNextScene(this, 3, "TF5", "x1");
  }
}
