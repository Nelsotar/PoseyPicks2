class WC86 extends Phaser.Scene{

  constructor(){
    super({key:'WC86'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("storm");
    artBox(this, 'wcs2', 'wcs2Anim');
    initialDialogue(this, 27, "You know what I mean!! Back off, buddy!!", "posey");
  }

  update(){
    checkNextScene(this, 2, 'WC86', 'WC87');
  }
}
