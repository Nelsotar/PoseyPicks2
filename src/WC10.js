class WC10 extends Phaser.Scene{

  constructor(){
    super({key:'WC10'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmb1', 'wcmb1Anim2');
    initialDialogue(this, 2, "Hmmm maybe we shouldn't have done this.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 42, "What am I...?", "cloneleigh");
    checkNextScene(this, 3, 'WC10', 'WC11');
  }
}
