
var thrasher_head = [
  {width:100,height:52,image:'spr_thrashweapon_laser_0.png'},
  {width:108,height:56,image:'spr_thrashweapon_sword_0.png'},
  {width:104,height:52,image:'spr_thrashweapon_flame_0.png'},
  {width:92,height:84,image:'spr_thrashweapon_duck_0.png'},
]


var thrasher_body = [
  {width:168,height:100,image:'spr_thrashbody_b_0.png'},
  {width:168,height:100,image:'spr_thrashbody_b_1.png'},
  {width:168,height:100,image:'spr_thrashbody_b_2.png'},
  {width:168,height:100,image:'spr_thrashbody_b_3.png'},
]


var thrasher_feet = [
  {width:136,height:44,image:'spr_thrashfoot_ch1_0.png'},
  {width:136,height:44,image:'spr_thrashfoot_ch1_1.png'},
  {width:136,height:44,image:'spr_thrashfoot_ch1_2.png'},
  {width:136,height:44,image:'spr_thrashfoot_ch1_3.png'},
]

  function GenerateThrasher(_head,_body,_feet,_c1,_c2,_c3){


    $("#thrash_head").css({
      "width":`${thrasher_head[_head].width}px`,
      "height":`${thrasher_head[_head].height}px`,
      "mask-image":`url('images/thrash/${thrasher_head[_head].image}')`,
      "background-image":`url('images/thrash/transparent/${thrasher_head[_head].image}')`,
      "background-color":`rgb(${_c1[0]},${_c1[1]},${_c1[2]})`,
    });


    $("#thrash_body").css({
      "width":`${thrasher_body[_body].width}px`,
      "height":`${thrasher_body[_body].height}px`,
      "mask-image":`url('images/thrash/${thrasher_body[_body].image}')`,
      "background-image":`url('images/thrash/transparent/${thrasher_body[_body].image}')`,
      "background-color":`rgb(${_c2[0]},${_c2[1]},${_c2[2]})`,
    });

    $("#thrash_feet").css({
      "width":`${thrasher_feet[_feet].width}px`,
      "height":`${thrasher_feet[_feet].height}px`,
      "mask-image":`url('images/thrash/${thrasher_feet[_feet].image}')`,
      "background-image":`url('images/thrash/transparent/${thrasher_feet[_feet].image}')`,
      "background-color":`rgb(${_c3[0]},${_c3[1]},${_c3[2]})`,
    });

    $("#thrash_feet2").css({
      "width":`${thrasher_feet[_feet].width}px`,
      "height":`${thrasher_feet[_feet].height}px`,
      "mask-image":`url('images/thrash/${thrasher_feet[_feet].image}')`,
      "background-image":`url('images/thrash/transparent/${thrasher_feet[_feet].image}')`,
      "background-color":`rgb(${_c3[0]},${_c3[1]},${_c3[2]})`,
      "display":`${(_feet == 2 ? "none" : "inherit")}`
    });


  }
