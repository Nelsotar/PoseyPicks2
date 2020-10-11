class DRA17 extends Phaser.Scene{

  constructor(){
    super({key:'DRA17'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6', 'dra6Anim');
    initialDialogue(this, 10, "And what are you expecting, salary-wise?", "rd");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'DRA17', ['DRA18', 'DRA23'], ["Money", "Five hundred money"]);
  }
}
