class DRA24 extends Phaser.Scene{

  constructor(){
    super({key:'DRA24'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra7', 'dra7Anim2');
    initialDialogue(this, 11, "Hdsdhjjffiuj!!!! Pure bananas! This interview is over.", "rd");
  }

  update(){
    if((gameState.legThanks || gameState.legThings || gameState.tf || cookleigh || oldDemon || interviewDemon) && this.clickCounter === 2){
      nextScene(this, "DRA24", "DRA33");
    }else if(this.clickCounter === 2){
      nextScene(this, "DRA24", "DRA25");
    }

  }
}
