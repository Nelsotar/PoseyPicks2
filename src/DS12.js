class DS12 extends Phaser.Scene{

  constructor(){
    super({key:'DS12'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.bgSound = this.sound.add("charge");
    this.bgSound.play({loop:true});
    artBox(this, 'ds1', 'ds1Anim2');
    initialDialogue(this, 0, "Posey charged up an Excuse Blast!! What's her excuse for missing school?", "narrator");
  }

  update(){
    displayButtons(this, 2, 'largeButton', 'DS12', ['DS13', 'DS17'], ['I am unwell. These are my symptoms...', "I don't wannaaaaa"]);
  }
}
