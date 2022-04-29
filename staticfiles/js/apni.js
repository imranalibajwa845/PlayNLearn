
	Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("move the player forward one space");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveleft'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("turn the player towards left");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"]]), "right");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("turn the player towards right");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['repeat_until'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("repeat until");
    this.appendDummyInput()
        .appendField("destination");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("Repeat the enclosed blocks until destination");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if path");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ahead","ahead"], ["to the left","left"], ["to the right","right"]]), "if_else");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("else");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("if the path is in specific direction, then do some  action.Otherwise do something else");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if path");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ahead","OPTIONNAME"], ["left","left"], ["right","right"]]), "path_toward");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("if the path is in specific direction, then do some  action");
 this.setHelpUrl("");
  }
};