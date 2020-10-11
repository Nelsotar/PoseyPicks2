class TB20 extends Phaser.Scene{

  constructor(){
    super({key:'TB20'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    gameState.goOn = true;

    artBox(this, 'tb2', 'tb2Anim');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 2, 'Legs?', "posey");
  }

  update(){
    checkNextDialogue(this, 2, 7, "Yeah, I'm raising awareness about legs! I love legs.", "legdaylisa");
    displayButtons(this, 3, 'smallButton', 'TB20', ['TB11', 'TB21'], ['Okay, go on.', 'I like arms better']);
  }
}
