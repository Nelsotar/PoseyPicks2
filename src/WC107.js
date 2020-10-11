class WC107 extends Phaser.Scene{

  constructor(){
    super({key:'WC107'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf6', 'wcmf6Anim3');
    initialDialogue(this, 32, "Aww... your friendship is so inspiring that instead of regular detention,", "bus");
  }

  update(){
    checkNextDialogue(this, 2, 32, "I'm going to send you to Friendly Detention.", "bus");
    checkNextScene(this, 3,  "WC107", "WC108");
  }
}
