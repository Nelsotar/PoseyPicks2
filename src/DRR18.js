class DRR18 extends Phaser.Scene{

  constructor(){
    super({key:'DRR18'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("dream");
    artBox(this, 'drr3', 'drr3Anim4');
    initialDialogue(this, 12, "Ahh, soup is amazing. I am warm and whole, and ready to live again.", "rd");
  }

  update(){
    checkNextScene(this, 2, "DRR18", "DRR19");
  }
}
