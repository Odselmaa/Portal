
var paper9 = Raphael('map9');
paper9.setViewBox(0, 0, '2600', '500', true);
paper9.setSize('100%', '100%');
var border = paper9.path("M46,238l9-96H212V94H333v50H552L571,29H782l22,114,436-1-13-67h111l-12,69h413l19-115h214l21,112h197V94h124v49h151l11,97v34l-9,97L54,372l-7-98Z");
border.attr({ id: 'border', class: 'cls-2', 'stroke-width': outer_border_width, 'stroke':    outer_border_color, 'stroke-opacity': '1',  }).data('id', 'border');


var rt_stair = paper9.rect(2206, 108, 96, 39);
rt_stair.attr({ id: 'rt_stair', class: 'cls-1', x: '2206', y: '108', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'rt_stair');
var lt_stair = paper9.rect(222, 106, 102, 39);
lt_stair.attr({ id: 'lt_stair', class: 'cls-1', x: '222', y: '106', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'lt_stair');
var ll_lift = paper9.path("M570,126l14-82h59l-12,82H570Z");
ll_lift.attr({ id: 'll_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'll_lift');
var ll_stair = paper9.path("M570,126h61l-11,73H556Z");
ll_stair.attr({ id: 'll_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'll_stair');
var lr_lift = paper9.path("M786,126L772,44H713l12,82h61Z");
lr_lift.attr({ id: 'lr_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'lr_lift');
var lr_stair = paper9.path("M786,126H725l11,73h64Z");
lr_stair.attr({ id: 'lr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'lr_stair');
var rl_lift = paper9.path("M1759,126l14-82h59l-12,82h-61Z");
rl_lift.attr({ id: 'rl_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'rl_lift');
var rl_stair = paper9.path("M1759,126h60l-10,73h-64Z");
rl_stair.attr({ id: 'rl_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'rl_stair');
var rr_lift = paper9.path("M1975,126l-14-82h-59l12,82h61Z");
rr_lift.attr({ id: 'rr_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'rr_lift');
var rr_stair = paper9.path("M1975,126h-60l10,73h64Z");
rr_stair.attr({ id: 'rr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'rr_stair');
var ml_stair = paper9.path("M1243,99h22l11,45h-23Z");
ml_stair.attr({ id: 'ml_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'ml_stair');
var mr_stair = paper9.path("M1324,99h-22l-11,45h23Z");
mr_stair.attr({ id: 'mr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'mr_stair');
var lt_lift2 = paper9.rect(2252, 157, 51, 35);
lt_lift2.attr({ id: 'lt_lift-2', "data-name": 'lt_lift', class: 'cls-1', x: '2252', y: '157', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'lt_lift2');

var path_a = paper9.path("M1886,197h39");
path_a.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_a');
var path_b = paper9.path("M620,198h43");
path_b.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_b');
var _0 = paper9.path("M253,107v36");
_0.attr({ id: '_0', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_0');
var _1 = paper9.path("M258,107v36");
_1.attr({ id: '_1', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_1');
var _2 = paper9.path("M263,107v36");
_2.attr({ id: '_2', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_2');
var _3 = paper9.path("M268,107v36");
_3.attr({ id: '_3', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_3');
var _4 = paper9.path("M273,107v36");
_4.attr({ id: '_4', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_4');
var _5 = paper9.path("M278,107v36");
_5.attr({ id: '_5', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_5');
var _6 = paper9.path("M283,107v36");
_6.attr({ id: '_6', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_6');
var _7 = paper9.path("M288,107v36");
_7.attr({ id: '_7', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_7');
var _8 = paper9.path("M293,107v36");
_8.attr({ id: '_8', "data-name": '8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_8');
var _9 = paper9.path("M298,107v36");
_9.attr({ id: '_9', "data-name": '9', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_9');
var _02 = paper9.path("M2238,110v36");
_02.attr({ id: '_0-2', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_02');
var _12 = paper9.path("M2243,110v36");
_12.attr({ id: '_1-2', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_12');
var _22 = paper9.path("M2248,110v36");
_22.attr({ id: '_2-2', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_22');
var _32 = paper9.path("M2253,110v36");
_32.attr({ id: '_3-2', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_32');
var _42 = paper9.path("M2258,110v36");
_42.attr({ id: '_4-2', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_42');
var _52 = paper9.path("M2263,110v36");
_52.attr({ id: '_5-2', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_52');
var _62 = paper9.path("M2268,110v36");
_62.attr({ id: '_6-2', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_62');
var _72 = paper9.path("M2273,110v36");
_72.attr({ id: '_7-2', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_72');
var _82 = paper9.path("M2278,110v36");
_82.attr({ id: '_8-2', "data-name": '8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_82');
var _92 = paper9.path("M2283,110v36");
_92.attr({ id: '_9-2', "data-name": '9', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_92');
var _03 = paper9.path("M1247,110h19");
_03.attr({ id: '_0-3', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_03');
var _13 = paper9.path("M1249,115h19");
_13.attr({ id: '_1-3', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_13');
var _23 = paper9.path("M1249,120h19");
_23.attr({ id: '_2-3', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_23');
var _33 = paper9.path("M1251,125h19");
_33.attr({ id: '_3-3', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_33');
var _43 = paper9.path("M1253,130h19");
_43.attr({ id: '_4-3', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_43');
var _04 = paper9.path("M1320,112h-19");
_04.attr({ id: '_0-4', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_04');
var _14 = paper9.path("M1318,117h-19");
_14.attr({ id: '_1-4', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_14');
var _24 = paper9.path("M1317,122h-19");
_24.attr({ id: '_2-4', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_24');
var _34 = paper9.path("M1316,127h-19");
_34.attr({ id: '_3-4', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_34');
var _44 = paper9.path("M1314,132h-19");
_44.attr({ id: '_4-4', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_44');
var _05 = paper9.path("M568,148h58");
_05.attr({ id: '_0-5', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_05');
var _15 = paper9.path("M567,153h58");
_15.attr({ id: '_1-5', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_15');
var _25 = paper9.path("M566,158h58");
_25.attr({ id: '_2-5', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_25');
var _35 = paper9.path("M565,163h58");
_35.attr({ id: '_3-5', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_35');
var _45 = paper9.path("M564,168h58");
_45.attr({ id: '_4-5', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_45');
var _53 = paper9.path("M563,173h58");
_53.attr({ id: '_5-3', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_53');
var _63 = paper9.path("M562,178h58");
_63.attr({ id: '_6-3', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_63');
var _73 = paper9.path("M561,183h58");
_73.attr({ id: '_7-3', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_73');
var _06 = paper9.path("M788,150H730");
_06.attr({ id: '_0-6', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_06');
var _16 = paper9.path("M789,155H731");
_16.attr({ id: '_1-6', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_16');
var _26 = paper9.path("M790,160H732");
_26.attr({ id: '_2-6', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_26');
var _36 = paper9.path("M791,165H733");
_36.attr({ id: '_3-6', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_36');
var _46 = paper9.path("M792,170H734");
_46.attr({ id: '_4-6', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_46');
var _54 = paper9.path("M793,175H735");
_54.attr({ id: '_5-4', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_54');
var _64 = paper9.path("M794,180H736");
_64.attr({ id: '_6-4', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_64');
var _74 = paper9.path("M795,185H737");
_74.attr({ id: '_7-4', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_74');
var _07 = paper9.path("M1757,150h58");
_07.attr({ id: '_0-7', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_07');
var _17 = paper9.path("M1756,155h58");
_17.attr({ id: '_1-7', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_17');
var _27 = paper9.path("M1755,160h58");
_27.attr({ id: '_2-7', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_27');
var _37 = paper9.path("M1754,165h58");
_37.attr({ id: '_3-7', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_37');
var _47 = paper9.path("M1753,170h58");
_47.attr({ id: '_4-7', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_47');
var _55 = paper9.path("M1752,175h58");
_55.attr({ id: '_5-5', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_55');
var _65 = paper9.path("M1751,180h58");
_65.attr({ id: '_6-5', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_65');
var _75 = paper9.path("M1750,185h58");
_75.attr({ id: '_7-5', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_75');
var _08 = paper9.path("M1977,151h-58");
_08.attr({ id: '_0-8', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_08');
var _18 = paper9.path("M1978,156h-58");
_18.attr({ id: '_1-8', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_18');
var _28 = paper9.path("M1979,161h-58");
_28.attr({ id: '_2-8', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_28');
var _38 = paper9.path("M1980,166h-58");
_38.attr({ id: '_3-8', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_38');
var _48 = paper9.path("M1981,171h-58");
_48.attr({ id: '_4-8', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_48');
var _56 = paper9.path("M1982,176h-58");
_56.attr({ id: '_5-6', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_56');
var _66 = paper9.path("M1983,181h-58");
_66.attr({ id: '_6-6', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_66');
var _76 = paper9.path("M1984,186h-58");
_76.attr({ id: '_7-6', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', '_76');
var path_c = paper9.path("M696,198h41");
path_c.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_c');
var path_d = paper9.path("M1206,157h50");
path_d.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_d');



var path_e = paper9.path("M1313,157h48");
path_e.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_e');
var path_f = paper9.path("M1208,176h22");
path_f.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_f');
var path_g = paper9.path("M1238,176h94");
path_g.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_g');
var path_h = paper9.path("M1341,176h21");
path_h.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_h');
var path_i = paper9.path("M1808,197h45");
path_i.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',  }).data('id', 'path_i');



var _901 = paper9.path("M58.988,275l7.906,84H142V275H58.988Z");
_901.attr({id: '_901',"data-name": '601',class: 'cls-2','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '901');
var _902 = paper9.path("M58,241l7.906-84h75.106v84H58Z");
_902.attr({id: '_902',"data-name": '602',class: 'cls-2','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '902');
var _903 = paper9.rect(143, 275, 84, 84);
_903.attr({id: '_903',"data-name": '603',class: 'cls-1',x: '143',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '903');
var _904 = paper9.rect(143, 157, 83, 84);
_904.attr({id: '_904',"data-name": '604',class: 'cls-1',x: '143',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '904');
var _907 = paper9.rect(228, 275, 40, 84);
_907.attr({id: '_907',"data-name": '607',class: 'cls-1',x: '228',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '907');
var lt_lift = paper9.rect(227, 157, 50, 36);
lt_lift.attr({id: 'lt_lift',class: 'cls-1',x: '227',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', 'lt_lift');
var _906 = paper9.rect(322, 156, 74, 81);
_906.attr({id: '_906',"data-name": '606',class: 'cls-1',x: '322',y: '156','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '906');
var _906a = paper9.rect(322, 239, 74, 62);
_906a.attr({id: '_906a',"data-name": '906a',class: 'cls-1',x: '322',y: '239','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '906a');
var _908 = paper9.rect(397, 156, 127, 145);
_908.attr({id: '_908',"data-name": '908',class: 'cls-1',x: '397',y: '156','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '_908');
var _910 = paper9.rect(525, 156, 32, 70);
_910.attr({id: '_910',"data-name": '610',class: 'cls-1',x: '525',y: '156','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '910');
var _910a = paper9.rect(525, 228, 32, 73);
_910a.attr({id: '_910a',"data-name": '610a',class: 'cls-1',x: '525',y: '228','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '910a');
var _911 = paper9.rect(625, 275, 84, 84);
_911.attr({id: '_911',"data-name": '611',class: 'cls-1',x: '625',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '911');
var _913 = paper9.rect(714, 275, 87, 84);
_913.attr({id: '_913',"data-name": '613',class: 'cls-1',x: '714',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '913');
var _915 = paper9.rect(803, 275, 81, 84);
_915.attr({id: '_915',"data-name": '615',class: 'cls-1',x: '803',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '915');
var toilet9M = paper9.rect(798, 157, 84, 84);
toilet9M.attr({id: 'toilet9M',class: 'cls-1',x: '798',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', 'toilet9M');
var _917 = paper9.rect(886, 275, 84, 84);
_917.attr({id: '_917',"data-name": '617',class: 'cls-1',x: '886',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '917');
var _918 = paper9.path("M885.99,157h160v84h-160V157Z");
_918.attr({id: '_918',"data-name": '618',class: 'cls-2','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '918');
var _919 = paper9.rect(972, 275, 74, 84);
_919.attr({id: '_919',"data-name": '619',class: 'cls-1',x: '972',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '919');
var _921 = paper9.rect(1048, 275, 74, 84);
_921.attr({id: '_921',"data-name": '621',class: 'cls-1',x: '1048',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '921');
var _922 = paper9.rect(1048, 157, 75, 84);
_922.attr({id: '_922',"data-name": '622',class: 'cls-1',x: '1048',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '922');
var _924 = paper9.rect(1124, 157, 84, 84);
_924.attr({id: '_924',"data-name": '624',class: 'cls-1',x: '1124',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '924');
var _923 = paper9.rect(1124, 275, 84, 84);
_923.attr({id: '_923',"data-name": '623',class: 'cls-1',x: '1124',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '923');
var _925 = paper9.rect(1209, 275, 74, 84);
_925.attr({id: '_925',"data-name": '625',class: 'cls-1',x: '1209',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '925');
var _927 = paper9.rect(1285, 275, 74, 84);
_927.attr({id: '_927',"data-name": '627',class: 'cls-1',x: '1285',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '927');
var _929 = paper9.rect(1361, 275, 77, 84);
_929.attr({id: '_929',"data-name": '629',class: 'cls-1',x: '1361',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '929');
var _930 = paper9.rect(1362, 157, 38, 84);
_930.attr({id: '_930',"data-name": '630',class: 'cls-1',x: '1362',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '930');
var _930а = paper9.rect(1401, 157, 38, 84);
_930а.attr({id: '_930а',"data-name": '630а',class: 'cls-1',x: '1401',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '930а');
var _931 = paper9.rect(1439, 275, 73, 84);
_931.attr({id: '_931',"data-name": '631',class: 'cls-1',x: '1439',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '931');
var _932 = paper9.rect(1440, 157, 73, 84);
_932.attr({id: '_932',"data-name": '632',class: 'cls-1',x: '1440',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '932');
var _934 = paper9.rect(1518, 157, 77, 84);
_934.attr({id: '_934',"data-name": '634',class: 'cls-1',x: '1518',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '934');
var _933 = paper9.rect(1518, 275, 77, 84);
_933.attr({id: '_933',"data-name": '633',class: 'cls-1',x: '1518',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '933');
var _935 = paper9.rect(1597, 275, 77, 84);
_935.attr({id: '_935',"data-name": '635',class: 'cls-1',x: '1597',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '935');
var _936 = paper9.rect(1596, 157, 77, 84);
_936.attr({id: '_936',"data-name": '636',class: 'cls-1',x: '1596',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '936');
var _937 = paper9.rect(1677, 275, 73, 84);
_937.attr({id: '_937',"data-name": '637',class: 'cls-1',x: '1677',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '937');
var _939 = paper9.rect(1752, 275, 85, 84);
_939.attr({id: '_939',"data-name": '639',class: 'cls-1',x: '1752',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '939');
var _939a = paper9.rect(1838, 275, 31, 84);
_939a.attr({id: '_939a',"data-name": '739a',class: 'cls-1',x: '1838',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '939a');
var toilet9W = paper9.rect(1674, 157, 73, 84);
toilet9W.attr({id: 'toilet9W',class: 'cls-1',x: '1674',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', 'toilet9W');
var _944 = paper9.rect(2025, 157, 140, 159);
_944.attr({id: '_944',"data-name": '944',class: 'cls-1',x: '2025',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '944');
var _942 = paper9.rect(1988, 157, 35, 84);
_942.attr({id: '_942',"data-name": '942',class: 'cls-1',x: '1988',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '942');
var _942a = paper9.rect(1988, 243, 35, 73);
_942a.attr({id: '_942a',"data-name": '942a',class: 'cls-1',x: '1988',y: '243','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '942a');
var _952 = paper9.rect(2167, 157, 41, 159);
_952.attr({id: '_952',"data-name": '852',class: 'cls-1',x: '2167',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '952');
var _948 = paper9.rect(2304, 157, 72, 84);
_948.attr({id: '_948',"data-name": '648',class: 'cls-1',x: '2304',y: '157','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '948');
var _947a = paper9.rect(2254, 275, 122, 84);
_947a.attr({id: '_947a',"data-name": '847a',class: 'cls-1',x: '2254',y: '275','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '947a');
var _950 = paper9.path("M2464,241l-8.29-84h-78.72v84H2464Z");
_950.attr({id: '_950',"data-name": '650',class: 'cls-2','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '950');
var _949 = paper9.path("M2464,275l-8.29,84h-78.72V275H2464Z");
_949.attr({id: '_949',"data-name": '849',class: 'cls-2','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '949');


var fn1 = paper9.rect(35, 150, 678, 303);

fn1.attr({ id: 'fn1', class: 'cls-1', x: '35', y: '150', 'stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'fn1');
var e2 = paper9.rect(1983, 148, 513, 305);
e2.attr({ id: 'e2', class: 'cls-1', x: '1983', y: '148','stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round'  }).data('id', 'e2');
var fn11 = paper9.path("M1122,149.99h394v319H1122v-319Z");
fn11.attr({ id: 'fn11', class: 'cls-2','stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round'  }).data('id', 'fn11');


var rooms9 = [fn1, fn11, e2, _901, _902, _903, _904, _907, _906, _906a, _908, 
    _910, _910a, _911, _913, _915, _917, _918, _919, 
    _921, _922, _924, _923, _925, _927, _929, 
    _930, _930а, _931, _932, _934, _933, _935, _936, _937, _939, _939a, 
     _944, _942, _942a, _952, _948, _947a, _950, _949, toilet9M, toilet9W]

var labels9 = [`${chair_txt} ФН1`,`${chair_txt} "ФН11"`, `${chair_txt} "Э2"`,'901', '902', '903', '904', '907', '906', '906a', '908', 
'910', '910a', '911', '913', '915', '917', '918', '919', 
'921', '922', '924', '923', '925', '927', '929', 
'930', '930а', '931', '932', '934', '933', '935', '936', '937', '939', '939a',  
'944', '942', '942a', '952', '948', '947a', '950', '949', male, female]
var chairs = ['fn1', 'fn11', 'e2']
setEventAndEverything(paper9, rooms9, chairs, [], labels9, room_font_size)
var stairs_lift9 = [rt_stair, lt_stair, ll_stair, lr_stair, rl_stair, rr_stair, ml_stair, mr_stair, 
    ll_lift, rl_lift, lr_lift, rr_lift,lt_lift2, lt_lift]

setEvent(stairs_lift9)