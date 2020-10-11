class TB12 extends Phaser.Scene{

  constructor(){
    super({key:'TB12'});
  }

  preload(){

  }

  create(){

    setUpScene(this);

    artBox(this, 'tb', 'tbAnim3');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, 'Hmm... okay', "posey");
  }

  update(){
    checkNextScene(this, 2, 'TB12', 'TB13');
  }
}
