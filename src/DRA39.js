class DRA39 extends Phaser.Scene{

  constructor(){
    super({key:'DRA39'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    this.sound.play("boop");
    destroyAndPlayMusic(this, "bgm_waiting");
    artBox(this, 'dra6e1', 'dra6e1Anim3');
    initialDialogue(this, 7, "Posey? Is that the bunny who has legs?", "legdaylisa");
  }

  update(){
    checkNextDialogue(this, 2, 7, "Yeah, I like her! The Canadian Leg Friends Association is proud to support animals all across the ", "legdaylisa");
    checkNextDialogue(this, 3, 7, "country to \"Give them a leg up\" and help make their legs' dreams a reality.", "legdaylisa");
    checkNextScene(this, 4, 'DRA39','DRA36');
  }
}
