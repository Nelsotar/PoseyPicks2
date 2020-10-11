class WC16 extends Phaser.Scene{

  constructor(){
    super({key:'WC16'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmb1', 'wcmb1Anim3');
    initialDialogue(this, 1, "She's a little small, but I think she'll do!", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 42, "She is me...? I am... she? Eigh? Leigh?", "cloneleigh");
    checkNextDialogue(this, 3, 2, "Uhh... yeah!", "posey");
    checkNextScene(this, 4, 'WC16', 'WC17');
  }
}
