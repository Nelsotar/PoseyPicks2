class WC extends Phaser.Scene{

  constructor(){
    super({key:'WC'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    cookleigh = true;
    destroyAndPlayMusic(this, "bgm_cookleigh");
    artBox(this, 'wc1', 'wc1Anim');
    initialDialogue(this, 0, "Posey sat next to Cookleigh!", "narrator");
  }

  update(){
    checkNextDialogue(this, 2, 1, "Hey Cookleigh, how's it going?", "posey");
    checkNextDialogue(this, 3, 19, "Not bad... but I don't wanna go to school.", "cookleigh");
    displayButtons(this, 4, 'smallButton', 'WC', ['WC71', 'WC2'], ['Why not?', 'Me neither!']);
  }
}
