class WC76 extends Phaser.Scene{

  constructor(){
    super({key:'WC76'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("victory");
    artBox(this, 'wcl1', 'wcl1Anim4');
    initialDialogue(this, 19, "This is great and weird!", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 1, "Awesome! Now breathe out!", "posey");
    displayButtons(this, 3, 'brownButton', 'WC76', ["WC77"], ["Breathe out"]);
  }
}
