class TB19 extends Phaser.Scene{

  constructor(){
    super({key:'TB19'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tb3', 'tb3Anim');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, "I'll think about it! And maybe I'll thank about it! Bye, Lisa!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'TB19', 'x1');
  }
}
