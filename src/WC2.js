class WC2 extends Phaser.Scene{

  constructor(){
    super({key:'WC2'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcm1', 'wcm1Anim');
    initialDialogue(this, 27, "Me neither! School is butt.", "posey");
  }

  update(){
    checkNextPicDialogue(this, 2, 'wcm1', 'wcm1Anim2', 21, "Hmm, what can we do to get out of it?", "cookleigh");
    displayButtons(this, 3, 'largeButton', 'WC2', ['WC49', 'WC4'], ["Let's talk to the bus", 'We should still go to school']);
  }
}
