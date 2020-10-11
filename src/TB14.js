class TB14 extends Phaser.Scene{

  constructor(){
    super({key:'TB14'});
  }

  preload(){
  }

  create(){

    setUpScene(this);
    gameState.legThings = true;
    this.sound.play("chirp");
    artBox(this, 'tb', 'tbAnim4');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");
    this.legThings = this.add.image(0,0, 'legThings').setOrigin(0);

    initialDialogue(this, 0, 'Posey received the leg things!', "narrator");
  }

  update(){
    checkNextScene(this, 2, 'TB14', 'x1');
  }
}
