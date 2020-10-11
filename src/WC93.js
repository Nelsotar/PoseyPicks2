class WC93 extends Phaser.Scene{

  constructor(){
    super({key:'WC93'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcs1', 'wcs1Anim4');
    initialDialogue(this, 19, "Yeah, watch this!!", "cookleigh");
  }

  update(){
    checkNextScene(this, 2, 'WC93', 'WC94');
  }
}
