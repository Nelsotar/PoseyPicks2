class DS9 extends Phaser.Scene{

  constructor(){
    super({key:'DS9'});
  }

  preload(){

  }

  create(){
    gameState.pumpkins = 0;

    destroyMusic();
    this.battleStart = this.sound.add("battleStart");
    this.battleStart.play();

    artBox(this, 'ds_transition_top', 'ds_transition_topAnim',);
    this.artBox2 = this.add.sprite(0, 540, 'ds_transition_bottom').setOrigin(0);
    this.artBox2.anims.play('ds_transition_bottomAnim', true);
    this.battleStart.once('complete', () =>{
      nextScene(this, "DS9", "DS10", false);
    });
  }

  update(){
  }
}
