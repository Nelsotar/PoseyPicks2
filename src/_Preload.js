class Preload extends Phaser.Scene{

  constructor(){
    super({key: 'Preload'});
  }

  preload(){
    let musicSuffix = ".ogg";
    let suffix = ".mp3";
    if (window.navigator.userAgent.indexOf("Mac") != -1){
      musicSuffix = ".m4a";
    }

    //gets loadiong screen and starts playing
    let loading = this.add.sprite(0,0, 'loading').setOrigin(0,0);
    this.anims.create({
			key: 'loadingAnim',
			frames: this.anims.generateFrameNumbers('loading'),
			frameRate: 3,
			repeat: -1
		});
    loading.anims.play('loadingAnim', true);

    this.anims.create({
			key: 'startButtonAnim',
			frames: this.anims.generateFrameNumbers('startButton'),
			frameRate: 3,
			repeat: -1
		});

    this.progressBar = this.add.graphics();
    this.progressBar.fillStyle(0xffffff);
    this.progressBarOutside = this.add.graphics();
    this.progressBarOutside.fillStyle(0xffffff, 0.4);
    this.progressBarOutside.fillRect(1242, 1029, 613, 14);
    this.load.on('progress', (value) =>{
      this.progressBar.clear();
      this.progressBar.fillStyle(0xffffff);
      this.progressBar.fillRect(1242, 1029, 613 * value, 14);
    });

    this.load.once('complete', (value) =>{
      this.startButton = this.add.sprite(1902, 1080, "startButton").setOrigin(1);
      this.startButton.anims.play("startButtonAnim");
      this.sound.play("boop");
      this.input.once("pointerup", ()=>{
        nextScene(this, "Preload", "TitleScreen", false);
      });
    });

    //Preload bgMusic
    this.load.audio('bgm_waiting', 'assets/SFX/bgm_waiting' + musicSuffix);
    this.load.audio('bgm_hiding', 'assets/SFX/bgm_hiding' + musicSuffix);
    this.load.audio('bgm_battle', 'assets/SFX/bgm_battle' + musicSuffix);
    this.load.audio('bgm_cityloop', 'assets/SFX/bgm_cityloop' + musicSuffix);
    this.load.audio('bgm_slowfuture', 'assets/SFX/bgm_slowfuture' + musicSuffix);
    this.load.audio('bgm_scary', 'assets/SFX/bgm_scary' + musicSuffix);
    this.load.audio('bgm_chung', 'assets/SFX/bgm_chung' + musicSuffix);
    this.load.audio('bgm_interview', 'assets/SFX/bgm_interview' + musicSuffix);
    this.load.audio('bgm_waitingditty', 'assets/SFX/bgm_waitingditty' + musicSuffix);
    this.load.audio('bgm_broom', 'assets/SFX/bgm_broom' + musicSuffix);
    this.load.audio('bgm_school', 'assets/SFX/bgm_school' + musicSuffix);
    this.load.audio('bgm_legdance', 'assets/SFX/bgm_legdance' + musicSuffix);
    this.load.audio('bgm_video', 'assets/SFX/bgm_video' + musicSuffix);
    this.load.audio('bgm_credits', 'assets/SFX/bgm_credits' + musicSuffix);
    this.load.audio('bgm_title', 'assets/SFX/bgm_title' + musicSuffix);
    this.load.audio('bgm_cookleigh', 'assets/SFX/bgm_cookleigh' + musicSuffix);


    //Preload SFX
    //load voices
    this.load.audio('narrator', 'assets/SFX/bb_book' + musicSuffix);
    this.load.audio('broom', 'assets/SFX/bb_broom' + musicSuffix);
    this.load.audio('bus', 'assets/SFX/bb_bus' + musicSuffix);
    this.load.audio('cloneleigh', 'assets/SFX/bb_cloneleigh' + musicSuffix);
    this.load.audio('cookleigh', 'assets/SFX/bb_cookleigh' + musicSuffix);
    this.load.audio('rd', 'assets/SFX/bb_demon' + musicSuffix);
    this.load.audio('chung', 'assets/SFX/bb_drchung' + musicSuffix);
    this.load.audio('fish', 'assets/SFX/bb_fish' + musicSuffix);
    this.load.audio('videofish', 'assets/SFX/bb_fish2' + musicSuffix);
    this.load.audio('fridge', 'assets/SFX/bb_fridge' + musicSuffix);
    this.load.audio('hb', 'assets/SFX/bb_hotbear' + musicSuffix);
    this.load.audio('legdaylisa', 'assets/SFX/bb_lisa' + musicSuffix);
    this.load.audio('oldrd', 'assets/SFX/bb_olddemon' + musicSuffix);
    this.load.audio('posey', 'assets/SFX/bb_posey' + musicSuffix);
    this.load.audio('rock', 'assets/SFX/bb_rock' + musicSuffix);
    this.load.audio('salton', 'assets/SFX/bb_salton' + musicSuffix);
    this.load.audio('stophanie', 'assets/SFX/bb_stophanie' + musicSuffix);
    this.load.audio('cookleighmom', 'assets/SFX/bb_cookmama' + musicSuffix);


    //load other sfx
    this.load.audio('timewarp', 'assets/SFX/sfx_timewarp' + musicSuffix);

    this.load.audio('textProceed', 'assets/SFX/sfx_dialogue_click' + suffix);
    this.load.audio('button', 'assets/SFX/sfx_button_click' + suffix);
    this.load.audio('transform', 'assets/SFX/sfx_transform(short)' + suffix);
    this.load.audio('battleStart', 'assets/SFX/sfx_battlestart' + suffix);
    this.load.audio('charge', 'assets/SFX/sfx_charge' + suffix);
    this.load.audio('launch', 'assets/SFX/sfx_launch' + suffix);
    this.load.audio('blast', 'assets/SFX/sfx_blast' + suffix);
    this.load.audio('battlevictory', 'assets/SFX/sfx_battlevictory' + suffix);
    this.load.audio('defeat', 'assets/SFX/sfx_defeat' + suffix);
    this.load.audio('punch', 'assets/SFX/sfx_punch' + suffix);
    this.load.audio('victory', 'assets/SFX/sfx_victory' + suffix);
    this.load.audio('meow', 'assets/SFX/sfx_meow' + suffix);
    this.load.audio('chirp', 'assets/SFX/sfx_chirp' + suffix);
    this.load.audio('chomp', 'assets/SFX/sfx_chomp' + suffix);
    this.load.audio('transport', 'assets/SFX/sfx_transport' + suffix);
    this.load.audio('woop', 'assets/SFX/sfx_woop' + suffix);
    this.load.audio('pop', 'assets/SFX/sfx_pop' + suffix);
    this.load.audio('skill', 'assets/SFX/sfx_skill' + suffix);
    this.load.audio('skill2', 'assets/SFX/sfx_skill2' + suffix);
    this.load.audio('alarm', 'assets/SFX/sfx_alarm' + suffix);
    this.load.audio('busArrive', 'assets/SFX/sfx_bus' + suffix);
    this.load.audio('bus2', 'assets/SFX/sfx_bus2' + suffix);
    this.load.audio('whoosh', 'assets/SFX/sfx_whoosh' + suffix);
    this.load.audio('beep', 'assets/SFX/sfx_beep' + suffix);
    this.load.audio('boop', 'assets/SFX/sfx_boop' + suffix);
    this.load.audio('bop', 'assets/SFX/sfx_bop' + suffix);
    this.load.audio('siren', 'assets/SFX/sfx_siren' + suffix);
    this.load.audio('horn', 'assets/SFX/sfx_horn' + suffix);
    this.load.audio('zzz', 'assets/SFX/sfx_zzz' + suffix);
    this.load.audio('lullaby', 'assets/SFX/sfx_lullaby' + suffix);
    this.load.audio('rumble', 'assets/SFX/sfx_rumble' + suffix);
    this.load.audio('neigh', 'assets/SFX/sfx_neigh' + suffix);
    this.load.audio('dream', 'assets/SFX/sfx_dream' + suffix);
    this.load.audio('storm', 'assets/SFX/sfx_storm' + suffix);
    this.load.audio('startGame', 'assets/SFX/sfx_startgame' + suffix);
    this.load.audio('camera', 'assets/SFX/sfx_camera' + suffix);
    this.load.audio('phone', 'assets/SFX/sfx_phone' + suffix);



    //Preload UI assets
    this.load.image('textBox', './assets/UI/dialoguebox.png');
    this.load.spritesheet('smallButton', "./assets/UI/button_short.png", {frameWidth: 928 , frameHeight: 163} );
    this.load.spritesheet('largeButton', "./assets/UI/button_long.png", {frameWidth: 1871 , frameHeight: 164} );
    this.load.spritesheet('brownButton', "./assets/UI/button_long_brown.png", {frameWidth: 1871 , frameHeight: 164} );
    this.load.spritesheet('dialogue_decor', "./assets/UI/dialogue_decor.png", {frameWidth: 1920 , frameHeight: 204} );

    //Preload Portraits
    this.load.spritesheet('portraits', './assets/UI/portraits.png', {frameWidth: 306, frameHeight: 303});

    //Preload bgs
    this.load.spritesheet('t_bg', './assets/t_bg.png', { frameWidth: 1920, frameHeight: 723});

    //Preload scenes
    this.load.spritesheet('x1', './assets/x1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('tb', './assets/tb.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('tb2', './assets/tb2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('tb3', './assets/tb3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('tf', './assets/tf.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('d', './assets/d.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('d2', './assets/d2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dr1', './assets/dr1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dr2', './assets/dr2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dr3', './assets/dr3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('ds_transition_top', './assets/ds_transition_top.png', { frameWidth: 1920, frameHeight: 540});
    this.load.spritesheet('ds_transition_bottom', './assets/ds_transition_bottom.png', { frameWidth: 1920, frameHeight: 540});

    this.load.spritesheet('ds1', './assets/ds1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('ds2', './assets/ds2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('ds3', './assets/ds3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('ds4', './assets/ds4.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('ds5', './assets/ds5.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('drr1', './assets/drr1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('drr_transition', './assets/drr_transition.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('drr_transition_bottom', './assets/drr_transition_bottom.png', { frameWidth: 1920, frameHeight: 362});
    this.load.spritesheet('drrh1', './assets/drrh1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('drr2', './assets/drr2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('drr3', './assets/drr3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('drr4', './assets/drr4.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('drr_soupbowl', './assets/drr_soupbowl.png', { frameWidth: 225, frameHeight: 288});
    this.load.spritesheet('chung_small', './assets/chung_small.png', { frameWidth: 499, frameHeight: 438});
    this.load.spritesheet('posey_run', './assets/dr_poseyrun.png', { frameWidth: 500, frameHeight: 558});
    this.load.spritesheet('demon_run', './assets/dr_demonrun.png', { frameWidth: 1047, frameHeight: 714});
    this.load.spritesheet('poseylookback', './assets/dr_poseylookback.png', { frameWidth: 490, frameHeight: 445});
  //  this.load.spritesheet('dra1', './assets/dra1.png', { frameWidth: 1920, frameHeight: 723});

    this.load.spritesheet('dra1_flockles', './assets/dra1_flockles.png', { frameWidth: 279, frameHeight: 97});
    this.load.spritesheet('dra1_portal', './assets/dra1_portal.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra1_posey', './assets/dra1_posey.png', { frameWidth: 1920, frameHeight: 723});

    this.load.spritesheet('dra2', './assets/dra2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra3', './assets/dra3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra4', './assets/dra4.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra5', './assets/dra5.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra6', './assets/dra6.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra6b', './assets/dra6b.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra6_bunnyphoto', './assets/dra6_bunnyphoto.png', { frameWidth: 830, frameHeight: 641});
    this.load.spritesheet('dra6_demonhead', './assets/dra6_demonhead.png', { frameWidth: 551, frameHeight: 483});

    this.load.spritesheet('dra7', './assets/dra7.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra8', './assets/dra8.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra9', './assets/dra9.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra10', './assets/dra10.png', { frameWidth: 1920, frameHeight: 723});

    this.load.spritesheet('w1', './assets/w1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dots', './assets/w1_dots.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('bus', './assets/w1_bus.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb1', './assets/wb1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb2', './assets/wb2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb3', './assets/wb3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb3IgnoreBg', './assets/wb3_ignoreBG.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb3IgnoreBub', './assets/wb3_ignoreBUB.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb3IgnoreEnd', './assets/wb3_ignoreEND.png', { frameWidth: 451, frameHeight: 131});
    this.load.spritesheet('wb3IgnorePo', './assets/wb3_ignorePO.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb4', './assets/wb4.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wb5', './assets/wb5.png', { frameWidth: 1920, frameHeight: 723});

    this.load.spritesheet('wbb1', './assets/wbb1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wbb2', './assets/wbb2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wbb3', './assets/wbb3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wbbt', './assets/wbbt.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('theend', './assets/wbb2_theend.png', { frameWidth: 254, frameHeight: 56});

    this.load.spritesheet('wc1', './assets/wc1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wc2', './assets/wc2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wc3', './assets/wc3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcm1', './assets/wcm1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcm2', './assets/wcm2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcm3', './assets/wcm3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcm4', './assets/wcm4.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcm5', './assets/wcm5.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcm6', './assets/wcm6.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmf1', './assets/wcmf1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmf2', './assets/wcmf2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmf3', './assets/wcmf3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmf4_bus', './assets/wcmf4_bus.png', { frameWidth: 753, frameHeight: 605});
    this.load.spritesheet('wcmf4', './assets/wcmf4.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmf5', './assets/wcmf5.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmf5_scrumble', './assets/wcmf5_scrumble.png', { frameWidth: 263, frameHeight: 239});
    this.load.spritesheet('wcmf6', './assets/wcmf6.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmf6_dots', './assets/wcmf6_dots.png', { frameWidth: 189, frameHeight: 45});

    this.load.spritesheet('wcmb1', './assets/wcmb1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmb2', './assets/wcmb2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmb3', './assets/wcmb3.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmb3_dots', './assets/wcmb3_dots.png', { frameWidth: 445, frameHeight: 340});

    this.load.spritesheet('wcmft1', './assets/wcmft1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmr1', './assets/wcmr1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmv1', './assets/wcmv1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcmv2', './assets/wcmv2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcms1', './assets/wcms1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcl1', './assets/wcl1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcl2', './assets/wcl2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcl_Llung', './assets/wcl_Llung.png', { frameWidth: 318, frameHeight: 429});
    this.load.spritesheet('wcl_Rlung', './assets/wcl_Rlung.png', { frameWidth: 318, frameHeight: 429});
    this.load.spritesheet('wcs1', './assets/wcs1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('wcs2', './assets/wcs2.png', { frameWidth: 1920, frameHeight: 723});
    this.load.image('cwake_base', './assets/cwake_base.png');
    this.load.spritesheet('cwake_Leye', './assets/cwake_Leye.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('cwake_Reye', './assets/cwake_Reye.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('cwake_mouth', './assets/cwake_mouth.png', { frameWidth: 1920, frameHeight: 723});

    this.load.spritesheet('credits', './assets/UI/credits.png', { frameWidth: 1920, frameHeight: 1080});
    this.load.spritesheet('creditsBackButton', './assets/UI/credits_backbutton.png', { frameWidth: 216, frameHeight: 70});

    this.load.spritesheet('titleScreen', './assets/UI/titlescreen.png', { frameWidth: 1920, frameHeight: 1080});

    this.load.spritesheet('dra6e1', './assets/dra6e1.png', { frameWidth: 1920, frameHeight: 723});
    this.load.spritesheet('dra6e2', './assets/dra6e2.png', { frameWidth: 1920, frameHeight: 723});

    this.load.image('wcmv_giantpauseicon', './assets/wcmv_giantpauseicon.png');

    this.load.image('chung_big', './assets/chung_big.png');
    this.load.image('cover', './assets/cover.png');
    this.load.image('cover2', './assets/cover2.png');
    this.load.image('checkup_hap', './assets/chung_checkup_pohap.png');
    this.load.image('checkup_sad', './assets/chung_checkup_posad.png');
    this.load.image('legs', './assets/wbb3_legs.png');
    this.load.image('legThings', './assets/tb_legthings.png');

    this.load.image('bunnyhead', './assets/dra5_bunnyhead.png');
  }

  create(){

    this.anims.create({key:'DDLAnim',frames: this.anims.generateFrameNumbers('dialogue_decor', {start: 0, end:1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'DDSAnim',frames: this.anims.generateFrameNumbers('dialogue_decor', {start: 2, end:3}), frameRate: 3, repeat: -1});


    //create animations
    this.anims.create({key:'x1Anim',frames: this.anims.generateFrameNumbers('x1', {start: 0, end:1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'x1Anim2',frames: this.anims.generateFrameNumbers('x1', {start: 2, end:3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'x1Anim3',frames: this.anims.generateFrameNumbers('x1', {start: 4, end:5}), frameRate: 3, repeat: -1});

    //talk bird branch
    this.anims.create({key:'tbAnim1',frames: this.anims.generateFrameNumbers('tb', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tbAnim2',frames: this.anims.generateFrameNumbers('tb', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tbAnim3',frames: this.anims.generateFrameNumbers('tb', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tbAnim4',frames: this.anims.generateFrameNumbers('tb', {start: 6 , end: 9}), frameRate: 6, repeat: -1});
    this.anims.create({key:'tb2Anim',frames: this.anims.generateFrameNumbers('tb2', {start: 3 , end: 4}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tb2Anim2',frames: this.anims.generateFrameNumbers('tb2', {start: 5 , end: 6}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tb2Anim3',frames: this.anims.generateFrameNumbers('tb2', {start: 7 , end: 8}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tb2Anim4',frames: this.anims.generateFrameNumbers('tb2', {start: 1 , end: 2}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tb3Anim',frames: this.anims.generateFrameNumbers('tb3', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tb3Anim2',frames: this.anims.generateFrameNumbers('tb3', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tb3Anim3',frames: this.anims.generateFrameNumbers('tb3', {start: 2 , end: 3}), frameRate: 3, repeat: -1});

    //talk fish branch
    this.anims.create({key:'tfAnim',frames: this.anims.generateFrameNumbers('tf', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tfAnim2',frames: this.anims.generateFrameNumbers('tf', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tfAnim3',frames: this.anims.generateFrameNumbers('tf', {start: 6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'tfAnim4',frames: this.anims.generateFrameNumbers('tf', {start: 4, end: 5}), frameRate: 3, repeat: -1});

    //ditch school branch
    this.anims.create({key:'dAnim',frames: this.anims.generateFrameNumbers('d', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dAnim2',frames: this.anims.generateFrameNumbers('d', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dAnim3',frames: this.anims.generateFrameNumbers('d', {start: 4 , end: 9}), frameRate: 10, repeat: 0});
    this.anims.create({key:'d2Anim',frames: this.anims.generateFrameNumbers('d2', {start: 0 , end: 1}), frameRate: 10, repeat: 4});
    this.anims.create({key:'d2Anim2',frames: this.anims.generateFrameNumbers('d2', {start: 0 , end: 1}), frameRate: 15, repeat: 8});
    this.anims.create({key:'d2Anim4',frames: this.anims.generateFrameNumbers('d2', {start: 3 , end: 8}), frameRate: 10, repeat: -1});

    this.anims.create({key:'dr1Anim',frames: this.anims.generateFrameNumbers('dr1', {start: 0 , end: 2}), frameRate: 10, repeat: -1});
    this.anims.create({key:'dr1Anim2',frames: this.anims.generateFrameNumbers('dr1', {start: 3 , end: 9}), frameRate: 20, repeat: 0});

    this.anims.create({key:'dr2Anim',frames: this.anims.generateFrameNumbers('dr2', {start:7 , end: 9}), frameRate: 20, repeat: 0});

    this.anims.create({key:'dr3Anim',frames: this.anims.generateFrameNumbers('dr3', {start:0 , end: 1}), frameRate: 20, repeat: 0});
    this.anims.create({key:'dr3Anim2',frames: this.anims.generateFrameNumbers('dr3', {start:2 , end: 5}), frameRate: 5, repeat: -1});
    this.anims.create({key:'dr3Anim3',frames: this.anims.generateFrameNumbers('dr3', {start:6 , end: 9}), frameRate: 5, repeat: -1});

    this.anims.create({key:'posey_runAnim',frames: this.anims.generateFrameNumbers('posey_run'), frameRate: 10, repeat: -1});
    this.anims.create({key:'demon_runAnim',frames: this.anims.generateFrameNumbers('demon_run'), frameRate: 10, repeat: -1});
    this.anims.create({key:'poseylookbackAnim',frames: this.anims.generateFrameNumbers('poseylookback'), frameRate: 5, repeat: -1});


    //ditch school battle
    this.anims.create({key:'ds_transition_topAnim',frames: this.anims.generateFrameNumbers('ds_transition_top'), frameRate: 30, repeat: 0});
    this.anims.create({key:'ds_transition_bottomAnim',frames: this.anims.generateFrameNumbers('ds_transition_bottom'), frameRate: 30, repeat: 0});

    this.anims.create({key:'ds1Anim',frames: this.anims.generateFrameNumbers('ds1', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds1Anim2',frames: this.anims.generateFrameNumbers('ds1', {start: 2 , end: 4}), frameRate: 5, repeat: -1});
    this.anims.create({key:'ds1Anim3',frames: this.anims.generateFrameNumbers('ds1', {start: 5 , end: 6}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds1Anim4',frames: this.anims.generateFrameNumbers('ds1', {start: 7 , end: 8}), frameRate: 3, repeat: -1});

    this.anims.create({key:'ds2Anim',frames: this.anims.generateFrameNumbers('ds2', {start: 0 , end: 1}), frameRate: 5, repeat: 1});
    this.anims.create({key:'ds2Anim2',frames: this.anims.generateFrameNumbers('ds2', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds2Anim3',frames: this.anims.generateFrameNumbers('ds2', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds2Anim4',frames: this.anims.generateFrameNumbers('ds2', {start: 6 , end: 7}), frameRate: 3, repeat: -1});


    this.anims.create({key:'ds3Anim',frames: this.anims.generateFrameNumbers('ds3', { frames:[0,9]}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds3Anim2',frames: this.anims.generateFrameNumbers('ds3', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds3Anim3',frames: this.anims.generateFrameNumbers('ds3', {start: 0 , end: 6}), frameRate: 6, repeat: 0});
    this.anims.create({key:'ds3Anim4',frames: this.anims.generateFrameNumbers('ds3', {start: 7 , end: 8}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds3Anim5',frames: this.anims.generateFrameNumbers('ds3', {start: 6 , end: 9}), frameRate: 5, repeat: -1});


    this.anims.create({key:'ds4Anim',frames: this.anims.generateFrameNumbers('ds4', {frames: [10, 0, 1, 2, 3]}), frameRate: 6, repeat: 0});
    this.anims.create({key:'ds4Anim2',frames: this.anims.generateFrameNumbers('ds4', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds4Anim3',frames: this.anims.generateFrameNumbers('ds4', {start: 6 , end: 6}), frameRate: 3, repeat: 0});
    this.anims.create({key:'ds4Anim4',frames: this.anims.generateFrameNumbers('ds4', {start: 7 , end: 8}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds5Anim',frames: this.anims.generateFrameNumbers('ds5', {start: 8 , end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds5Anim2',frames: this.anims.generateFrameNumbers('ds5', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds5Anim3',frames: this.anims.generateFrameNumbers('ds5', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds5Anim4',frames: this.anims.generateFrameNumbers('ds5', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'ds5Anim5',frames: this.anims.generateFrameNumbers('ds5', {start: 6 , end: 7}), frameRate: 3, repeat: -1});

    //ditch school run
    this.anims.create({key:'drr1Anim',frames: this.anims.generateFrameNumbers('drr1', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr1Anim2',frames: this.anims.generateFrameNumbers('drr1', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr1Anim3',frames: this.anims.generateFrameNumbers('drr1', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr1Anim4',frames: this.anims.generateFrameNumbers('drr1', {start: 6 , end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr1Anim5',frames: this.anims.generateFrameNumbers('drr1', {start: 8 , end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'drr2Anim',frames: this.anims.generateFrameNumbers('drr2', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr2Anim2',frames: this.anims.generateFrameNumbers('drr2', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr2Anim3',frames: this.anims.generateFrameNumbers('drr2', {start: 6 , end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr2Anim4',frames: this.anims.generateFrameNumbers('drr2', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr2Anim5',frames: this.anims.generateFrameNumbers('drr2', {start: 8 , end: 9}), frameRate: 3, repeat: -1});


    this.anims.create({key:'drr3Anim',frames: this.anims.generateFrameNumbers('drr3', {start: 8 , end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr3Anim2',frames: this.anims.generateFrameNumbers('drr3', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr3Anim3',frames: this.anims.generateFrameNumbers('drr3', {start: 2 , end: 3}), frameRate: 5, repeat: -1});
    this.anims.create({key:'drr3Anim4',frames: this.anims.generateFrameNumbers('drr3', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr3Anim5',frames: this.anims.generateFrameNumbers('drr3', {start: 6 , end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'soupAnim',frames: this.anims.generateFrameNumbers('drr_soupbowl', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'soupAnim2',frames: this.anims.generateFrameNumbers('drr_soupbowl', {start: 0 , end: 1}), frameRate: 3, repeat: 0});
    this.anims.create({key:'soupAnim3',frames: this.anims.generateFrameNumbers('drr_soupbowl', {start: 7 , end: 38}), frameRate: 20, repeat: 0});
    this.anims.create({key:'textEndAnim',frames: this.anims.generateFrameNumbers('drr_soupbowl', {frames:[2,5]}), frameRate: 3, repeat: -1});

    this.anims.create({key:'chungAnim',frames: this.anims.generateFrameNumbers('chung_small', {start: 0 , end: 1}), frameRate: 2, repeat: -1});


    this.anims.create({key:'drr4Anim',frames: this.anims.generateFrameNumbers('drr4', {start: 0 , end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr4Anim2',frames: this.anims.generateFrameNumbers('drr4', {start: 2 , end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr4Anim3',frames: this.anims.generateFrameNumbers('drr4', {start: 4 , end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr4Anim4',frames: this.anims.generateFrameNumbers('drr4', {start: 6 , end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'drr4Anim5',frames: this.anims.generateFrameNumbers('drr4', {start: 8 , end: 9}), frameRate: 3, repeat: -1});


    this.anims.create({key:'drr_transitionAnim',frames: this.anims.generateFrameNumbers('drr_transition', {start: 0 , end: 8}), frameRate: 30, repeat: -1});
    this.anims.create({key:'drrh1Anim',frames: this.anims.generateFrameNumbers('drrh1', {start: 0 , end: 7}), frameRate: 10, repeat: 0});
    this.anims.create({key:'drrh1Anim2',frames: this.anims.generateFrameNumbers('drrh1', {start: 8 , end: 9}), frameRate: 3, repeat: -1});

    //ditch school alt dimension
  //  this.anims.create({key:'dra1Anim',frames: this.anims.generateFrameNumbers('dra1', {start: 0, end: 0}), frameRate: 1, repeat: 0});
  //  this.anims.create({key:'dra1Anim2',frames: this.anims.generateFrameNumbers('dra1', {start: 1, end: 7}), frameRate: 6, repeat: 0});
  //  this.anims.create({key:'dra1Anim3',frames: this.anims.generateFrameNumbers('dra1', {start: 6, end: 7}), frameRate: 6, repeat: 1});
  //  this.anims.create({key:'dra1Anim4',frames: this.anims.generateFrameNumbers('dra1', {start: 8, end: 9}), frameRate: 3, repeat: 0});

    this.anims.create({key:'dra1_portalAnim',frames: this.anims.generateFrameNumbers('dra1_portal', {start: 0, end: 2}), frameRate: 7, repeat: -1});
    this.anims.create({key:'dra1_portalAnim2',frames: this.anims.generateFrameNumbers('dra1_portal', {start: 3, end: 4}), frameRate: 20, repeat: 0});
    this.anims.create({key:'dra1_poseyAnim',frames: this.anims.generateFrameNumbers('dra1_posey'), frameRate: 7, repeat: -1});
    this.anims.create({key:'dra1_flocklesAnim',frames: this.anims.generateFrameNumbers('dra1_flockles', {start: 0, end: 3}), frameRate: 7, repeat: -1});
    this.anims.create({key:'dra1_flocklesAnim2',frames: this.anims.generateFrameNumbers('dra1_flockles', {start: 4, end: 4}), frameRate: 20, repeat: 0});



    this.anims.create({key:'dra2Anim',frames: this.anims.generateFrameNumbers('dra2', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra2Anim2',frames: this.anims.generateFrameNumbers('dra2', {start: 2, end: 8}), frameRate: 15, repeat: 0});
    this.anims.create({key:'dra2Anim3',frames: this.anims.generateFrameNumbers('dra2', {start: 7, end: 8}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra3Anim',frames: this.anims.generateFrameNumbers('dra3', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra3Anim2',frames: this.anims.generateFrameNumbers('dra3', {start: 2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra3Anim3',frames: this.anims.generateFrameNumbers('dra3', {start: 4, end: 5}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra4Anim',frames: this.anims.generateFrameNumbers('dra4', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra4Anim2',frames: this.anims.generateFrameNumbers('dra4', {start: 4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra4Anim3',frames: this.anims.generateFrameNumbers('dra4', {start: 6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra4Anim4',frames: this.anims.generateFrameNumbers('dra4', {start: 2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra4Anim5',frames: this.anims.generateFrameNumbers('dra4', {start: 8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra5Anim',frames: this.anims.generateFrameNumbers('dra5', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra5Anim2',frames: this.anims.generateFrameNumbers('dra5', {start: 2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra5Anim3',frames: this.anims.generateFrameNumbers('dra5', {start: 8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra5Anim4',frames: this.anims.generateFrameNumbers('dra5', {start: 4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra5Anim5',frames: this.anims.generateFrameNumbers('dra5', {start: 6, end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra6Anim',frames: this.anims.generateFrameNumbers('dra6', {start: 6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6Anim2',frames: this.anims.generateFrameNumbers('dra6', {start: 8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6Anim3',frames: this.anims.generateFrameNumbers('dra6', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6Anim4',frames: this.anims.generateFrameNumbers('dra6', {start: 2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6Anim5',frames: this.anims.generateFrameNumbers('dra6', {start: 4, end: 5}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra6bunnyAnim',frames: this.anims.generateFrameNumbers('dra6_bunnyphoto'), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6demonAnim',frames: this.anims.generateFrameNumbers('dra6_demonhead'), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra6bAnim',frames: this.anims.generateFrameNumbers('dra6b', {start: 7, end: 8}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6bAnim2',frames: this.anims.generateFrameNumbers('dra6b', {start: 0, end: 4}), frameRate: 3, repeat: 0});
    this.anims.create({key:'dra6bAnim3',frames: this.anims.generateFrameNumbers('dra6b', {start: 3, end: 4}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6bAnim4',frames: this.anims.generateFrameNumbers('dra6b', {start: 5, end: 6}), frameRate: 3, repeat: -1});


    this.anims.create({key:'dra7Anim',frames: this.anims.generateFrameNumbers('dra7', {start: 0, end: 7}), frameRate: 10, repeat: 0});
    this.anims.create({key:'dra7Anim2',frames: this.anims.generateFrameNumbers('dra7', {start: 8, end: 9}), frameRate: 3, repeat: -1});


    this.anims.create({key:'dra8Anim',frames: this.anims.generateFrameNumbers('dra8', {start: 0, end: 7}), frameRate: 10, repeat: 0});
    this.anims.create({key:'dra8Anim2',frames: this.anims.generateFrameNumbers('dra8', {start: 8, end: 9}), frameRate: 3, repeat: -1});


    this.anims.create({key:'dra9Anim',frames: this.anims.generateFrameNumbers('dra9', {start: 0, end: 7}), frameRate: 10, repeat: -1});
    this.anims.create({key:'dra9Anim2',frames: this.anims.generateFrameNumbers('dra9', {start: 8, end: 9}), frameRate: 10, repeat: 0});

    this.anims.create({key:'dra10Anim',frames: this.anims.generateFrameNumbers('dra10', {start: 0, end: 8}), frameRate: 10, repeat: 0});
    this.anims.create({key:'dra10Anim2',frames: this.anims.generateFrameNumbers('dra10', {start: 7, end: 8}), frameRate: 3, repeat: -1});

    this.anims.create({key:'w1Anim',frames: this.anims.generateFrameNumbers('w1', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'w1Anim2',frames: this.anims.generateFrameNumbers('w1', {start: 2, end: 6}), frameRate: 7, repeat: 0});
    this.anims.create({key:'w1Anim3',frames: this.anims.generateFrameNumbers('w1', {start: 7, end: 8}), frameRate: 3, repeat: -1});
    this.anims.create({key:'busAnim',frames: this.anims.generateFrameNumbers('bus', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'busAnim2',frames: this.anims.generateFrameNumbers('bus', {start: 2, end: 3}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dotsAnim',frames: this.anims.generateFrameNumbers('dots', {start: 0, end: 4}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wb1Anim',frames: this.anims.generateFrameNumbers('wb1', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb1Anim2',frames: this.anims.generateFrameNumbers('wb1', {start: 2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb1Anim3',frames: this.anims.generateFrameNumbers('wb1', {start: 4, end: 9}), frameRate: 16, repeat: 0});
    this.anims.create({key:'wb1Anim4',frames: this.anims.generateFrameNumbers('wb1', {start: 8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb2Anim',frames: this.anims.generateFrameNumbers('wb2', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb2Anim2',frames: this.anims.generateFrameNumbers('wb2', {start: 4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb2Anim3',frames: this.anims.generateFrameNumbers('wb2', {start: 6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb2Anim4',frames: this.anims.generateFrameNumbers('wb2', {start: 8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb2Anim5',frames: this.anims.generateFrameNumbers('wb2', {start: 2, end: 3}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wb3Anim',frames: this.anims.generateFrameNumbers('wb3', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb3Anim2',frames: this.anims.generateFrameNumbers('wb3', {start: 2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb3Anim3',frames: this.anims.generateFrameNumbers('wb3', {start: 4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb3Anim4',frames: this.anims.generateFrameNumbers('wb3', {start: 6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb3Anim5',frames: this.anims.generateFrameNumbers('wb3', {start: 8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb3IgnorePoAnim',frames: this.anims.generateFrameNumbers('wb3IgnorePo'), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb3IgnoreBubAnim',frames: this.anims.generateFrameNumbers('wb3IgnoreBub'), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb3IgnoreEndAnim',frames: this.anims.generateFrameNumbers('wb3IgnoreEnd'), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb4Anim',frames: this.anims.generateFrameNumbers('wb4', {start: 0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb4Anim2',frames: this.anims.generateFrameNumbers('wb4', {start: 2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb4Anim3',frames: this.anims.generateFrameNumbers('wb4', {start: 4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb4Anim4',frames: this.anims.generateFrameNumbers('wb4', {start: 6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb4Anim5',frames: this.anims.generateFrameNumbers('wb4', {start: 8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wb5Anim',frames: this.anims.generateFrameNumbers('wb5', {start: 4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb5Anim2',frames: this.anims.generateFrameNumbers('wb5', {start: 6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb5Anim3',frames: this.anims.generateFrameNumbers('wb5', {start: 8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb5Anim4',frames: this.anims.generateFrameNumbers('wb5', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wb5Anim5',frames: this.anims.generateFrameNumbers('wb5', {start:2, end: 3}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wbb1Anim',frames: this.anims.generateFrameNumbers('wbb1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wbb1Anim2',frames: this.anims.generateFrameNumbers('wbb1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wbb1Anim3',frames: this.anims.generateFrameNumbers('wbb1', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wbb1Anim4',frames: this.anims.generateFrameNumbers('wbb1', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wbb1Anim5',frames: this.anims.generateFrameNumbers('wbb1', {start:2, end: 3}), frameRate: 3, repeat: -1});


    this.anims.create({key:'wbb2Anim',frames: this.anims.generateFrameNumbers('wbb2', {start:6, end: 7}), frameRate: 10, repeat: 3});
    this.anims.create({key:'wbb2Anim2',frames: this.anims.generateFrameNumbers('wbb2', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wbb2Anim3',frames: this.anims.generateFrameNumbers('wbb2', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wbb2Anim4',frames: this.anims.generateFrameNumbers('wbb2', {start:2, end: 3}), frameRate: 3, repeat: 2});
    this.anims.create({key:'wbb2Anim5',frames: this.anims.generateFrameNumbers('wbb2', {start:4, end: 5}), frameRate: 3, repeat: 2});
    this.anims.create({key:'wbb2Anim6',frames: this.anims.generateFrameNumbers('wbb2', {start:3, end: 5}), frameRate: 3, repeat: 2});
    this.anims.create({key:'wbb2Anim7',frames: this.anims.generateFrameNumbers('wbb2', {start:2, end: 4}), frameRate: 3, repeat: 0});
    this.anims.create({key:'wbb2Anim8',frames: this.anims.generateFrameNumbers('wbb2', {start:3, end: 5}), frameRate: 3, repeat: 0});
    this.anims.create({key:'theendAnim',frames: this.anims.generateFrameNumbers('theend'), frameRate: 3, repeat: -1});


    this.anims.create({key:'wbb3Anim',frames: this.anims.generateFrameNumbers('wbb3', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wbb3Anim2',frames: this.anims.generateFrameNumbers('wbb3', {start:0, end: 2}), frameRate: 6, repeat: 0});
    this.anims.create({key:'wbb3Anim3',frames: this.anims.generateFrameNumbers('wbb3', {start:4, end: 5}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wbbtAnim',frames: this.anims.generateFrameNumbers('wbbt', {start: 0, end:9}), frameRate: 10, repeat: 0});


    this.anims.create({key:'wc1Anim',frames: this.anims.generateFrameNumbers('wc1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc1Anim2',frames: this.anims.generateFrameNumbers('wc1', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc1Anim3',frames: this.anims.generateFrameNumbers('wc1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc1Anim4',frames: this.anims.generateFrameNumbers('wc1', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc1Anim5',frames: this.anims.generateFrameNumbers('wc1', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wc2Anim',frames: this.anims.generateFrameNumbers('wc2', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc2Anim2',frames: this.anims.generateFrameNumbers('wc2', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc2Anim3',frames: this.anims.generateFrameNumbers('wc2', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc2Anim4',frames: this.anims.generateFrameNumbers('wc2', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc2Anim5',frames: this.anims.generateFrameNumbers('wc2', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wc3Anim',frames: this.anims.generateFrameNumbers('wc3', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc3Anim2',frames: this.anims.generateFrameNumbers('wc3', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wc3Anim3',frames: this.anims.generateFrameNumbers('wc3', {start:4, end: 6}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcm1Anim',frames: this.anims.generateFrameNumbers('wcm1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm1Anim2',frames: this.anims.generateFrameNumbers('wcm1', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm1Anim3',frames: this.anims.generateFrameNumbers('wcm1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm1Anim4',frames: this.anims.generateFrameNumbers('wcm1', {start:6, end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcm2Anim',frames: this.anims.generateFrameNumbers('wcm2', {start:0, end: 3}), frameRate: 12, repeat: 0});
    this.anims.create({key:'wcm2Anim2',frames: this.anims.generateFrameNumbers('wcm2', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm2Anim3',frames: this.anims.generateFrameNumbers('wcm2', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm2Anim4',frames: this.anims.generateFrameNumbers('wcm2', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcm3Anim',frames: this.anims.generateFrameNumbers('wcm3', {start:0, end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcm4Anim',frames: this.anims.generateFrameNumbers('wcm4', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm4Anim2',frames: this.anims.generateFrameNumbers('wcm4', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm4Anim3',frames: this.anims.generateFrameNumbers('wcm4', {start:0, end: 1}), frameRate: 3, repeat: -1});


    this.anims.create({key:'wcm5Anim',frames: this.anims.generateFrameNumbers('wcm5', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm5Anim2',frames: this.anims.generateFrameNumbers('wcm5', {start:2, end: 5}), frameRate: 6, repeat: -1});
    this.anims.create({key:'wcm5Anim3',frames: this.anims.generateFrameNumbers('wcm5', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm5Anim4',frames: this.anims.generateFrameNumbers('wcm5', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcm6Anim',frames: this.anims.generateFrameNumbers('wcm6', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm6Anim2',frames: this.anims.generateFrameNumbers('wcm6', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm6Anim3',frames: this.anims.generateFrameNumbers('wcm6', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcm6Anim4',frames: this.anims.generateFrameNumbers('wcm6', {start:6, end: 7}), frameRate: 3, repeat: -1});


    this.anims.create({key:'wcmf1Anim',frames: this.anims.generateFrameNumbers('wcmf1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf1Anim2',frames: this.anims.generateFrameNumbers('wcmf1', {start:2, end: 5}), frameRate: 8, repeat: 0});
    this.anims.create({key:'wcmf1Anim3',frames: this.anims.generateFrameNumbers('wcmf1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf1Anim4',frames: this.anims.generateFrameNumbers('wcmf1', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf1Anim5',frames: this.anims.generateFrameNumbers('wcmf1', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmf2Anim',frames: this.anims.generateFrameNumbers('wcmf2', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf2Anim2',frames: this.anims.generateFrameNumbers('wcmf2', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf2Anim3',frames: this.anims.generateFrameNumbers('wcmf2', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf2Anim4',frames: this.anims.generateFrameNumbers('wcmf2', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf2Anim5',frames: this.anims.generateFrameNumbers('wcmf2', {start:4, end: 5}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmf3Anim',frames: this.anims.generateFrameNumbers('wcmf3', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf3Anim2',frames: this.anims.generateFrameNumbers('wcmf3', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf3Anim3',frames: this.anims.generateFrameNumbers('wcmf3', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf3Anim4',frames: this.anims.generateFrameNumbers('wcmf3', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf3Anim5',frames: this.anims.generateFrameNumbers('wcmf3', {start:2, end: 3}), frameRate: 3, repeat: -1});


    this.anims.create({key:'wcmf4Anim',frames: this.anims.generateFrameNumbers('wcmf4', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf4Anim2',frames: this.anims.generateFrameNumbers('wcmf4', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf4_busAnim',frames: this.anims.generateFrameNumbers('wcmf4_bus', {start:0, end: 2}), frameRate: 6, repeat: -1});

    this.anims.create({key:'wcmf5Anim',frames: this.anims.generateFrameNumbers('wcmf5', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf5Anim2',frames: this.anims.generateFrameNumbers('wcmf5', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf5Anim3',frames: this.anims.generateFrameNumbers('wcmf5', {start:4, end: 5}), frameRate: 6, repeat: -1});
    this.anims.create({key:'wcmf5Anim4',frames: this.anims.generateFrameNumbers('wcmf5', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf5_scrumbleAnim',frames: this.anims.generateFrameNumbers('wcmf5_scrumble', {start: 0, end: 2}), frameRate: 6, repeat: -1});

    this.anims.create({key:'wcmf6_dotsAnim',frames: this.anims.generateFrameNumbers('wcmf6_dots'), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf6Anim',frames: this.anims.generateFrameNumbers('wcmf6', {start:1, end: 3}), frameRate: 4, repeat: 0});
    this.anims.create({key:'wcmf6Anim2',frames: this.anims.generateFrameNumbers('wcmf6', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf6Anim3',frames: this.anims.generateFrameNumbers('wcmf6', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmf6Anim4',frames: this.anims.generateFrameNumbers('wcmf6', {start:6, end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmft1Anim',frames: this.anims.generateFrameNumbers('wcmft1', {start:0, end: 1}), frameRate: 6, repeat: 3});
    this.anims.create({key:'wcmft1Anim2',frames: this.anims.generateFrameNumbers('wcmft1', {start:2, end: 8}), frameRate: 10, repeat: 0});
    this.anims.create({key:'wcmft1Anim3',frames: this.anims.generateFrameNumbers('wcmft1', {start:7, end: 8}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmb1Anim',frames: this.anims.generateFrameNumbers('wcmb1', {start:0, end: 5}), frameRate: 6, repeat: 0});
    this.anims.create({key:'wcmb1Anim2',frames: this.anims.generateFrameNumbers('wcmb1', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmb1Anim3',frames: this.anims.generateFrameNumbers('wcmb1', {start:6, end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmb2Anim',frames: this.anims.generateFrameNumbers('wcmb2', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmb2Anim2',frames: this.anims.generateFrameNumbers('wcmb2', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmb2Anim3',frames: this.anims.generateFrameNumbers('wcmb2', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmb2Anim4',frames: this.anims.generateFrameNumbers('wcmb2', {start:0, end: 1}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmb3Anim',frames: this.anims.generateFrameNumbers('wcmb3', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmb3Anim2',frames: this.anims.generateFrameNumbers('wcmb3', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmb3Anim3',frames: this.anims.generateFrameNumbers('wcmb3', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmb3_dotsAnim',frames: this.anims.generateFrameNumbers('wcmb3_dots', {start:0, end: 3}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmv1Anim',frames: this.anims.generateFrameNumbers('wcmv1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmv1Anim2',frames: this.anims.generateFrameNumbers('wcmv1', {start:5, end: 6}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmv1Anim3',frames: this.anims.generateFrameNumbers('wcmv1', {start:7, end: 8}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmv2Anim',frames: this.anims.generateFrameNumbers('wcmv2', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmv2Anim2',frames: this.anims.generateFrameNumbers('wcmv2', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmv2Anim3',frames: this.anims.generateFrameNumbers('wcmv2', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmv2Anim4',frames: this.anims.generateFrameNumbers('wcmv2', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmv2Anim5',frames: this.anims.generateFrameNumbers('wcmv2', {start:0, end: 1}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcmr1Anim',frames: this.anims.generateFrameNumbers('wcmr1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmr1Anim2',frames: this.anims.generateFrameNumbers('wcmr1', {start:2, end: 7}), frameRate: 6, repeat: 0});
    this.anims.create({key:'wcmr1Anim3',frames: this.anims.generateFrameNumbers('wcmr1', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcmr1Anim4',frames: this.anims.generateFrameNumbers('wcmr1', {start:6, end: 7}), frameRate: 3, repeat: -1});


    this.anims.create({key:'wcms1Anim',frames: this.anims.generateFrameNumbers('wcms1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcms1Anim2',frames: this.anims.generateFrameNumbers('wcms1', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcms1Anim3',frames: this.anims.generateFrameNumbers('wcms1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcms1Anim4',frames: this.anims.generateFrameNumbers('wcms1', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcms1Anim5',frames: this.anims.generateFrameNumbers('wcms1', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcl1Anim',frames: this.anims.generateFrameNumbers('wcl1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcl1Anim2',frames: this.anims.generateFrameNumbers('wcl1', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcl1Anim3',frames: this.anims.generateFrameNumbers('wcl1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcl1Anim4',frames: this.anims.generateFrameNumbers('wcl1', {start:6, end: 8}), frameRate: 4, repeat: -1});

    this.anims.create({key:'wcl_LlungAnim',frames: this.anims.generateFrameNumbers('wcl_Llung', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcl_LlungAnim2',frames: this.anims.generateFrameNumbers('wcl_Llung', {start:2, end: 4}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcl_RlungAnim',frames: this.anims.generateFrameNumbers('wcl_Rlung', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcl_RlungAnim2',frames: this.anims.generateFrameNumbers('wcl_Rlung', {start:2, end: 4}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcl2Anim',frames: this.anims.generateFrameNumbers('wcl2', {start:0, end: 5}), frameRate: 6, repeat: 0});
    this.anims.create({key:'wcl2Anim2',frames: this.anims.generateFrameNumbers('wcl2', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcl2Anim3',frames: this.anims.generateFrameNumbers('wcl2', {start:6, end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcs1Anim',frames: this.anims.generateFrameNumbers('wcs1', {start:8, end: 9}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcs1Anim2',frames: this.anims.generateFrameNumbers('wcs1', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcs1Anim3',frames: this.anims.generateFrameNumbers('wcs1', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcs1Anim4',frames: this.anims.generateFrameNumbers('wcs1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcs1Anim5',frames: this.anims.generateFrameNumbers('wcs1', {start:6, end: 7}), frameRate: 3, repeat: -1});

    this.anims.create({key:'wcs2Anim',frames: this.anims.generateFrameNumbers('wcs2', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcs2Anim2',frames: this.anims.generateFrameNumbers('wcs2', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'wcs2Anim3',frames: this.anims.generateFrameNumbers('wcs2', {start:2, end: 3}), frameRate: 3, repeat: -1});

    this.anims.create({key:'creditsAnim',frames: this.anims.generateFrameNumbers('credits', {start:0, end: 1}), frameRate: 3, repeat: -1});
    this.anims.create({key:'creditsAnim2',frames: this.anims.generateFrameNumbers('credits', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'creditsAnim3',frames: this.anims.generateFrameNumbers('credits', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'creditsAnim4',frames: this.anims.generateFrameNumbers('credits', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'creditsAnim5',frames: this.anims.generateFrameNumbers('credits', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'titleAnim',frames: this.anims.generateFrameNumbers('titleScreen', {start:0, end: 5}), frameRate: 9, repeat: 0});
    this.anims.create({key:'titleAnim2',frames: this.anims.generateFrameNumbers('titleScreen', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'titleAnim3',frames: this.anims.generateFrameNumbers('titleScreen', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra6e1Anim',frames: this.anims.generateFrameNumbers('dra6e1', {start:0, end: 3}), frameRate: 6, repeat: -1});
    this.anims.create({key:'dra6e1Anim2',frames: this.anims.generateFrameNumbers('dra6e1', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6e1Anim3',frames: this.anims.generateFrameNumbers('dra6e1', {start:6, end: 7}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6e1Anim4',frames: this.anims.generateFrameNumbers('dra6e1', {start:8, end: 9}), frameRate: 3, repeat: -1});

    this.anims.create({key:'dra6e2Anim',frames: this.anims.generateFrameNumbers('dra6e2', {start:4, end: 5}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6e2Anim2',frames: this.anims.generateFrameNumbers('dra6e2', {start:2, end: 3}), frameRate: 3, repeat: -1});
    this.anims.create({key:'dra6e2Anim3',frames: this.anims.generateFrameNumbers('dra6e2', {start:0, end: 1}), frameRate: 3, repeat: -1});

    //create bg animations
    this.anims.create({key:'t_bgAnim',frames: this.anims.generateFrameNumbers('t_bg', {start: 0, end: 2}), frameRate: 3, repeat: -1});

  }

  update(){
  }
}
