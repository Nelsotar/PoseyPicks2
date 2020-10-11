class DRA37 extends Phaser.Scene{

  constructor(){
    super({key:'DRA37'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    playEndSound(this, "victory");
    interviewDemon = true;
    artBox(this, 'dra6', 'dra6Anim2');
    initialDialogue(this, 1, "Thank you so much!! YAAHAAAA!", "posey");
  }

  update(){
    if(this.clickCounter === 2 && !this.activated[0]){
      destroyText(this);
      this.activated[0] = true;
      createMultiButtonsEnd(this, 'smallButton', 'W27', ['x1', 'credits'], ['Restart','Credits']);
    }
  }
}
