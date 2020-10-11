class DRA25 extends Phaser.Scene{

  constructor(){
    super({key:'DRA25'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    playEndSound(this, "defeat");
    artBox(this, 'dra8', 'dra8Anim2');
    initialDialogue(this, 3, "Ahh, poo. Back to school! ", "posey");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      createMultiButtonsEnd(this, 'smallButton', 'DRA25', ['x1', 'credits'], ['Restart', 'Credits']);
    }
  }
}
