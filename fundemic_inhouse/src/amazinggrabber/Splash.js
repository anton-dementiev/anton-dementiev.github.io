AG.Splash = function(soul) {
    GodStep.Frame.call(this, 'Splash');
    GodStep.IDownUp.call(this, soul.W, soul.H);

    this.soul = soul;
    this.timer = 70;
    this.visible = false;
    this.addChild(this.back = new AG.Img('splash', soul.startS * 1, soul.W/2, soul.H *.5, 0.5));
  //  this.back.scale.x = this.back.scale.y = soul.startS * soul.W/this.back.texture.width ;

};
extend(AG.Splash, GodStep.Frame);

pro.update = function() {
    if(this.visible) {
        this.timer--;
        if(this.timer == 0) {
            this.soul.screenTo([this.soul.startmenu, this.soul.background], this);
        }
    }
};

pro.init = function() {
    this.visible = true;
};