class DRR17 extends Phaser.Scene{

  constructor(){
    super({key:'DRR17'});
  }

  preload(){

  }

  create(){
    setUpScene(this);

    this.chomp = this.sound.add("chomp");
    this.chomp.play({loop:true, volume:0.6, rate: 0.75});

    artBox(this, 'drr3', 'drr3Anim3');
    initialDialogue(this, 12, "Yum yum yum yum", "rd");
  }

  update(){

    if(this.clickCounter == 2 && !this.activated[0]){
      this.chomp.destroy();
      nextScene(this, "DRR17", "DRR18");
    }
  }
}
