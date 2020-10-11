class DS13 extends Phaser.Scene{

  constructor(){
    super({key:'DS13'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    artBox(this, 'x1', 'x1Anim2');
    initialDialogue(this, 27, "I'm not feeling well!! These are my symptoms!!!", "posey");
  }

  update(){
    if(this.clickCounter === 2){
      nextScene(this, "DS13", "DS14");
    }
  }
}
