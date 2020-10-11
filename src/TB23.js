class TB23 extends Phaser.Scene{

  constructor(){
    super({key:'TB23'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tb3', 'tb3Anim3');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 8, "Alright, forget it. None of you are taking this seriously!", "legdaylisa");
  }

  update(){
    checkNextScene(this, 2, 'TB23', 'x1');
  }
}
