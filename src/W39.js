class W39 extends Phaser.Scene{

  constructor(){
    super({key:'W39'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wbb1', 'wbb1Anim5');
    initialDialogue(this, 15, "Yeah that's right, give up!! Now I will resume the mean things I was saying.", "hb");
  }

  update(){
    checkNextScene(this, 2, 'W39', 'W40');
  }
}
