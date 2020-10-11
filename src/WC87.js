class WC87 extends Phaser.Scene{

  constructor(){
    super({key:'WC87'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcs1', 'wcs1Anim2');
    initialDialogue(this, 24, "Um... alright...", "salton");
  }

  update(){
    checkNextScene(this, 2, 'WC87', 'WC88');
  }
}
