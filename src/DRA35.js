class DRA35 extends Phaser.Scene{

  constructor(){
    super({key:'DRA35'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'dra6e1', 'dra6e1Anim2');
    initialDialogue(this, 5, "I was feeling insecure and lacked confidence,", "fish");
  }

  update(){
    checkNextDialogue(this, 2, 5, "but she encouraged me to see the beauty of both my sock and myself.", "fish");
    checkNextScene(this, 3, 'DRA35','DRA36');
  }
}
