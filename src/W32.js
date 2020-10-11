class W32 extends Phaser.Scene{

  constructor(){
    super({key:'W32'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wbb1', 'wbb1Anim2');
    initialDialogue(this, 1, "Hey! I see you have legs there.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 17, "I do.", "hb");
    if(this.clickCounter == 4 && !this.activated[0]){
      this.activated[0] = true;
      if(gameState.legThings){
        nextScene(this, 'W32', 'W33');
      }
      else{
        nextScene(this, 'W32', 'W31');
      }
    }
  }
}
