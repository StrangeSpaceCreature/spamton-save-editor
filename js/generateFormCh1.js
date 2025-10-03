





  function generateForm(data){
    var formString = "";

    //File Data
    formString += `<div id='tab_main' class='tab'>`;

    formString += "<div id='main_box'>";
    formString += "Main<br>";
    formString += generateTextInput(`_1`,"Filename",data[`_1`],[{length:10}],'filename');
    formString += generateNumberInput(`_11`,"D$",data[`_11`],{min:0,max:99999},'flag');
    formString += generateSelectCh1(`_10317`,"Room ID",data[`_10317`],roomsCh1,'room_id');
    formString += `<label class='lineItem'><input type="checkbox" name="show_all_rooms" noinput="true"> Show all rooms</label><br>`

    formString += generateNumberInput(`_10316`,"Story Flag",data[`_10316`],{min:0,max:205},'flag');

    formString += generateTextboxInput(`_16`,`Dark World Flag`,data[`_16`],{min:0,max:1},``);


    formString += "</div>";








    //Lightworld Kris stats
    formString += "<div id='lightworld_box'>";
    formString += `<img src='images/KrisLight.png'> Lightworld "Kris"<br>`;
    formString += generateNumberInput(`_294`,"$",data[`_294`],{min:0,max:99999},'flag');
    formString += "<br>";
    formString += generateNumberInput(`_295`,"HP",data[`_295`],{min:-99999,max:99999},'character_hp');
    formString += " / ";
    formString += generateNumberInput(`_296`,"",data[`_296`],{min:-99999,max:99999},'character_hp');
    formString += "<br>";

    formString += `<div class='stats_block'>`

    formString += generateNumberInput(`_293`,"LV<br>",data[`_293`],{min:-99999,max:99999},'stat');
    formString += generateNumberInput(`_292`,"EXP<br>",data[`_292`],{min:-99999,max:99999},'stat');


    formString += generateNumberInput(`_297`,"AT<br>",data[`_297`],{min:-99999,max:99999},'stat');
    formString += generateNumberInput(`_298`,"DF<br>",data[`_298`],{min:-99999,max:99999},'stat');


    formString += `</div>`


    formString += generateSelectCh1(`_290`,"WEAPON: ",data[`_290`],lightworld_weaponsCh1,'grey_disable');
    formString += "<br>";
    formString += generateSelectCh1(`_291`,"ARMOR: ",data[`_291`],lightworld_armorCh1,'grey_disable');

    formString += "</div>";




      formString += `</div>`;
      formString += `<div id='tab_party' class='tab'>`;


      //Party Box
      formString += "<div id='party_box'>";
      formString += `Party<br>`;
      formString += `<div id='party_display'></div>`



      formString += generateSelectCh1(`_8`,"Member 1: ",data[`_8`],party_members,'party_member_1 grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_9`,"Member 2: ",data[`_9`],party_members,'party_member_2 grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_10`,"Member 3: ",data[`_10`],party_members,'party_member_3 grey_disable');
      formString += "<br>";

      formString += `<label class='lineItem'><input type="checkbox" name="allow_broken_party" noinput="true"> Allow broken party</label><br>`
      formString += "</div>";




      formString += "<div id='character_wrapper'>";
      //Kris stats
      formString += "<div class='character_box'>";
      formString += "<div class='character_name'><img src='images/Kris.png'> Kris</div><div id='status_kris'></div><br>";

      formString += generateNumberInput(`_71`,"HP",data[`_71`],{min:-99999,max:99999},'character_hp');
      formString += " / ";
      formString += generateNumberInput(`_72`,"",data[`_72`],{min:-99999,max:99999},'character_hp');
      formString += "<br>";

      formString += `<div class='stats_block'>`

      formString += generateNumberInput(`_73`,"ATK<br>",data[`_73`],{min:-99999,max:99999},'stat');
      formString += generateNumberInput(`_74`,"DEF<br>",data[`_74`],{min:-99999,max:99999},'stat');
      formString += generateNumberInput(`_75`,"MAG<br>",data[`_75`],{min:-99999,max:99999},'stat');


      formString += `</div>`


      formString += generateSelectCh1(`_77`,"<img src='images/Sword.png'>",data[`_77`],weaponsCh1,'grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_78`,"<img src='images/Armor1.png'>",data[`_78`],armorCh1,'grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_79`,"<img src='images/Armor2.png'>",data[`_79`],armorCh1,'grey_disable');
      formString += "<br><hr>";
      formString += "<div class='spells_title'><center>v  Spells  v</center></div>";

      formString += "<div class='spell_wrapper'>"
      for(var i = 0; i < 6; i++){
        formString += generateSelectCh1(`_${i+113}`,`Spell ${i+1} `,data[`_${i+113}`],spellsCh1,'spell_slot grey_disable');
      }

      formString += "</div>";
      formString += "</div>";





      //Susie stats
      formString += "<div class='character_box'>";
      formString += "<div class='character_name'><img src='images/Susie.png'> Susie</div><div id='status_susie'></div><br>";
      formString += generateNumberInput(`_125`,"HP",data[`_125`],{min:-99999,max:99999},'character_hp');
      formString += " / ";
      formString += generateNumberInput(`_126`,"",data[`_126`],{min:-99999,max:99999},'character_hp');
      formString += "<br>";

      formString += `<div class='stats_block'>`

      formString += generateNumberInput(`_127`,"ATK<br>",data[`_127`],{min:-99999,max:99999},'stat');
      formString += generateNumberInput(`_128`,"DEF<br>",data[`_128`],{min:-99999,max:99999},'stat');
      formString += generateNumberInput(`_129`,"MAG<br>",data[`_129`],{min:-99999,max:99999},'stat');


      formString += `</div>`


      formString += generateSelectCh1(`_131`,"<img src='images/Axe.png'>",data[`_131`],weaponsCh1,'grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_132`,"<img src='images/Armor1.png'>",data[`_132`],armorCh1,'grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_133`,"<img src='images/Armor2.png'>",data[`_133`],armorCh1,'grey_disable');
      formString += "<br><hr>";
      formString += "<div class='spells_title'><center>v  Spells  v</center></div>";

      formString += "<div class='spell_wrapper'>"
      for(var i = 0; i < 6; i++){
        formString += generateSelectCh1(`_${i+167}`,`Spell ${i+1} `,data[`_${i+167}`],spellsCh1,'spell_slot grey_disable');
      }

      formString += "</div>";
      formString += "</div>";




      //Ralsei stats
      formString += "<div class='character_box'>";
      formString += "<div class='character_name'><img src='images/Ralsei.png'> Ralsei</div><div id='status_ralsei'></div><br>";
      formString += generateNumberInput(`_179`,"HP",data[`_179`],{min:-99999,max:99999},'character_hp');
      formString += " / ";
      formString += generateNumberInput(`_180`,"",data[`_180`],{min:-99999,max:99999},'character_hp');
      formString += "<br>";

      formString += `<div class='stats_block'>`

      formString += generateNumberInput(`_181`,"ATK<br>",data[`_181`],{min:-99999,max:99999},'stat');
      formString += generateNumberInput(`_182`,"DEF<br>",data[`_182`],{min:-99999,max:99999},'stat');
      formString += generateNumberInput(`_183`,"MAG<br>",data[`_183`],{min:-99999,max:99999},'stat');


      formString += `</div>`


      formString += generateSelectCh1(`_185`,"<img src='images/Scarf.png'>",data[`_185`],weaponsCh1,'grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_186`,"<img src='images/Armor1.png'>",data[`_186`],armorCh1,'grey_disable');
      formString += "<br>";
      formString += generateSelectCh1(`_187`,"<img src='images/Armor2.png'>",data[`_187`],armorCh1,'grey_disable');
      formString += "<br><hr>";
      formString += "<div class='spells_title'><center>v  Spells  v</center></div>";

      formString += "<div class='spell_wrapper'>"
      for(var i = 0; i < 6; i++){
        formString += generateSelectCh1(`_${i+221}`,`Spell ${i+1} `,data[`_${i+221}`],spellsCh1,'spell_slot grey_disable');
      }

      formString += "</div>";
      formString += "</div>";





      formString += "</div>";




      formString += `</div>`;
      formString += `<div id='tab_items' class='tab'>`;



      formString += "<div id='item_box_wrapper'>";

      //Items
      formString += "<div class='item_box'>";
      formString += "Items<br>";
      formString += "<div id='item_wrapper'>";

      for(var i = 0; i < 12; i++){
        formString += generateSelectCh1(`_${(i*4)+236}`,`Slot ${i+1}<br>`,data[`_${(i*4)+236}`],itemsCh1,'item_slot grey_disable');
      }
      formString += "</div>";
      formString += "</div>";


      //Key Items
      formString += "<div class='item_box'>";
      formString += "Key Items<br>";
      formString += "<div id='item_wrapper'>";
      for(var i = 0; i < 12; i++){
        formString += generateSelectCh1(`_${(i*4)+237}`,`Slot ${i+1}<br>`,data[`_${(i*4)+237}`],key_itemsCh1,'item_slot grey_disable');
      }
      formString += "</div>";
      formString += "</div>";





      //Weapon Slots
      formString += "<div class='item_box'>";
      formString += "Weapons<br>";
      formString += "<div id='item_wrapper'>";
      for(var i = 0; i < 12; i++){
        formString += generateSelectCh1(`_${(i*4)+238}`,`Slot ${i+1}<br>`,data[`_${(i*4)+238}`],weaponsCh1,'item_slot grey_disable');
      }
      formString += "</div>";
      formString += "</div>";


      //Armor Slots
      formString += "<div class='item_box'>";
      formString += "Armor<br>";
      formString += "<div id='item_wrapper'>";
      for(var i = 0; i < 12; i++){
        formString += generateSelectCh1(`_${(i*4)+239}`,`Slot ${i+1}<br>`,data[`_${(i*4)+239}`],armorCh1,'item_slot grey_disable');
      }
      formString += "</div>";
      formString += "</div>";



      //Lightworld Items
      formString += "<div class='item_box'>";
      formString += "Lightworld Items<br>";
      formString += "<div id='item_wrapper'>";
      for(var i = 0; i < 8; i++){
        formString += generateSelectCh1(`_${(i*2)+301}`,`Slot ${i+1}<br>`,data[`_${(i*2)+301}`],lightworld_itemsCh1,'item_slot grey_disable');
      }
      formString += "</div>";
      formString += "</div>";


      

      //Phone Numbers
      formString += "<div class='item_box'>";
      formString += "Cell Phone<br>";
      formString += "<div id='item_wrapper'>";
      for(var i = 0; i < 8; i++){
        formString += generateSelectCh1(`_${(i*2)+302}`,`Slot ${i+1}<br>`,data[`_${(i*2)+302}`],phone_numbers,'item_slot grey_disable');
      }
      formString += "</div>";
      formString += "</div>";



      formString += "</div>";

      formString += `</div>`;
      formString += `<div id='tab_creations' class='tab'>`




      //Thrash your own ass




      formString += `<div id='thrash_box'>`;

      formString += `<center>Modify the Machine that<br>Thrashed Your Ass</center><br><br>`;
      formString += `<div id='thrash_flex'>`;
      formString += `<div id='thrash_left'>`;


      formString += `<div id='thrash_wrapper'>`;
      formString += `<div id='thrash_head_c' style="width:50px;height:50px;background-color:rgb(${_col1[0]},${_col1[1]},${_col1[2]});"></div>`;
      formString += `<div id='thrash_body_c' style="width:50px;height:50px;background-color:rgb(${_col2[0]},${_col2[1]},${_col2[2]});"></div>`;
      formString += `<div id='thrash_feet_c' style="width:50px;height:50px;background-color:rgb(${_col3[0]},${_col3[1]},${_col3[2]});"></div>`;
      formString += `<div id='thrash_head'></div>`;
      formString += `<div id='thrash_body'></div>`;
      formString += `<div id='thrash_feet'></div>`;
      formString += `<div id='thrash_feet2'></div>`;
      formString += `</div>`;
      formString += `</div>`;

      formString += `<div id='thrash_right'>`;


      formString += generateSelectCh1(`_537`,"",data[`_537`],thrasher_head_parts,'thrasher_select');
      formString += generateSelectCh1(`_538`,"",data[`_538`],thrasher_body_parts,'thrasher_select');
      formString += generateSelectCh1(`_539`,"",data[`_539`],thrasher_feet_parts,'thrasher_select');


      formString += generateRangeInput(`_540`,"H C",data[`_540`],{min:0,max:31},'hidden');
      formString += generateRangeInput(`_541`,"B C",data[`_541`],{min:0,max:31},'hidden');
      formString += generateRangeInput(`_542`,"F C",data[`_542`],{min:0,max:31},'hidden');

      formString += `</div>`;

      formString += `</div>`;

      formString += `<div id='thrash_head_c_slider'></div>`;
      formString += `<div id='thrash_body_c_slider'></div>`;
      formString += `<div id='thrash_feet_c_slider'></div>`;

      formString += `</div>`;




        //Goner
        formString += `<div id='goner_box'>`;

        formString += `<div id='goner_flex'>`;
        formString += `<div id='goner_left'>`;

        formString += `<center>Vessel Name<center>`;
        formString += generateTextInput(`_2`,"",data[`_2`],[{length:10}],'filename');
        formString += `<div id='goner_wrapper'>`;
        formString += `<div id='goner_head'></div>`;
        formString += `<div id='goner_body'></div>`;
        formString += `<div id='goner_legs'></div>`;

        formString += `</div>`;

        formString += `<div id='goner_vessel_input'>`;
        formString += generateNumberInput(`_1217`,"HEAD ",data[`_1217`],{min:0,max:7},'flag');
        formString += generateNumberInput(`_1218`,"BODY ",data[`_1218`],{min:0,max:5},'flag');
        formString += generateNumberInput(`_1219`,"LEGS ",data[`_1219`],{min:0,max:4},'flag');
        formString += `</div>`;
        formString += `</div>`;

        formString += `<div id='goner_right'>`;


        formString += generateSelectCh1(`_1220`,"What is its favorite food?<br>",data[`_1220`],goner_food);
        formString += generateSelectCh1(`_1221`,"Your favorite blood type?<br>",data[`_1222`],goner_blood);
        formString += generateSelectCh1(`_1222`,"What color does it like most?<br>",data[`_1222`],goner_color);
        formString += generateSelectCh1(`_1226`,"Please give it a gift.<br>",data[`_1226`],goner_gift);
        formString += generateSelectCh1(`_1223`,"How do you feel about your creation? (it will not hear.)<br>",data[`_1223`],goner_feel);


        formString += generateSelectCh1(`_1224`,"Have you answered honestly?<br>",data[`_1224`],[{value:0,text:`YES`},{value:1,text:`NO`}]);
        formString += generateSelectCh1(`_1225`,"You acknowledge the possibility of pain and seizure.<br>",data[`_1225`],[{value:0,text:`YES`},{value:1,text:`NO`}]);

        formString += `</div>`;
        formString += `</div>`;
        formString += `</div>`;


        formString += `</div>`;
        
        
        
        formString += `<div id="tab_hometown" class='tab'>`;
        //chapter 1 hometown flags
        formString += "<div id='flags_box'>";
        formString += "Spoken to Characters<br>";
        formString += generateSelectCh1(`_573`,"Talked to Berdly",data[`_573`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateSelectCh1(`_582`,"Talked to Catty",data[`_582`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateSelectCh1(`_587`,"Talked to Undyne",data[`_587`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateSelectCh1(`_588`,"Talked to Burgerpants",data[`_588`],[{value:0,text:`No`},{value:1,text:`Yes`},{value:2,text:`Seen dialogue`}],'');
        formString += generateSelectCh1(`_590`,"Talked to Sans",data[`_590`],[{value:0,text:`No`},{value:1,text:`Yes`},{value:2,text:`Talked about his brother`}],'');
        formString += generateSelectCh1(`_592`,"Rudy's Hospital Sink",data[`_592`],[{value:0,text:`Not interacted`},{value:1,text:`Interacted`}],'');
        formString += generateSelectCh1(`_593`,"Talked to Noelle",data[`_593`],[{value:0,text:`No`},{value:1,text:`Yes`},{value:2,text:`Talked about Susie`}],'');
        formString += "</div>";
        
        
        
        formString += "<div id='flags_box'>";
        formString += "Cutscenes<br>";
        formString += generateSelectCh1(`_572`,"Noelle Hospital Cutscene",data[`_572`],[{value:0,text:`Haven't seen`},{value:1,text:`Watched Cutscene`},{value:2,text:`Talked to Rudy`}],'');
        formString += generateSelectCh1(`_579`,"Asgore flower cutscene",data[`_579`],[{value:0,text:`Haven't seen`},{value:1,text:`Entered Flower Shop`},{value:2,text:`Recieved Bouquet`},{value:3,text:`Given Bouquet to Toriel`},{value:4,text:`Toriel threw Bouquet away`}],'');
        formString += generateSelectCh1(`_586`,"Alphys Alleyway Cutscene",data[`_586`],[{value:0,text:`Haven't seen`},{value:1,text:`Watched Cutscene`}],'');

        formString += "</div>";
        
        
        
        formString += "<div id='flags_box'>";
        formString += "Onion<br>";
        formString += generateSelectCh1(`_575`,"Talked to Onion",data[`_575`],[{value:0,text:`No`},{value:1,text:`Yes`},{value:2,text:`Became Friend`},{value:3,text:`Refused Friendship`}],'');
        formString += generateSelectCh1(`_576`,"Your Name",data[`_576`],[{value:0,text:`None`},{value:1,text:`Kris`},{value:2,text:`Hippopotamus`}],'grey_disable');
        formString += generateSelectCh1(`_577`,"Onion's Name",data[`_577`],[{value:0,text:`None`},{value:1,text:`Onion`},{value:2,text:`Beauty`},{value:3,text:`Asriel II`},{value:4,text:`Disgusting`}],'grey_disable');
        formString += "</div>";
        
        
        
        formString += "<div id='flags_box'>";
        formString += "Other<br>";
        formString += generateSelectCh1(`_574`,"Stuck fingers in Picnic Table",data[`_574`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateSelectCh1(`_578`,"Free Hot Chocolate",data[`_578`],[{value:0,text:`Unclaimed`},{value:1,text:`Claimed`}],'');
        formString += generateSelectCh1(`_589`,"Phonecall with Toriel",data[`_589`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateSelectCh1(`_591`,"Got Sans's Phone number",data[`_591`],[{value:0,text:`No`},{value:1,text:`Yes`},{value:1,text:`Called it`}],'');
        formString += generateNumberInput(`_594`,"Times entered house",data[`_594`],{min:0,max:8},'flag');


        formString += "</div>";
        
        
        
        formString += `</div>`;
        
        
        
        
        
        formString += `<div id="tab_other" class='tab'>`;

        //Misc chapter 1 flags

        formString += "<div class='flags_box'>";
        formString += "Other Flags<br>";
        formString += generateSelectCh1(`_423`,"Eaten Prison Moss",data[`_423`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateNumberInput(`_558`,"Jevil Quest (?)",data[`_558`],{min:0,max:7},'flag');
        formString += generateSelectCh1(`_571`,"The Original Starwalker",data[`_571`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateNumberInput(`_1228`,"Chapter 1 Eggs",data[`_1228`],{min:-99999,max:99999},'flag');
        formString += generateSelectCh1(`_569`,"Kris Inspected the Beds",data[`_569`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateSelectCh1(`_570`,"Spin Cake Received",data[`_570`],[{value:0,text:`No`},{value:1,text:`Yes`}],'');
        formString += generateSelectCh1(`_524`,"Thrown Away Manual",data[`_524`],[{value:0,text:`No`},{value:1,text:`Dropped once`},{value:2,text:`Thrown Away`}],'');
        formString += "</div>";




        formString += `</div>`;





    return formString;
  }
