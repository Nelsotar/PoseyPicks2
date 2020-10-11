class WC80 extends Phaser.Scene{

  constructor(){
    super({key:'WC80'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc1', 'wc1Anim5');
    initialDialogue(this, 21, " Yeah!! He was mad. And now he treats me like I'm the worst student ever.", "cookleigh");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'WC80', ['WC96', 'WC81'], ['You should talk to him', "I'll set things straight!"]);
  }
}
