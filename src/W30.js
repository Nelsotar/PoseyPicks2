class W30 extends Phaser.Scene{

  constructor(){
    super({key:'W30'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyMusic();
    this.battleStart = this.sound.add("battleStart");
    this.battleStart.play();
    artBox(this, 'ds_transition_top', 'ds_transition_topAnim');
    this.artBox2 = this.add.sprite(0, 540, 'ds_transition_bottom').setOrigin(0);
    this.artBox2.anims.play('ds_transition_bottomAnim', true);
    this.battleStart.once('complete', () =>{
      nextScene(this, "W30", "W31", false);
    });
  }

  update(){
  }
}
