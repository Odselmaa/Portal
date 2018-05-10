var inner_border_color = '#888';

// var fill_room = "#90A4AE";
// var text_color = "#FFFFF7"
var gray = "#5A5A5A"
var canvas_id = 'map6'

var paper6 = Raphael(canvas_id);
paper6.setViewBox(0, 0, '2600', '500', true);
paper6.setSize('100%', '100%');

var path_a = paper6.path("M47,239l9-96H213V95H334v50H553L572,30H783l22,114,436-1-13-67h111l-12,69h413l19-115h214l21,112h197V95h124v49h151l11,97v34l-9,97L55,373l-7-98Z");
path_a.attr({class: 'cls-3','stroke-width': 25,'stroke':outer_border_color,'stroke-opacity': '1'}).data('id', 'path_a');


var path_d = paper6.path("M696,198h41");
path_d.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var path_e = paper6.path("M1206,157h50");
path_e.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var _601 = paper6.path("M58.988,275l7.906,84H142V275H58.988Z");
_601.attr({id: '_601',"data-name": '601',class: 'cls-3','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '601');
var _602 = paper6.path("M58,241l7.906-84h75.106v84H58Z");
_602.attr({id: '_602',"data-name": '602',class: 'cls-3','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '602');
var _602a = paper6.rect(143, 157, 41, 84);
_602a.attr({id: '_602a',"data-name": '602a',class: 'cls-2',x: '143',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '602a');
var _603 = paper6.rect(143, 275, 84, 84);
_603.attr({id: '_603',"data-name": '603',class: 'cls-2',x: '143',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '603');
var _604 = paper6.rect(185, 157, 41, 84);
_604.attr({id: '_604',"data-name": '604',class: 'cls-2',x: '185',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '604');
var _607 = paper6.rect(228, 275, 40, 84);
_607.attr({id: '_607',"data-name": '607',class: 'cls-2',x: '228',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '607');
var _606 = paper6.rect(322, 156, 74, 145);
_606.attr({id: '_606',"data-name": '606',class: 'cls-2',x: '322',y: '156','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '606');
var _2nd = paper6.rect(397, 156, 127, 145);
_2nd.attr({id: '_2nd',"data-name": '2nd',class: 'cls-2',x: '397',y: '156','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '_2nd');
var _610 = paper6.rect(525, 156, 32, 70);
_610.attr({id: '_610',"data-name": '610',class: 'cls-2',x: '525',y: '156','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '610');
var _610a = paper6.rect(525, 228, 32, 73);
_610a.attr({id: '_610a',"data-name": '610a',class: 'cls-2',x: '525',y: '228','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '610a');
var _611 = paper6.rect(625, 275, 84, 84);
_611.attr({id: '_611',"data-name": '611',class: 'cls-2',x: '625',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '611');
var _613 = paper6.rect(710, 275, 84, 84);
_613.attr({id: '_613',"data-name": '613',class: 'cls-2',x: '710',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '613');
var _615 = paper6.rect(795, 275, 84, 84);
_615.attr({id: '_615',"data-name": '615',class: 'cls-2',x: '795',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '615');
var toilet6M = paper6.rect(798, 157, 84, 84);
toilet6M.attr({id: 'toilet6M',class: 'cls-2',x: '798',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', 'toilet6M');
var _617 = paper6.rect(886, 275, 84, 84);
_617.attr({id: '_617',"data-name": '617',class: 'cls-2',x: '886',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '617');
var _618 = paper6.rect(886, 157, 84, 84);
_618.attr({id: '_618',"data-name": '618',class: 'cls-2',x: '886',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '618');
var _619 = paper6.rect(971, 275, 109, 84);
_619.attr({id: '_619',"data-name": '619',class: 'cls-2',x: '971',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '619');
var _620 = paper6.rect(971, 157, 76, 84);
_620.attr({id: '_620',"data-name": '620',class: 'cls-2',x: '971',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '620');
var _621 = paper6.rect(1081, 275, 42, 84);
_621.attr({id: '_621',"data-name": '621',class: 'cls-2',x: '1081',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '621');
var _622 = paper6.rect(1048, 157, 75, 84);
_622.attr({id: '_622',"data-name": '622',class: 'cls-2',x: '1048',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '622');
var _624 = paper6.rect(1124, 157, 40, 84);
_624.attr({id: '_624',"data-name": '624',class: 'cls-2',x: '1124',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '624');
var _624a = paper6.rect(1165, 157, 42, 84);
_624a.attr({id: '_624a',"data-name": '624a',class: 'cls-2',x: '1165',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '624a');
var _623 = paper6.rect(1124, 275, 84, 84);
_623.attr({id: '_623',"data-name": '623',class: 'cls-2',x: '1124',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '623');
var _625 = paper6.rect(1209, 275, 36, 84);
_625.attr({id: '_625',"data-name": '625',class: 'cls-2',x: '1209',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '625');
var _625a = paper6.rect(1246, 275, 37, 84);
_625a.attr({id: '_625a',"data-name": '625a',class: 'cls-2',x: '1246',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '625a');
var _627 = paper6.rect(1285, 275, 37, 84);
_627.attr({id: '_627',"data-name": '627',class: 'cls-2',x: '1285',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '627');
var _627a = paper6.rect(1323, 275, 37, 84);
_627a.attr({id: '_627a',"data-name": '627a',class: 'cls-2',x: '1323',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '627a');
var _629 = paper6.rect(1361, 275, 38, 84);
_629.attr({id: '_629',"data-name": '629',class: 'cls-2',x: '1361',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '629');
var _629a = paper6.rect(1400, 275, 38, 84);
_629a.attr({id: '_629a',"data-name": '629a',class: 'cls-2',x: '1400',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '629a');
var _630 = paper6.rect(1362, 157, 38, 84);
_630.attr({id: '_630',"data-name": '630',class: 'cls-2',x: '1362',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '630');
var _630a = paper6.rect(1401, 157, 38, 84);
_630a.attr({id: '_630a',"data-name": '630a',class: 'cls-2',x: '1401',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '630a');
var _631 = paper6.rect(1439, 275, 77, 84);
_631.attr({id: '_631',"data-name": '631',class: 'cls-2',x: '1439',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '631');
var _632 = paper6.rect(1440, 157, 38, 84);
_632.attr({id: '_632',"data-name": '632',class: 'cls-2',x: '1440',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '632');
var _632a = paper6.rect(1479, 157, 38, 84);
_632a.attr({id: '_632a',"data-name": '632a',class: 'cls-2',x: '1479',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '632a');
var _634 = paper6.rect(1518, 157, 38, 84);
_634.attr({id: '_634',"data-name": '634',class: 'cls-2',x: '1518',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '634');
var _633 = paper6.rect(1518, 275, 38, 84);
_633.attr({id: '_633',"data-name": '633',class: 'cls-2',x: '1518',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '633');
var _633a = paper6.rect(1557, 275, 38, 84);
_633a.attr({id: '_633a',"data-name": '633a',class: 'cls-2',x: '1557',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '633a');
var _634a = paper6.rect(1557, 157, 38, 84);
_634a.attr({id: '_634a',"data-name": '634a',class: 'cls-2',x: '1557',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '634a');
var _635 = paper6.rect(1596, 275, 38, 84);
_635.attr({id: '_635',"data-name": '635',class: 'cls-2',x: '1596',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '635');
var _636 = paper6.rect(1596, 157, 38, 84);
_636.attr({id: '_636',"data-name": '636',class: 'cls-2',x: '1596',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '636');
var _636a = paper6.rect(1635, 157, 38, 84);
_636a.attr({id: '_636a',"data-name": '636a',class: 'cls-2',x: '1635',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '636a');
var _637 = paper6.rect(1636, 275, 80, 84);
_637.attr({id: '_637',"data-name": '637',class: 'cls-2',x: '1636',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '637');
var _639 = paper6.rect(1717, 275, 110, 84);
_639.attr({id: '_639',"data-name": '639',class: 'cls-2',x: '1717',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '639');
var toilet6W = paper6.rect(1674, 157, 73, 84);
toilet6W.attr({id: 'toilet6W',class: 'cls-2',x: '1674',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', 'toilet6W');
var _646 = paper6.rect(1987, 157, 221, 159);
_646.attr({id: '_646',"data-name": '646',class: 'cls-2',x: '1987',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '646');

var _648 = paper6.rect(2304, 157, 72, 84);
_648.attr({id: '_648',"data-name": '648',class: 'cls-2',x: '2304',y: '157','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '648');
var _649 = paper6.rect(2304, 275, 72, 84);
_649.attr({id: '_649',"data-name": '649',class: 'cls-2',x: '2304',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '649');
var _647 = paper6.rect(2263, 275, 40, 84);
_647.attr({id: '_647',"data-name": '647',class: 'cls-2',x: '2263',y: '275','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '647');
var _650 = paper6.path("M2464,241l-8.29-84h-78.72v84H2464Z");
_650.attr({id: '_650',"data-name": '650',class: 'cls-3','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '650');
var _651 = paper6.path("M2464,275l-8.29,84h-78.72V275H2464Z");
_651.attr({id: '_651',"data-name": '651',class: 'cls-3','stroke-width':stroke_width,'stroke':room_border_color,'stroke-opacity': '1','fill': fill_room}).data('id', '651');

var rt_stair = paper6.rect(2206, 108, 96, 39);
rt_stair.attr({id: 'rt_stair',class: 'cls-2',x: '2206',y: '108','stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1',}).data('id', 'rt_stair');
var lt_stair = paper6.rect(222, 106, 102, 39);
lt_stair.attr({id: 'lt_stair',class: 'cls-2',x: '222',y: '106','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'lt_stair');

var rt_lift = paper6.rect(227, 157, 50, 36);
rt_lift.attr({id: 'lt_lift',class: 'cls-2',x: '227',y: '157','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1'}).data('id', 'rt_lift');
var lt_lift = paper6.rect(2252, 157, 51, 35);
lt_lift.attr({id: 'rt_lift',class: 'cls-2',x: '2252',y: '157','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1'}).data('id', 'lt_lift');

var ll_lift = paper6.path("M570,126l14-82h59l-12,82H570Z");
ll_lift.attr({id: 'll_lift',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'll_lift');
var ll_stair = paper6.path("M570,126h61l-11,73H556Z");
ll_stair.attr({id: 'll_stair',class: 'cls-3','stroke-width': '1','stroke':inner_border_color ,'stroke-opacity': '1',}).data('id', 'll_stair');
var lr_lift = paper6.path("M786,126L772,44H713l12,82h61Z");
lr_lift.attr({id: 'lr_lift',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'lr_lift');
var lr_stair = paper6.path("M786,126H725l11,73h64Z");
lr_stair.attr({id: 'lr_stair',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'lr_stair');
var rl_lift = paper6.path("M1759,126l14-82h59l-12,82h-61Z");
rl_lift.attr({id: 'rl_lift',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'rl_lift');
var rl_stair = paper6.path("M1759,126h60l-10,73h-64Z");
rl_stair.attr({id: 'rl_stair',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'rl_stair');
var rr_lift = paper6.path("M1975,126l-14-82h-59l12,82h61Z");
rr_lift.attr({id: 'rr_lift',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'rr_lift');
var rr_stair = paper6.path("M1975,126h-60l10,73h64Z");
rr_stair.attr({id: 'rr_stair',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'rr_stair');
var ml_stair = paper6.path("M1243,99h22l11,45h-23Z");
ml_stair.attr({id: 'ml_stair',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'ml_stair');
var mr_stair = paper6.path("M1324,99h-22l-11,45h23Z");
mr_stair.attr({id: 'mr_stair',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'mr_stair');

var path_f = paper6.path("M1313,157h48");
path_f.attr({class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var path_g = paper6.path("M1208,176h22");
path_g.attr({class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var path_h = paper6.path("M1238,176h94");
path_h.attr({class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var path_i = paper6.path("M1341,176h21");
path_i.attr({class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var path_j = paper6.path("M1808,197h45");
path_j.attr({class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();


var path_f = paper6.path("M1313,157h48");
path_f.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var path_g = paper6.path("M1208,176h22");
path_g.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var path_h = paper6.path("M1238,176h94");
path_h.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var path_i = paper6.path("M1341,176h21");
path_i.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var path_j = paper6.path("M1808,197h45");
path_j.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var path_b = paper6.path("M1886,197h39");
path_b.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var path_c = paper6.path("M620,198h43");
path_c.attr({class: 'cls-3','stroke-width':stroke_width,'stroke':inner_border_color,'stroke-opacity': '1','fill': fill_room}).data();
var _0 = paper6.path("M253,107v36");
_0.attr({id: '_0',"data-name": '0',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _1 = paper6.path("M258,107v36");
_1.attr({id: '_1',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _2 = paper6.path("M263,107v36");
_2.attr({id: '_2',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _3 = paper6.path("M268,107v36");
_3.attr({id: '_3',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _4 = paper6.path("M273,107v36");
_4.attr({id: '_4',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _5 = paper6.path("M278,107v36");
_5.attr({id: '_5',"data-name": '5',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _6 = paper6.path("M283,107v36");
_6.attr({id: '_6',"data-name": '6',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _7 = paper6.path("M288,107v36");
_7.attr({id: '_7',"data-name": '7',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _8 = paper6.path("M293,107v36");
_8.attr({id: '_8',"data-name": '8',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _9 = paper6.path("M298,107v36");
_9.attr({id: '_9',"data-name": '9',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _02 = paper6.path("M2238,110v36");
_02.attr({id: '_0-2',"data-name": '0',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _12 = paper6.path("M2243,110v36");
_12.attr({id: '_1-2',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _22 = paper6.path("M2248,110v36");
_22.attr({id: '_2-2',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _32 = paper6.path("M2253,110v36");
_32.attr({id: '_3-2',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _42 = paper6.path("M2258,110v36");
_42.attr({id: '_4-2',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _52 = paper6.path("M2263,110v36");
_52.attr({id: '_5-2',"data-name": '5',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _62 = paper6.path("M2268,110v36");
_62.attr({id: '_6-2',"data-name": '6',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _72 = paper6.path("M2273,110v36");
_72.attr({id: '_7-2',"data-name": '7',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _82 = paper6.path("M2278,110v36");
_82.attr({id: '_8-2',"data-name": '8',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _92 = paper6.path("M2283,110v36");
_92.attr({id: '_9-2',"data-name": '9',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _03 = paper6.path("M1247,110h19");
_03.attr({id: '_0-3',"data-name": '0',class: 'cls-3','stroke-width': '1','stroke-opacity': '1',}).data();
var _13 = paper6.path("M1249,115h19");
_13.attr({id: '_1-3',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _23 = paper6.path("M1249,120h19");
_23.attr({id: '_2-3',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _33 = paper6.path("M1251,125h19");
_33.attr({id: '_3-3',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _43 = paper6.path("M1253,130h19");
_43.attr({id: '_4-3',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _04 = paper6.path("M1320,112h-19");
_04.attr({id: '_0-4',"data-name": '0',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _14 = paper6.path("M1318,117h-19");
_14.attr({id: '_1-4',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _24 = paper6.path("M1317,122h-19");
_24.attr({id: '_2-4',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _34 = paper6.path("M1316,127h-19");
_34.attr({id: '_3-4',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _44 = paper6.path("M1314,132h-19");
_44.attr({id: '_4-4',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _05 = paper6.path("M568,148h58");
_05.attr({id: '_0-5',"data-name": '0',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _15 = paper6.path("M567,153h58");
_15.attr({id: '_1-5',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _25 = paper6.path("M566,158h58");
_25.attr({id: '_2-5',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _35 = paper6.path("M565,163h58");
_35.attr({id: '_3-5',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _45 = paper6.path("M564,168h58");
_45.attr({id: '_4-5',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _53 = paper6.path("M563,173h58");
_53.attr({id: '_5-3',"data-name": '5',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _63 = paper6.path("M562,178h58");
_63.attr({id: '_6-3',"data-name": '6',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _73 = paper6.path("M561,183h58");
_73.attr({id: '_7-3',"data-name": '7',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _06 = paper6.path("M788,150H730");
_06.attr({id: '_0-6',"data-name": '0',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _16 = paper6.path("M789,155H731");
_16.attr({id: '_1-6',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _26 = paper6.path("M790,160H732");
_26.attr({id: '_2-6',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _36 = paper6.path("M791,165H733");
_36.attr({id: '_3-6',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _46 = paper6.path("M792,170H734");
_46.attr({id: '_4-6',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _54 = paper6.path("M793,175H735");
_54.attr({id: '_5-4',"data-name": '5',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _64 = paper6.path("M794,180H736");
_64.attr({id: '_6-4',"data-name": '6',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _74 = paper6.path("M795,185H737");
_74.attr({id: '_7-4',"data-name": '7',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _07 = paper6.path("M1757,150h58");
_07.attr({id: '_0-7',"data-name": '0',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _17 = paper6.path("M1756,155h58");
_17.attr({id: '_1-7',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _27 = paper6.path("M1755,160h58");
_27.attr({id: '_2-7',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _37 = paper6.path("M1754,165h58");
_37.attr({id: '_3-7',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _47 = paper6.path("M1753,170h58");
_47.attr({id: '_4-7',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _55 = paper6.path("M1752,175h58");
_55.attr({id: '_5-5',"data-name": '5',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _65 = paper6.path("M1751,180h58");
_65.attr({id: '_6-5',"data-name": '6',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _75 = paper6.path("M1750,185h58");
_75.attr({id: '_7-5',"data-name": '7',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _08 = paper6.path("M1977,151h-58");
_08.attr({id: '_0-8',"data-name": '0',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _18 = paper6.path("M1978,156h-58");
_18.attr({id: '_1-8',"data-name": '1',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _28 = paper6.path("M1979,161h-58");
_28.attr({id: '_2-8',"data-name": '2',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _38 = paper6.path("M1980,166h-58");
_38.attr({id: '_3-8',"data-name": '3',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _48 = paper6.path("M1981,171h-58");
_48.attr({id: '_4-8',"data-name": '4',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _56 = paper6.path("M1982,176h-58");
_56.attr({id: '_5-6',"data-name": '5',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _66 = paper6.path("M1983,181h-58");
_66.attr({id: '_6-6',"data-name": '6',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();
var _76 = paper6.path("M1984,186h-58");
_76.attr({id: '_7-6',"data-name": '7',class: 'cls-3','stroke-width': stroke_width, 'stroke':inner_border_color,'stroke-opacity': '1',}).data();

var chairRu = paper6.rect(31, 150, 530, 303);
chairRu.attr({id: 'chairRu',class: 'cls-2',x: '31',y: '150','stroke-opacity': '1', 'stroke':inner_border_color, 'stroke-width':chair_stroke_width, 'stroke-dasharray': '-', 'stroke-linecap': 'round'}).data('id', 'ru');
var chairE8 = paper6.rect(1983, 148, 513, 305);
chairE8.attr({id: 'chairE8',"data-name": 'chairRu copy',class: 'cls-2',x: '1983',y: '148','stroke-opacity': '1','stroke':inner_border_color, 'stroke-width':chair_stroke_width,'stroke-dasharray': '-', 'stroke-linecap': 'round'}).data('id', 'e8');
var chairRoGe = paper6.rect(881, 150, 795, 303);
chairRoGe.attr({id: 'chairRoGe',class: 'cls-2',x: '881',y: '150','stroke':inner_border_color, 'stroke-width':2,'stroke-opacity': '1', 'stroke-width':chair_stroke_width,'stroke-dasharray': '-', 'stroke-linecap': 'round'}).data('id', 'roge');


var rooms6 = []
rooms6.push(chairE8)
rooms6.push(chairRu)
rooms6.push(chairRoGe)
rooms6.push(_601);
rooms6.push(_602);
rooms6.push(_602a);
rooms6.push(_603);
rooms6.push(_604);
rooms6.push(_606);
rooms6.push(_607);
rooms6.push(_2nd);
rooms6.push(_610);
rooms6.push(_610a);
rooms6.push(_611);
rooms6.push(_613);
rooms6.push(_615);
rooms6.push(_617);
rooms6.push(_618);
rooms6.push(_619);
rooms6.push(_620);
rooms6.push(_621);
rooms6.push(_622);
rooms6.push(_623);
rooms6.push(_624);
rooms6.push(_624a);
rooms6.push(_625);
rooms6.push(_625a);
rooms6.push(_627);
rooms6.push(_627a);
rooms6.push(_629);
rooms6.push(_629a);
rooms6.push(_630);
rooms6.push(_630a);
rooms6.push(_631);
rooms6.push(_632);
rooms6.push(_632a);
rooms6.push(_633);
rooms6.push(_633a);
rooms6.push(_634);
rooms6.push(_634a);
rooms6.push(_635);
rooms6.push(_636);
rooms6.push(_636a);
rooms6.push(_637);
rooms6.push(_639);

rooms6.push(_646);
rooms6.push(_647);
rooms6.push(_648);
rooms6.push(_649);
rooms6.push(_650);
rooms6.push(_651);
rooms6.push(toilet6W);
rooms6.push(toilet6M);

var trapezoids6 = ['601', '602', '650', '651'];
var hover_color = '#EB9532';
var chairs6 = ['ru', 'e8', 'roge'];

var labels6 = [`${chair_txt} "Э8"`, `${chair_txt} "Русский язык"`, `${chair_txt} "Романо-германиские языки"`, '601', '602','602a','603','604','606','607','Второй свет','610','610a','611', 
				'613','615','617','618','619','620','621','622','623','624','624а','625','625a','627','627a','629','629a',
				'630','630a','631','632','632a','633','633a','634','634a','635','636','636a','637','639','646','647','648', '649','650','651',female, male];

var lifts = [
	rr_lift,
	rl_lift,
	lr_lift,
	ll_lift,
	lt_lift,
	rt_lift,
];


var stairs = [
	rr_stair,
	rl_stair,
	ml_stair,
	mr_stair,
	ll_stair,
	lr_stair,
	rt_stair,
	lt_stair
]
								
setEventAndEverything(paper6, rooms6, chairs6, trapezoids6, labels6, room_font_size);
setEvent(stairs);
setEvent(lifts);