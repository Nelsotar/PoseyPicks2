class DRA12 extends Phaser.Scene{

  constructor(){
    super({key:'DRA12'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra5', 'dra5Anim');
    initialDialogue(this, 10, "Tell me, where do you see yourself in five years?", "rd");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'DRA12', ['DRA15', 'DRA26'], ["In a managerial position", "Living in the forest"]);
  }
}
