
  function updateGoner(head_id,body_id,legs_id){

    var input_head = $(`input[name=_${head_id}]`);
    var input_body = $(`input[name=_${body_id}]`);
    var input_legs = $(`input[name=_${legs_id}]`);

    if(input_head.val() < 0){
      input_head.val(0);
    }
    if(input_head.val() > 7){
      input_head.val(7);
    }


    if(input_body.val() < 0){
      input_body.val(0);
    }
    if(input_body.val() > 5){
      input_body.val(5);
    }


    if(input_legs.val() < 0){
      input_legs.val(0);
    }
    if(input_legs.val() > 4){
      input_legs.val(4);
    }




    $("#goner_head").css({
      "background-image":`url('images/GONER/IMAGE_GONERHEAD_${input_head.val()}.png')`
    });
    $("#goner_body").css({
      "background-image":`url('images/GONER/IMAGE_GONERBODY_${input_body.val()}.png')`
    });
    $("#goner_legs").css({
      "background-image":`url('images/GONER/IMAGE_GONERLEGS_${input_legs.val()}.png')`
    });





  }
