class WC109 extends Phaser.Scene{

  constructor(){
    super({key:'WC109'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf5', 'wcmf5Anim2');
    initialDialogue(this, 3, "Um, Bus... Cookleigh isn't really sick. We're really sorry.", "posey");
  }

  update(){
    checkNextScene(this, 2,  "WC109", "WC110");
  }
}
