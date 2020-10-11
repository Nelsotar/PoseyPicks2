class WC57 extends Phaser.Scene{

  constructor(){
    super({key:'WC57'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm6', 'wcm6Anim');
    initialDialogue(this, 1, "Maybe you could... dunk yourself in some coffee at a safe temperature?", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 40, "Oh, that's a great idea!", "cookleigh");
    checkNextScene(this, 3, 'WC57', 'WC58');
  }
}
