class DRA32 extends Phaser.Scene{

  constructor(){
    super({key:'DRA32'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6b', 'dra6bAnim');
    initialDialogue(this, 10, "Clearly you are not ready for this much responsibility. I am sorry, child, but this interview is over.", "rd");
  }

  update(){
    if((gameState.legThanks || gameState.legThings || gameState.tf || cookleigh || oldDemon || interviewDemon) && this.clickCounter === 2){
      nextScene(this, "DRA32", "DRA33");
    }else if(this.clickCounter === 2){
      nextScene(this, "DRA32", "DRA25");
    }
  }
}
