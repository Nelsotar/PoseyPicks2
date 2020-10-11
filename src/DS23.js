class DS23 extends Phaser.Scene{

  constructor(){
    super({key:'DS23'});
  }

  preload(){

  }

  create(){
    artBox(this, 'ds1', 'ds1Anim');
    createMultiButtons(this, 'smallButton', 'DS23', ['DS24', 'DS25'], ['Milky', 'Pumpkin']);
    this.artBox = this.add.sprite(0, 0, 'ds1').setOrigin(0);
    this.artBox.anims.play('ds1Anim', true);
  }

  update(){
  }
}
