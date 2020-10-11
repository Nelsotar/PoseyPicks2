class TB15 extends Phaser.Scene{

  constructor(){
    super({key:'TB15'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'tb', 'tbAnim3');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, 'Hmm... sorry, maybe next time!', "posey" );
  }

  update(){
    checkNextScene(this, 2, 'TB15', 'TB16');
  }
}
