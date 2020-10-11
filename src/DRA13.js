class DRA13 extends Phaser.Scene{

  constructor(){
    super({key:'DRA13'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra4', 'dra4Anim4');
    initialDialogue(this, 1, "I'm super passionate about my work, and I hardly ever need pee OR poo breaks.", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA13", "DRA14");
  }
}
