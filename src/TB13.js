class TB13 extends Phaser.Scene{

  constructor(){
    super({key:'TB13'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("dream");
    artBox(this, 'tb', 'tbAnim4');
    this.bg = this.add.sprite(0, 0, 't_bg').setOrigin(0);
    this.bg.anims.play("t_bgAnim");

    initialDialogue(this, 7, 'Awesome!! Here, please take this leg pamphlet and leg pin as thanks!', "legdaylisa");
  }

  update(){
   checkNextScene(this, 2, 'TB13', 'TB14');
  }
}
