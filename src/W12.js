class W12 extends Phaser.Scene{

  constructor(){
    super({key:'W12'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb3', 'wb3Anim');
    initialDialogue(this, 35, "That's enough, Hot Bear. Leave her alone!", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 17, "Okay, okay, fine.", "hb");
    displayButtons(this, 3, 'largeButton', 'W12', ['W14', 'W13'], ['Thanks, Cookleigh', '(Ignore entire world)']);
  }
}
