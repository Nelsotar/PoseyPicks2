class WC99 extends Phaser.Scene{

  constructor(){
    super({key:'WC99'});
  }

  preload(){

  }

  create(){
    setUpScene(this);
    artBox(this, 'wc2', 'wc2Anim5');
    initialDialogue(this, 35, "You know what, Mr. Salton? I'm sorry I fell asleep, but I'm a good kid and I work hard,", "cookleigh");
  }

  update(){
    checkNextDialogue(this, 2, 35, "and I drifted off ONCE because life has been crazy lately and I guess I finally felt safe enough to let my", "cookleigh");
    checkNextDialogue(this, 3, 35, "guard down. So you don't have to like me anymore, but if you don't, then just leave me alone.", "cookleigh");
    checkNextPicDialogue(this, 4, 'wc3Anim', 'wc3Anim2', 24, "I... I'm sorry. You're right, Cookleigh, I've been unfair.", "salton");
    checkNextPicDialogue(this, 5, 'wc3Anim', 'wc3Anim', 22, "Just try not to make a habit of sleeping in school, okay?", "salton");
    checkNextDialogue(this, 6, 19, "I won't, probably!", "cookleigh");
    checkNextScene(this, 7, 'WC99', 'WC102');
  }
}
