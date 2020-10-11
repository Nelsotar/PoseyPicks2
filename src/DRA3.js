
class DRA3 extends Phaser.Scene{

  constructor(){
    super({key:'DRA3'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("woop");

    artBox(this, 'dra2', 'dra2Anim2');
    //this.textBox = this.add.image(0,716,'textBox').setOrigin(0);
  }

  update(){
    if(!this.artBox.anims.isPlaying){
      initialDialogue(this, 10, "Hello, child.", "rd");
      this.activated[0] = true;
      this.artBox.anims.play("dra2Anim3");
      this.clickCounter = 0;
    }
    else if(this.clickCounter == 2 && this.activated[0] && !this.activated[1]){
      this.activated[1] = true;
      destroyText(this);
      createMultiButtons(this, 'smallButton', 'DRA3', ['DRA4', 'DRA4'], ['Wha?!', 'Wha-Huh!?']);
    }
  }
}
