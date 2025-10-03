
var disabledColor = `#777777`;

function generateSelectCh1(_id,_title,_default,_data,_class){



  var disabled = false;
  var _class = _class || ``;

  if(_default == 0 && _class.indexOf('grey_disable') != -1){
    disabled = true;
  }

  var select = `<span class='lineItem ${_class}'><span class='selectTitle'>${_title}</span> <select ${(disabled ? `style="color:${disabledColor}"` : ``)} name="${_id}">`

  var option_class = "";





  if(_id == "_10317"){
    var isRoom = false;
    var _newRoomID = 0


    for(var i = 0; i < rooms.length; i++){
      if(rooms[i].value == _default){
        isRoom = true;
        //select += `<option class='${option_class}' value=${rooms[i].value} selected="selected">${rooms[i].text}</option>`;
      }
    }
    if(!isRoom){

      for(var i = 0; i < rooms_all.length; i++){
        if(rooms_all[i].value == _default){
          _newRoomID = i;
        }
      }
      try {

      select += `<option class='${option_class}' value=${rooms_all[_newRoomID].value} selected="selected">${rooms_all[_newRoomID].text}</option>`;

      } catch (exceptionVar) {
            return `<font size=3>INVALID ROOM ID. ROOMS HAVE NOT BEEN PROCESSED YET.</font>`;
      }

    }
  }





  for(var i = 0; i < _data.length; i++){
    option_class = "";
    select += `
    <option class='${option_class}' value=${_data[i].value}${(_data[i].value == _default ? ` selected="selected"` : ``)}>${_data[i].text}</option>
    `;
  }


  select += `</select></span>`;

  return select;
}





function generateSelectCh2(_id,_title,_default,_data,_class){


  var disabled = false;
  var _class = _class || ``;

  if(_default == 0 && _class.indexOf('grey_disable') != -1){
    disabled = true;
  }

  var select = `<span class='lineItem ${_class}'><span class='selectTitle'>${_title}</span> <select ${(disabled ? `style="color:${disabledColor}"` : ``)} name="${_id}">`

  var option_class = "";


  if(_id == "_3054"){
    var isRoom = false;
    var _newRoomID = 0


    for(var i = 0; i < rooms.length; i++){
      if(rooms[i].value == _default){
        isRoom = true;
        //select += `<option class='${option_class}' value=${rooms[i].value} selected="selected">${rooms[i].text}</option>`;
      }
    }
    if(!isRoom){

      for(var i = 0; i < rooms_all.length; i++){
        if(rooms_all[i].value == _default){
          _newRoomID = i;
        }
      }
      try {

      select += `<option class='${option_class}' value=${rooms_all[_newRoomID].value} selected="selected">${rooms_all[_newRoomID].text}</option>`;

      } catch (exceptionVar) {
            return `<font size=3>INVALID ROOM ID. ROOMS HAVE NOT BEEN PROCESSED YET.</font>`;
      }

    }
  }

  for(var i = 0; i < _data.length; i++){
    option_class = "";
    if(_id == "_1353" || _id == "_1354" || _id == "_1355" || _id == "_1356"){
      for(var j = 0; j < unused_recruits.length; j++){
        if(_data[i].value == unused_recruits[j]){
          option_class += 'unused_recruit_cafe'
        }
      }
    }
    select += `
    <option class='${option_class}' value=${_data[i].value}${(_data[i].value == _default ? ` selected="selected"` : ``)}>${_data[i].text}</option>
    `;
  }

  select += `</select></span>`;

  return select;
}



function generateSelect(_id,_title,_default,_data,_class){

  var disabled = false;
  var _class = _class || ``;

  if(_default == 0 && _class.indexOf('grey_disable') != -1){
    disabled = true;
  }

  var select = `<span class='lineItem ${_class}'><span class='selectTitle'>${_title}</span> <select ${(disabled ? `style="color:${disabledColor}"` : ``)} name="${_id}">`

  for(var i = 0; i < _data.length; i++){
    select += `
    <option class='${option_class}' value=${_data[i].value}${(_data[i].value == _default ? ` selected="selected"` : ``)}>${_data[i].text}</option>
    `;
  }

  select += `</select></span>`;

  return select;
}

function generateRangeInput(_id,_title,_default,_data,_class){
  var _class = _class || ``;
  var range = `<span class='lineItem ${_class}'><span class='selectTitle'>${_title}</span> <input type="range" name="${_id}" min="${_data.min}" max="${_data.max}" step="1" value="${_default}"></span>`

  return range;
}

function generateNumberInput(_id,_title,_default,_data,_class){
  var _class = _class || ``;
  var range = `<span class='lineItem ${_class}'><span class='selectTitle'>${_title}</span> <input type="number" name="${_id}" min="${_data.min}" max="${_data.max}" step="1" value="${_default}"></span>`

  return range;
}


function generateTextInput(_id,_title,_default,_data,_class){
  var _class = _class || ``;
  var range = `<span class='lineItem ${_class}'><span class='selectTitle'>${_title}</span> <input type="text" name="${_id}" max="${_data.length}" value="${_default}"></span>`

  return range;
}


function generateTextboxInput(_id,_title,_default,_data,_class){
  var checked = true;

  var _data = _data || {};
  var _off = "0";
  var _on = "1";
  if(_data.off){
    _off = _data.off;
  }
  if(_data.on){
    _on = _data.on;
  }
  if(_default == 0 || _default == _off){
    checked = false;
  }
  var _class = _class || ``;
  var range = `<label class='lineItem ${_class}' ${(checked ? `` : `style="color:${disabledColor}"`)}><input off="${_off}" on="${_on}" type="checkbox" name="${_id}" ${(checked ? "checked" : "")}> <span class='selectTitle'>${_title}</span></label>`

  return range;
}
