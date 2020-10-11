class DRA26 extends Phaser.Scene{

  constructor(){
    super({key:'DRA26'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("chirp");
    artBox(this, 'dra5', 'dra5Anim4');
    initialDialogue(this, 1, "I'll be living in a tree somewhere. Or maybe in a hole in the ground!", "posey");
  }

  update(){
    checkNextScene(this, 2, "DRA26", "DRA27");
  }
}
