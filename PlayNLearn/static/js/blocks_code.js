
    Blockly.JavaScript['move_forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = block.getFieldValue('move_forward');
  alert("kuch b");
  var code="move();";
  //$.getscript("+"game1.js"+",function (){move();});
  //var code="var elm =document.getElementById('anch')";
  //var myCode="myMove(); function myMove(){var elem = document.getElementById('pegman'); var pos = 0; var id = setInterval(frame, 20); function frame() { if (pos == 350) { clearInterval(id);} else {pos++; elem.style.top = pos + 'px'; elem.style.left = pos + 'px';}}}"
  //var code1=document.getElementById('pegman').style.margin-left:200;
  return code;
};

Blockly.JavaScript['moveleft'] = function(block) {
  var dropdown_name = block.getFieldValue('moveleft');
  // TODO: Assemble JavaScript into code variable.
  var code ;
  if (dropdown_name=='left') {
    code='left';
  }
  else
    code='right'
  return code;
};

Blockly.JavaScript['moveright'] = function(block) {
  var dropdown_right = block.getFieldValue('right');
  // TODO: Assemble JavaScript into code variable.
  var code ;
  if (dropdown_name=='right') {
    code='right';
  }
  else
    code='left';
  return code;
};

Blockly.JavaScript['repeat_until'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['if_else'] = function(block) {
  var dropdown_if_else = block.getFieldValue('if_else');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['if'] = function(block) {
  var dropdown_path_toward = block.getFieldValue('path_toward');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


function moveForward(idStr, xOffset, yOffset) {
var domElemnt = document.getElementById(idStr);
    if (domElemnt) {
        var transformAttr = ' translate(' + xOffset + ',' + yOffset + ')';
        domElemnt.setAttribute('transform', transformAttr);
    }
}