class TB16 extends Phaser.Scene{

  constructor(){
    super({key:'TB16'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tb2', 'tb2Anim');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 8, 'There might not be a next time if we allow the leg-o-sphere to collapse.', "legdaylisa");
  }

  update(){
    checkNextDialogue(this, 2, 8, 'But I understand. I hope the legs of the future understand too!', 'legdaylisa');
    checkNextScene(this, 3, 'TB15', 'x1');
  }
}
