class WC103 extends Phaser.Scene{

  constructor(){
    super({key:'WC103'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf5', 'wcmf5Anim');
    initialDialogue(this, 21, "Posey... I feel really bad. What should we do?", "cookleigh");
  }

  update(){
    displayButtons(this, 2, 'smallButton', "WC103", ["WC109", "WC104"], ["Let's confess", "I'll take the blame"]);
  }
}
