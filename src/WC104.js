class WC104 extends Phaser.Scene{

  constructor(){
    super({key:'WC104'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmf5', 'wcmf5Anim2');
    initialDialogue(this, 3, "Um, Bus... Cookleigh isn't really sick.", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 3, "She's only making that face because I told her I wanted to skip school,", "posey");
    checkNextDialogue(this, 3, 3, "and she was disgusted with how irresponsible I am.", "posey");
    checkNextDialogue(this, 4, 33, " Is this true, Cookleigh?", "bus");
    checkNextScene(this, 5,  "WC104", "WC105");
  }
}
