class DRA21 extends Phaser.Scene{

  constructor(){
    super({key:'DRA21'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, "bgm_waiting");
    interviewDemon = true;
    playEndSound(this, "victory");
    artBox(this, 'dra6', 'dra6Anim2');
    initialDialogue(this, 9, "Amazing!! You're HIRED!", "rd");

  }

  update(){
    displayButtonsEnd(this, 2, 'smallButton', 'DRA21', ['x1', 'credits'], ['Restart', 'Credits']);
  }
}
