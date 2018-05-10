
var paper10 = Raphael('map10', '2600', '484');
paper10.setViewBox(0, 0, '2600', '484', true);
paper10.setSize('100%', '100%');

var border = paper10.path("M11,209l9-96H177V65H298v50H517L536,0H747l22,114,436-1-13-67h111l-12,69h413L1723,0h214l21,112h197V65h124v49h151l11,97v34l-9,97L19,343l-7-98Z");
border.attr({ id: 'border', class: 'cls-2', 'stroke-width': outer_border_width, 'stroke': outer_border_color, 'stroke-opacity': '1', }).data('id', 'border');



var rt_stair = paper10.rect(2171, 79, 96, 39);
rt_stair.attr({ id: 'rt_stair', class: 'cls-1', x: '2171', y: '79', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rt_stair');
var lt_lift2 = paper10.rect(2217, 128, 51, 35);
lt_lift2.attr({ id: 'lt_lift-2', "data-name": 'lt_lift', class: 'cls-1', x: '2217', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lt_lift2');
var lt_stair = paper10.rect(187, 77, 102, 39);
lt_stair.attr({ id: 'lt_stair', class: 'cls-1', x: '187', y: '77', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lt_stair');
var ll_lift = paper10.path("M535,97l14-82h59L596,97H535Z");
ll_lift.attr({ id: 'll_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'll_lift');
var ll_stair = paper10.path("M535,97h61l-11,73H521Z");
ll_stair.attr({ id: 'll_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'll_stair');
var lr_lift = paper10.path("M751,97L737,15H678l12,82h61Z");
lr_lift.attr({ id: 'lr_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lr_lift');
var lr_stair = paper10.path("M751,97H690l11,73h64Z");
lr_stair.attr({ id: 'lr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lr_stair');
var rl_lift = paper10.path("M1724,97l14-82h59l-12,82h-61Z");
rl_lift.attr({ id: 'rl_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rl_lift');
var rl_stair = paper10.path("M1724,97h60l-10,73h-64Z");
rl_stair.attr({ id: 'rl_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rl_stair');
var rr_lift = paper10.path("M1940,97l-14-82h-59l12,82h61Z");
rr_lift.attr({ id: 'rr_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rr_lift');
var rr_stair = paper10.path("M1940,97h-60l10,73h64Z");
rr_stair.attr({ id: 'rr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rr_stair');
var ml_stair = paper10.path("M1208,70h22l11,45h-23Z");
ml_stair.attr({ id: 'ml_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'ml_stair');
var mr_stair = paper10.path("M1289,70h-22l-11,45h23Z");
mr_stair.attr({ id: 'mr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'mr_stair');
var lt_lift = paper10.rect(192, 128, 50, 36);
lt_lift.attr({ id: 'lt_lift', class: 'cls-1', x: '192', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lt_lift');

var _1001 = paper10.path("M23.988,246l7.906,84H107V246H23.988Z");
_1001.attr({ id: '_01', "data-name": '601', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1001');
var _1002 = paper10.path("M23,212l7.906-84h75.106v84H23Z");
_1002.attr({ id: '_02', "data-name": '602', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1002');
var _1003 = paper10.rect(108, 246, 84, 84);
_1003.attr({ id: '_03', "data-name": '603', class: 'cls-1', x: '108', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1003');
var _1004 = paper10.rect(108, 128, 83, 84);
_1004.attr({ id: '_04', "data-name": '604', class: 'cls-1', x: '108', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1004');
var _1007 = paper10.rect(193, 246, 40, 84);
_1007.attr({ id: '_07', "data-name": '607', class: 'cls-1', x: '193', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1007');
var _1006 = paper10.rect(287, 127, 74, 145);
_1006.attr({ id: '_06', "data-name": '606', class: 'cls-1', x: '287', y: '127', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1006');
var _1008 = paper10.rect(362, 127, 127, 145);
_1008.attr({ id: '_08', "data-name": '08', class: 'cls-1', x: '362', y: '127', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1008');
var _1010 = paper10.rect(490, 127, 32, 70);
_1010.attr({ id: '_10', "data-name": '610', class: 'cls-1', x: '490', y: '127', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1010');
var _1010a = paper10.rect(490, 199, 32, 73);
_1010a.attr({ id: '_10a', "data-name": '610a', class: 'cls-1', x: '490', y: '199', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1010a');
var _1011 = paper10.rect(590, 246, 84, 84);
_1011.attr({ id: '_11', "data-name": '611', class: 'cls-1', x: '590', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1011');
var _1013 = paper10.rect(679, 246, 87, 84);
_1013.attr({ id: '_13', "data-name": '613', class: 'cls-1', x: '679', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1013');
var _1015 = paper10.rect(768, 246, 81, 84);
_1015.attr({ id: '_15', "data-name": '615', class: 'cls-1', x: '768', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1015');
var toilet10M = paper10.rect(763, 128, 84, 84);
toilet10M.attr({ id: 'toilet10M', class: 'cls-1', x: '763', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet10M');
var _1017 = paper10.rect(851, 246, 84, 84);
_1017.attr({ id: '_17', "data-name": '617', class: 'cls-1', x: '851', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1017');
var _1018 = paper10.rect(851, 128, 84, 84);
_1018.attr({ id: '_18', "data-name": '618', class: 'cls-1', x: '851', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1018');
var _1019 = paper10.rect(937, 246, 74, 84);
_1019.attr({ id: '_19', "data-name": '619', class: 'cls-1', x: '937', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1019');
var _1020 = paper10.rect(937, 128, 74, 84);
_1020.attr({ id: '_20', "data-name": '20', class: 'cls-1', x: '937', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1020');
var _1021 = paper10.rect(1013, 246, 74, 84);
_1021.attr({ id: '_21', "data-name": '621', class: 'cls-1', x: '1013', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1021');
var _1022 = paper10.rect(1013, 128, 75, 84);
_1022.attr({ id: '_22', "data-name": '622', class: 'cls-1', x: '1013', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1022');
var _1024 = paper10.rect(1092, 128, 82, 84);
_1024.attr({ id: '_24', "data-name": '624', class: 'cls-1', x: '1092', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1024');
var _1023 = paper10.rect(1092, 246, 80, 84);
_1023.attr({ id: '_23', "data-name": '623', class: 'cls-1', x: '1092', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1023');
var _1025 = paper10.rect(1174, 246, 74, 84);
_1025.attr({ id: '_25', "data-name": '625', class: 'cls-1', x: '1174', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1025');
var _1027 = paper10.rect(1250, 246, 38, 84);
_1027.attr({ id: '_27', "data-name": '627', class: 'cls-1', x: '1250', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1027');
var _1029 = paper10.rect(1290, 246, 35, 84);
_1029.attr({ id: '_29', "data-name": '629', class: 'cls-1', x: '1290', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1029');
var _1030 = paper10.rect(1328, 128, 75, 84);
_1030.attr({ id: '_30', "data-name": '630', class: 'cls-1', x: '1328', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1030');
var _1031 = paper10.rect(1327, 246, 72, 84);
_1031.attr({ id: '_31', "data-name": '631', class: 'cls-1', x: '1327', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1031');
var _1032 = paper10.rect(1405, 128, 73, 84);
_1032.attr({ id: '_32', "data-name": '632', class: 'cls-1', x: '1405', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1032');
var _1034 = paper10.rect(1480, 128, 77, 84);
_1034.attr({ id: '_34', "data-name": '634', class: 'cls-1', x: '1480', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1034');
var _1035 = paper10.rect(1403, 246, 77, 84);
_1035.attr({ id: '_35', "data-name": '635', class: 'cls-1', x: '1403', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1035');
var _1036 = paper10.rect(1559, 128, 39, 84);
_1036.attr({ id: '_36', "data-name": '636', class: 'cls-1', x: '1559', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1036');
var empty = paper10.rect(1603, 128, 34, 84);
empty.attr({ id: 'empty', class: 'cls-1', x: '1603', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data();
var _1037 = paper10.rect(1484, 246, 116, 84);
_1037.attr({ id: '_37', "data-name": '637', class: 'cls-1', x: '1484', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1037');
var _1039 = paper10.rect(1602, 246, 182, 84);
_1039.attr({ id: '_39', "data-name": '639', class: 'cls-1', x: '1602', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1039');
var _1039a = paper10.rect(1789, 246, 42, 84);
_1039a.attr({ id: '_39a', "data-name": '739a', class: 'cls-1', x: '1789', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1039a');
var toilet10W = paper10.rect(1639, 128, 73, 84);
toilet10W.attr({ id: 'toilet10W', class: 'cls-1', x: '1639', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet10W');
var _1046 = paper10.rect(1954, 128, 176, 159);
_1046.attr({ id: '_46', "data-name": '46', class: 'cls-1', x: '1954', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1046');
var _1048 = paper10.rect(2269, 128, 72, 84);
_1048.attr({ id: '_48', "data-name": '648', class: 'cls-1', x: '2269', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1048');
var _1047a = paper10.rect(2219, 246, 122, 84);
_1047a.attr({ id: '_847a', "data-name": '847a', class: 'cls-1', x: '2219', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1047a');
var _1049 = paper10.path("M2429,246l-8.29,84h-78.72V246H2429Z");
_1049.attr({ id: '_849', "data-name": '849', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1049');
var _1050 = paper10.path("M2429,212l-8.29-84h-78.72v84H2429Z");
_1050.attr({ id: '_50', "data-name": '650', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1050');



var path_a = paper10.path("M1851,168h39");
path_a.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_b = paper10.path("M585,169h43");
path_b.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _0 = paper10.path("M218,78v36");
_0.attr({ id: '_0', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _1 = paper10.path("M223,78v36");
_1.attr({ id: '_1', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _2 = paper10.path("M228,78v36");
_2.attr({ id: '_2', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _3 = paper10.path("M233,78v36");
_3.attr({ id: '_3', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _4 = paper10.path("M238,78v36");
_4.attr({ id: '_4', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _5 = paper10.path("M243,78v36");
_5.attr({ id: '_5', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _6 = paper10.path("M248,78v36");
_6.attr({ id: '_6', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _7 = paper10.path("M253,78v36");
_7.attr({ id: '_7', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _8 = paper10.path("M258,78v36");
_8.attr({ id: '_8', "data-name": '8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _9 = paper10.path("M263,78v36");
_9.attr({ id: '_9', "data-name": '9', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _02 = paper10.path("M2203,81v36");
_02.attr({ id: '_0-2', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _12 = paper10.path("M2208,81v36");
_12.attr({ id: '_1-2', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _22 = paper10.path("M2213,81v36");
_22.attr({ id: '_2-2', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _32 = paper10.path("M2218,81v36");
_32.attr({ id: '_3-2', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _42 = paper10.path("M2223,81v36");
_42.attr({ id: '_4-2', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _52 = paper10.path("M2228,81v36");
_52.attr({ id: '_5-2', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _62 = paper10.path("M2233,81v36");
_62.attr({ id: '_6-2', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _72 = paper10.path("M2238,81v36");
_72.attr({ id: '_7-2', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _82 = paper10.path("M2243,81v36");
_82.attr({ id: '_8-2', "data-name": '8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _92 = paper10.path("M2248,81v36");
_92.attr({ id: '_9-2', "data-name": '9', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _03 = paper10.path("M1212,81h19");
_03.attr({ id: '_0-3', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _13 = paper10.path("M1214,86h19");
_13.attr({ id: '_1-3', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _23 = paper10.path("M1214,91h19");
_23.attr({ id: '_2-3', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _33 = paper10.path("M1216,96h19");
_33.attr({ id: '_3-3', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _43 = paper10.path("M1218,101h19");
_43.attr({ id: '_4-3', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _04 = paper10.path("M1285,83h-19");
_04.attr({ id: '_0-4', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _14 = paper10.path("M1283,88h-19");
_14.attr({ id: '_1-4', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _24 = paper10.path("M1282,93h-19");
_24.attr({ id: '_2-4', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _34 = paper10.path("M1281,98h-19");
_34.attr({ id: '_3-4', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _44 = paper10.path("M1279,103h-19");
_44.attr({ id: '_4-4', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _05 = paper10.path("M533,119h58");
_05.attr({ id: '_0-5', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _15 = paper10.path("M532,124h58");
_15.attr({ id: '_1-5', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _25 = paper10.path("M531,129h58");
_25.attr({ id: '_2-5', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _35 = paper10.path("M530,134h58");
_35.attr({ id: '_3-5', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _45 = paper10.path("M529,139h58");
_45.attr({ id: '_4-5', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _53 = paper10.path("M528,144h58");
_53.attr({ id: '_5-3', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _63 = paper10.path("M527,149h58");
_63.attr({ id: '_6-3', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _73 = paper10.path("M526,154h58");
_73.attr({ id: '_7-3', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _06 = paper10.path("M753,121H695");
_06.attr({ id: '_0-6', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _16 = paper10.path("M754,126H696");
_16.attr({ id: '_1-6', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _26 = paper10.path("M755,131H697");
_26.attr({ id: '_2-6', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _36 = paper10.path("M756,136H698");
_36.attr({ id: '_3-6', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _46 = paper10.path("M757,141H699");
_46.attr({ id: '_4-6', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _54 = paper10.path("M758,146H700");
_54.attr({ id: '_5-4', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _64 = paper10.path("M759,151H701");
_64.attr({ id: '_6-4', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _74 = paper10.path("M760,156H702");
_74.attr({ id: '_7-4', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _07 = paper10.path("M1722,121h58");
_07.attr({ id: '_0-7', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _17 = paper10.path("M1721,126h58");
_17.attr({ id: '_1-7', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _27 = paper10.path("M1720,131h58");
_27.attr({ id: '_2-7', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _37 = paper10.path("M1719,136h58");
_37.attr({ id: '_3-7', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _47 = paper10.path("M1718,141h58");
_47.attr({ id: '_4-7', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _55 = paper10.path("M1717,146h58");
_55.attr({ id: '_5-5', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _65 = paper10.path("M1716,151h58");
_65.attr({ id: '_6-5', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _75 = paper10.path("M1715,156h58");
_75.attr({ id: '_7-5', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _08 = paper10.path("M1942,122h-58");
_08.attr({ id: '_0-8', "data-name": '0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _18 = paper10.path("M1943,127h-58");
_18.attr({ id: '_1-8', "data-name": '1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _28 = paper10.path("M1944,132h-58");
_28.attr({ id: '_2-8', "data-name": '2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _38 = paper10.path("M1945,137h-58");
_38.attr({ id: '_3-8', "data-name": '3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _48 = paper10.path("M1946,142h-58");
_48.attr({ id: '_4-8', "data-name": '4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _56 = paper10.path("M1947,147h-58");
_56.attr({ id: '_5-6', "data-name": '5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _66 = paper10.path("M1948,152h-58");
_66.attr({ id: '_6-6', "data-name": '6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _76 = paper10.path("M1949,157h-58");
_76.attr({ id: '_7-6', "data-name": '7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_c = paper10.path("M661,169h41");
path_c.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_d = paper10.path("M1171,128h50");
path_d.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();


var path_e = paper10.path("M1278,128h48");
path_e.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_f = paper10.path("M1173,147h22");
path_f.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_g = paper10.path("M1203,147h94");
path_g.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_h = paper10.path("M1306,147h21");
path_h.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_i = paper10.path("M1773,168h45");
path_i.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();

var paper10Groups = [];
var fn2 = paper10.rect(0, 121, 678, 303);
fn2.attr({ id: 'fn2', class: 'cls-1', y: '121','stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'fn2');
var e2_10 = paper10.rect(1948, 119, 513, 305);
e2_10.attr({ id: 'e2_10', class: 'cls-1', x: '1948', y: '119', 'stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'e2_10');
var rl1 = paper10.rect(1481, 229, 306, 195);
rl1.attr({ id: 'rl1', class: 'cls-1', x: '1481', y: '229', 'stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'rl1');
var fn12 = paper10.path("M1089,120V424h313V219h200V120H1089Z");
fn12.attr({ id: 'fn12', class: 'cls-2', 'stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round'  }).data('id', 'fn12');


var labels10 = [
    `${chair_txt} "ФН2"`,  `${chair_txt} "ФН12"`,  `${chair_txt} "РЛ1"`,  `${chair_txt} "Э2"`,
    '01', '02', '03', '04', '07', '06', '08', '10', '10a', '11', '13', '15',
    male, '17', '18', '19', '20', '21', '22', '24', '23', '25', '27', '29', '30',
    '31', '32', '34', '35', '36', '37', '39', '39a', female, '46', '48', '47a', '49', '50']

var rooms10 = [fn2, fn12, rl1, e2_10, _1001, _1002, _1003, _1004, _1007, _1006, _1008,
    _1010, _1010a, _1011, _1013, _1015, toilet10M, _1017, _1018, _1019,
    _1020, _1021, _1022, _1024, _1023, _1025, _1027, _1029,
    _1030, _1031, _1032, _1034, _1035, _1036, _1037, _1039,
    _1039a, toilet10W, _1046, _1048, _1047a, _1049, _1050]

setEventAndEverything(paper10, rooms10, ['fn2', 'fn12', 'rl1', 'e2_10'], [], labels10, room_font_size)

var s_l = [rt_stair, lt_lift2, lt_stair, ll_lift, ll_stair, lr_lift, lr_stair, rl_lift, 
    rl_stair, rr_lift, rr_stair, ml_stair, mr_stair, lt_lift]

setEvent(s_l)
