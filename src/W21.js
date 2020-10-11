class W21 extends Phaser.Scene{

  constructor(){
    super({key:'W21'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb5', 'wb5Anim3');
    initialDialogue(this, 15, "That... that sounds good, doc. And thanks, Posey - I'm sorry I was mean to you.", "hb");
  }

  update(){
    if(this.clickCounter == 2 && !this.activated[0]){
      this.activated[0] = true;
      destroyText(this);
      playEndSound(this, "victory");

      createMultiButtonsEnd(this, 'smallButton', 'W21', ['x1', 'credits'], ['Restart', 'Credits']);
    }
  }
}
