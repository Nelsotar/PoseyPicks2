class WC49 extends Phaser.Scene{

  constructor(){
    super({key:'WC49'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm1', 'wcm1Anim3');
    initialDialogue(this, 1, "Hey bus... can we go somewhere else instead of school? Please?!", "posey");
  }

  update(){
    checkNextPicDialogue(this, 2, 'wcm1', 'wcm1Anim4', 34, "What?! I'm a *school* bus! I HAVE to bring you to school!!", "bus");
    displayButtons(this, 3, 'smallButton', 'WC49', ['WC66', 'WC51'], ["C'monnnnnn", 'Aw, okay']);
  }
}
