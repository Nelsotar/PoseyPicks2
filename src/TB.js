class TB extends Phaser.Scene{

  constructor(){
    super({key:'TB'});
  }

  preload(){

  }

  create(){

    setUpScene(this);
    gameState.tb = true;

    artBox(this, 'tb', 'tbAnim1');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 1, 'Hey Legday Lisa!', "posey");
  }

  update(){
    checkNextDialogue(this, 2, 7, "Yo what's up! Do you have a minute to hear about legs?", "legdaylisa");
    displayButtons(this,3,'smallButton', 'TB',['TB11', 'TB17', 'TB20'], ['Always!', 'Nope', 'Legs?']);
  }
}
