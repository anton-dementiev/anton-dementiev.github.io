LQ.Text = function(text, size, x, y, align, tint) {
    PIXI.BitmapText.call(this, text, {font: parseInt(size) + "px LiquidFont", align: align || "left"});
    this.x = x;
    this.y = y;
    if(tint) this.tint = tint;
    this.updateText();
};

extend(LQ.Text, PIXI.BitmapText);