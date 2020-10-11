class WC19 extends Phaser.Scene{

  constructor(){
    super({key:'WC19'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmb2', 'wcmb2Anim3');
    initialDialogue(this, 22, "Heh, very funny, miss. It's time for class, both of you should get inside!", "salton");
  }

  update(){
    checkNextScene(this, 2, 'WC19', 'WC20');
  }
}
