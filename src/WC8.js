class WC8 extends Phaser.Scene{

  constructor(){
    super({key:'WC8'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf1', 'wcmf1Anim4');
    initialDialogue(this, 1, "Let's make a fake Cookleigh who'll take your place!", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 19, "Oh I love it!!", "cookleigh");
    checkNextScene(this, 3, 'WC8', 'WC9');
  }
}
