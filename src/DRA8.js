class DRA8 extends Phaser.Scene{

  constructor(){
    super({key:'DRA8'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.artBox = this.add.sprite(0, 0, 'dra3').setOrigin(0);
    this.artBox.setFrame(6);
    initialDialogue(this, 10, "A JOB INTERVIEW", "rd");
  }

  update(){
    checkNextScene(this, 2, 'DRA8', 'DRA9');
  }
}
