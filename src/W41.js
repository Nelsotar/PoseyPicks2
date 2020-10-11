class W41 extends Phaser.Scene{

  constructor(){
    super({key:'W41'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wb2', 'wb2Anim5');
    initialDialogue(this, 16, "What?! You haven't had enough yet? Fine!!", "hb");
  }

  update(){
    checkNextScene(this, 2, 'W41', 'W31');
  }
}
