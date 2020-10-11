class WC37 extends Phaser.Scene{

  constructor(){
    super({key:'WC37'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm5', 'wcm5Anim4');
    initialDialogue(this, 20, "Ahhh....okay, okay. But just thinking about school is making me sleepy. How can I stay awake?", "cookleigh");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'WC37', ['WC57', 'WC38'], ['Dunk yourself in coffee', 'Watch a how-to video'])
  }
}
