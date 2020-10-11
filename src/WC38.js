class WC38 extends Phaser.Scene{

  constructor(){
    super({key:'WC38'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcmv1', 'wcmv1Anim');
    initialDialogue(this, 1, "Let's watch a how-to-stay-awake video from the internet! Maybe that'll help!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC38', 'WC39');
  }
}
