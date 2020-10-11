class DRA29 extends Phaser.Scene{

  constructor(){
    super({key:'DRA29'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6', 'dra6Anim4');
    initialDialogue(this, 4, "The forest is actually a beautiful and natural place to live for my species.", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA29", "DRA30");
  }
}
