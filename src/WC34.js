class WC34 extends Phaser.Scene{

  constructor(){
    super({key:'WC34'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.bgSound = this.sound.add('siren');
    this.bgSound.play({loop:true});
    artBox(this, 'wcmf3', 'wcmf3Anim3');
    this.bus = this.add.sprite(1920, 390, 'wcmf4_bus');
    this.bus.anims.play('wcmf4_busAnim');
  }

  update(){
    if(this.bus.x > -753){
      this.bus.setX(this.bus.x - 25);
    }
    else if(this.bus.x <= -753){
      nextScene(this,'WC34', 'WC35');
    }

  }
}
