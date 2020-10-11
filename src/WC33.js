class WC33 extends Phaser.Scene{

  constructor(){
    super({key:'WC33'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.bgSound = this.sound.add('alarm');
    this.bgSound.setVolume(0.7);
    this.bgSound.play();
    artBox(this, 'wcmf3', 'wcmf3Anim2');
    initialDialogue(this, 34, "Oh my gosh!!! We have to get you to the hospital!!", "bus");
  }

  update(){
    checkNextDialogue(this, 2, 21, 'Wait, um-', 'cookleigh');
    checkNextScene(this, 3, 'WC33', 'WC34');
  }
}
