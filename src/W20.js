class W20 extends Phaser.Scene{

  constructor(){
    super({key:'W20'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    destroyAndPlayMusic(this, 'bgm_chung');
    artBox(this, 'wb5', 'wb5Anim2');
    this.chung = this.add.image(1921,10, 'chung_big').setOrigin(0);
    initialDialogue(this, 29, "Hi Hot Bear, I'm Dr. Chung. Together, we can work through the pain and anger you're experiencing.", "chung");
  }

  update(){
    if(this.chung.x > 1100){
      this.chung.setX(this.chung.x - 5);
    }

    if(this.clickCounter >= 2 && this.chung.x <= 1100){
      nextScene(this, 'W20', 'W21');
    }
  }
}
