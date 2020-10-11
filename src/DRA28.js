class DRA28 extends Phaser.Scene{

  constructor(){
    super({key:'DRA28'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("alarm");
    artBox(this, 'dra6', 'dra6Anim3');
    initialDialogue(this, 0, "DANGER! Interview in peril!!", "narrator");
  }

  update(){
    displayButtons(this, 2, 'smallButton', 'DRA28', ['DRA29', 'DRA31'], ["(Try to salvage it)","(Sweat a lot)"]);
  }
}
