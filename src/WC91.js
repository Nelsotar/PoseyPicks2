class WC91 extends Phaser.Scene{

  constructor(){
    super({key:'WC91'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wcs1', 'wcs1Anim3');
    initialDialogue(this, 2, "Mr. Salton, you're judging Cookleigh so harshly for one little mistake!", "posey");
  }

  update(){
    checkNextDialogue(this, 2, 2, "You know she's a good cookie, can't you give her a second chance?", "posey");
    checkNextPicDialogue(this, 3, 'wcs1', 'wcs1Anim2', 24, "Well... yes, you do have a point. I'm sorry for being so unforgiving, Cookleigh.", "salton");
    checkNextDialogue(this, 4, 24, "But can you ensure me that you'll try not to fall asleep again?", "salton");
    checkNextScene(this, 5, 'WC91', 'WC93');
  }
}
