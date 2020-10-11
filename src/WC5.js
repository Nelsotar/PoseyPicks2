class WC5 extends Phaser.Scene{

  constructor(){
    super({key:'WC5'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm5', 'wcm5Anim2');
    initialDialogue(this, 21, "Noooo!! I don't need to learn and grow anymore, I accept my limitations!!", "cookleigh");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'WC5', ['WC36', 'WC6'], ['You have to go!', "OK, I'll help you escape"]);
  }
}
