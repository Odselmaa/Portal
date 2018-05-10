
var paper11 = Raphael('map11', '2461', '424');

paper11.setViewBox(0, 0, '2600', '484', true);
paper11.setSize('100%', '100%');

var border = paper11.path("M11,209l9-96H177V65H298v50H517L536,0H747l22,114,436-1-13-67h111l-12,69h413L1723,0h214l21,112h197V65h124v49h151l11,97v34l-9,97L19,343l-7-98Z");
border.attr({ id: 'border', class: 'cls-2', 'stroke-width': outer_border_width, 'stroke': outer_border_color, 'stroke-opacity': '1', }).data('id', 'border');

var rt_stair = paper11.rect(2171, 79, 96, 39);
rt_stair.attr({ id: 'rt_stair', class: 'cls-1', x: '2171', y: '79', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rt_stair');
var lt_lift = paper11.rect(192, 128, 50, 36);
lt_lift.attr({ id: 'lt_lift', class: 'cls-1', x: '192', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lt_lift');
var rt_lift = paper11.rect(2217, 128, 51, 35);
rt_lift.attr({ id: 'rt_lift', class: 'cls-1', x: '2217', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rt_lift');
var lt_stair = paper11.rect(187, 77, 102, 39);
lt_stair.attr({ id: 'lt_stair', class: 'cls-1', x: '187', y: '77', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lt_stair');
var ll_lift = paper11.path("M535,97l14-82h59L596,97H535Z");
ll_lift.attr({ id: 'll_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'll_lift');
var ll_stair = paper11.path("M535,97h61l-11,73H521Z");
ll_stair.attr({ id: 'll_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'll_stair');
var lr_lift = paper11.path("M751,97L737,15H678l12,82h61Z");
lr_lift.attr({ id: 'lr_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lr_lift');
var lr_stair = paper11.path("M751,97H690l11,73h64Z");
lr_stair.attr({ id: 'lr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'lr_stair');
var rl_lift = paper11.path("M1724,97l14-82h59l-12,82h-61Z");
rl_lift.attr({ id: 'rl_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rl_lift');
var rl_stair = paper11.path("M1724,97h60l-10,73h-64Z");
rl_stair.attr({ id: 'rl_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rl_stair');
var rr_lift = paper11.path("M1940,97l-14-82h-59l12,82h61Z");
rr_lift.attr({ id: 'rr_lift', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rr_lift');
var rr_stair = paper11.path("M1940,97h-60l10,73h64Z");
rr_stair.attr({ id: 'rr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rr_stair');
var ml_stair = paper11.path("M1208,70h22l11,45h-23Z");
ml_stair.attr({ id: 'ml_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'ml_stair');
var mr_stair = paper11.path("M1289,70h-22l-11,45h23Z");
mr_stair.attr({ id: 'mr_stair', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'mr_stair');



var _1101 = paper11.path("M23.988,246l7.906,84H107V246H23.988Z");
_1101.attr({ id: '_01', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1101');
var serv = paper11.path("M23,212l8.621-84h155.4v84H23Z");
serv.attr({ id: 'serv', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'serv');
var _1103 = paper11.rect(108, 246, 84, 84);
_1103.attr({ id: '_03', class: 'cls-1', x: '108', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1103');
var _1107 = paper11.rect(193, 246, 40, 84);
_1107.attr({ id: '_07', class: 'cls-1', x: '193', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1107');
var _1106 = paper11.rect(287, 127, 74, 145);
_1106.attr({ id: '_06', class: 'cls-1', x: '287', y: '127', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1106');
var _1108 = paper11.rect(362, 127, 127, 145);
_1108.attr({ id: '_08', class: 'cls-1', x: '362', y: '127', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1108');
var _1110 = paper11.rect(490, 127, 32, 70);
_1110.attr({ id: '_10', class: 'cls-1', x: '490', y: '127', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1110');
var _1110a = paper11.rect(490, 199, 32, 73);
_1110a.attr({ id: '_10a', class: 'cls-1', x: '490', y: '199', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1110a');
var _1111 = paper11.rect(590, 246, 84, 84);
_1111.attr({ id: '_11', class: 'cls-1', x: '590', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1111');
var _1113 = paper11.rect(679, 246, 87, 84);
_1113.attr({ id: '_13', class: 'cls-1', x: '679', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1113');
var _1115 = paper11.rect(768, 246, 81, 84);
_1115.attr({ id: '_15', class: 'cls-1', x: '768', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1115');
var toilet10M = paper11.rect(763, 128, 84, 84);
toilet10M.attr({ id: 'toilet10M', class: 'cls-1', x: '763', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet10M');
var _1117 = paper11.rect(851, 246, 84, 84);
_1117.attr({ id: '_17', class: 'cls-1', x: '851', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1117');
var _1119 = paper11.rect(937, 246, 74, 84);
_1119.attr({ id: '_19', class: 'cls-1', x: '937', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1119');
var _1120 = paper11.rect(849, 128, 162, 84);
_1120.attr({ id: '_20', class: 'cls-1', x: '849', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1120');
var _1121 = paper11.rect(1013, 246, 74, 84);
_1121.attr({ id: '_21', class: 'cls-1', x: '1013', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1121');
var _1122 = paper11.rect(1013, 128, 75, 84);
_1122.attr({ id: '_22', class: 'cls-1', x: '1013', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1122');
var _1124 = paper11.rect(1092, 128, 82, 84);
_1124.attr({ id: '_24', class: 'cls-1', x: '1092', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1124');
var _1123 = paper11.rect(1092, 246, 80, 84);
_1123.attr({ id: '_23', class: 'cls-1', x: '1092', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1123');
var _1125 = paper11.rect(1174, 246, 74, 84);
_1125.attr({ id: '_25', class: 'cls-1', x: '1174', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1125');
var _1127 = paper11.rect(1250, 246, 75, 84);
_1127.attr({ id: '_27', class: 'cls-1', x: '1250', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1127');
var _1129 = paper11.rect(1327, 246, 75, 84);
_1129.attr({ id: '_29', class: 'cls-1', x: '1327', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1129');
var _1130 = paper11.rect(1328, 128, 75, 84);
_1130.attr({ id: '_30', class: 'cls-1', x: '1328', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1130');
var _1131 = paper11.rect(1404, 246, 72, 84);
_1131.attr({ id: '_31', class: 'cls-1', x: '1404', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1131');
var _1134 = paper11.rect(1405, 128, 89, 84);
_1134.attr({ id: '_34', class: 'cls-1', x: '1405', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1134');
var _1135 = paper11.rect(1557, 246, 77, 84);
_1135.attr({ id: '_35', class: 'cls-1', x: '1557', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1135');
var _1133 = paper11.rect(1478, 246, 77, 84);
_1133.attr({ id: '_33', class: 'cls-1', x: '1478', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1133');
var _1136 = paper11.rect(1496, 128, 141, 84);
_1136.attr({ id: '_36', class: 'cls-1', x: '1496', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1136');
var _1137 = paper11.rect(1636, 246, 75, 84);
_1137.attr({ id: '_37', class: 'cls-1', x: '1636', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1137');
var _1139 = paper11.rect(1713, 246, 72, 84);
_1139.attr({ id: '_39', class: 'cls-1', x: '1713', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1139');
var _1141 = paper11.rect(1787, 246, 72, 84);
_1141.attr({ id: '_41', class: 'cls-1', x: '1787', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1141');
var _1142 = paper11.rect(1957, 129, 71.97, 77);
_1142.attr({ id: '_42', class: 'cls-1', x: '1957', y: '129', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1142');
var _1142a = paper11.rect(1957, 208, 72, 80);
_1142a.attr({ id: '_42a', class: 'cls-1', x: '1957', y: '208', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1142a');
var toilet10W = paper11.rect(1639, 128, 73, 84);
toilet10W.attr({ id: 'toilet10W', class: 'cls-1', x: '1639', y: '128', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet10W');
var _1144 = paper11.rect(2031, 129, 87, 159);
_1144.attr({ id: '_44', class: 'cls-1', x: '2031', y: '129', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1144');
var _1146 = paper11.rect(2120, 129, 27, 77);
_1146.attr({ id: '_46', class: 'cls-1', x: '2120', y: '129', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1146');
var _1146a = paper11.rect(2120, 208, 27, 80);
_1146a.attr({ id: '_46a', class: 'cls-1', x: '2120', y: '208', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1146a');
var _1147a = paper11.rect(2219, 246, 161, 84);
_1147a.attr({ id: '_847a', class: 'cls-1', x: '2219', y: '246', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1147a');
var _1149 = paper11.path("M2429,246l-8.29,84h-38.72V246H2429Z");
_1149.attr({ id: '_849', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '1149');

var serv2 = paper11.path("M2429,212l-8.29-84H2275.99v84H2429Z");
serv2.attr({ id: 'serv-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data();


var p_a = paper11.path("M1851,168h39");
path_a.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var p_b = paper11.path("M585,169h43");
path_b.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _0 = paper11.path("M218,78v36");
_0.attr({ id: '_0', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _1 = paper11.path("M223,78v36");
_1.attr({ id: '_1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _2 = paper11.path("M228,78v36");
_2.attr({ id: '_2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _3 = paper11.path("M233,78v36");
_3.attr({ id: '_3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _4 = paper11.path("M238,78v36");
_4.attr({ id: '_4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _5 = paper11.path("M243,78v36");
_5.attr({ id: '_5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _6 = paper11.path("M248,78v36");
_6.attr({ id: '_6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _7 = paper11.path("M253,78v36");
_7.attr({ id: '_7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _8 = paper11.path("M258,78v36");
_8.attr({ id: '_8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _9 = paper11.path("M263,78v36");
_9.attr({ id: '_9', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _02 = paper11.path("M2203,81v36");
_02.attr({ id: '_0-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _12 = paper11.path("M2208,81v36");
_12.attr({ id: '_1-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _22 = paper11.path("M2213,81v36");
_22.attr({ id: '_2-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _32 = paper11.path("M2218,81v36");
_32.attr({ id: '_3-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _42 = paper11.path("M2223,81v36");
_42.attr({ id: '_4-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _52 = paper11.path("M2228,81v36");
_52.attr({ id: '_5-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _62 = paper11.path("M2233,81v36");
_62.attr({ id: '_6-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _72 = paper11.path("M2238,81v36");
_72.attr({ id: '_7-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _82 = paper11.path("M2243,81v36");
_82.attr({ id: '_8-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _92 = paper11.path("M2248,81v36");
_92.attr({ id: '_9-2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _03 = paper11.path("M1212,81h19");
_03.attr({ id: '_0-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _13 = paper11.path("M1214,86h19");
_13.attr({ id: '_1-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _23 = paper11.path("M1214,91h19");
_23.attr({ id: '_2-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _33 = paper11.path("M1216,96h19");
_33.attr({ id: '_3-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _43 = paper11.path("M1218,101h19");
_43.attr({ id: '_4-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _04 = paper11.path("M1285,83h-19");
_04.attr({ id: '_0-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _14 = paper11.path("M1283,88h-19");
_14.attr({ id: '_1-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _24 = paper11.path("M1282,93h-19");
_24.attr({ id: '_2-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _34 = paper11.path("M1281,98h-19");
_34.attr({ id: '_3-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _44 = paper11.path("M1279,103h-19");
_44.attr({ id: '_4-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _05 = paper11.path("M533,119h58");
_05.attr({ id: '_0-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _15 = paper11.path("M532,124h58");
_15.attr({ id: '_1-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _25 = paper11.path("M531,129h58");
_25.attr({ id: '_2-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _35 = paper11.path("M530,134h58");
_35.attr({ id: '_3-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _45 = paper11.path("M529,139h58");
_45.attr({ id: '_4-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _53 = paper11.path("M528,144h58");
_53.attr({ id: '_5-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _63 = paper11.path("M527,149h58");
_63.attr({ id: '_6-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _73 = paper11.path("M526,154h58");
_73.attr({ id: '_7-3', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _06 = paper11.path("M753,121H695");
_06.attr({ id: '_0-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _16 = paper11.path("M754,126H696");
_16.attr({ id: '_1-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _26 = paper11.path("M755,131H697");
_26.attr({ id: '_2-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _36 = paper11.path("M756,136H698");
_36.attr({ id: '_3-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _46 = paper11.path("M757,141H699");
_46.attr({ id: '_4-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _54 = paper11.path("M758,146H700");
_54.attr({ id: '_5-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _64 = paper11.path("M759,151H701");
_64.attr({ id: '_6-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _74 = paper11.path("M760,156H702");
_74.attr({ id: '_7-4', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _07 = paper11.path("M1722,121h58");
_07.attr({ id: '_0-7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _17 = paper11.path("M1721,126h58");
_17.attr({ id: '_1-7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _27 = paper11.path("M1720,131h58");
_27.attr({ id: '_2-7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _37 = paper11.path("M1719,136h58");
_37.attr({ id: '_3-7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _47 = paper11.path("M1718,141h58");
_47.attr({ id: '_4-7', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _55 = paper11.path("M1717,146h58");
_55.attr({ id: '_5-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _65 = paper11.path("M1716,151h58");
_65.attr({ id: '_6-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _75 = paper11.path("M1715,156h58");
_75.attr({ id: '_7-5', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _08 = paper11.path("M1942,122h-58");
_08.attr({ id: '_0-8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _18 = paper11.path("M1943,127h-58");
_18.attr({ id: '_1-8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _28 = paper11.path("M1944,132h-58");
_28.attr({ id: '_2-8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _38 = paper11.path("M1945,137h-58");
_38.attr({ id: '_3-8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _48 = paper11.path("M1946,142h-58");
_48.attr({ id: '_4-8', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _56 = paper11.path("M1947,147h-58");
_56.attr({ id: '_5-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _66 = paper11.path("M1948,152h-58");
_66.attr({ id: '_6-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _76 = paper11.path("M1949,157h-58");
_76.attr({ id: '_7-6', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var p_c = paper11.path("M661,169h41");
path_c.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var p_d = paper11.path("M1171,128h50");
path_d.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();

var p_e = paper11.path("M1278,128h48");
path_e.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var p_f = paper11.path("M1173,147h22");
path_f.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var p_g = paper11.path("M1203,147h94");
path_g.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var p_h = paper11.path("M1306,147h21");
path_h.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var p_i = paper11.path("M1773,168h45");
path_i.attr({ class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();


var paper11Groups = [];

var rk1 = paper11.rect(0, 121, 678, 303);
rk1.attr({ id: 'rk1', class: 'cls-1', y: '121', 'stroke':inner_border_color, 'stroke-width': chair_stroke_width, 'stroke-opacity': '1','stroke-dasharray': '-', 'stroke-linecap': 'round'}).data('id', 'rk1');


var rooms11 = [_1101, serv,  serv2, _1103, _1107, _1106, _1108,
    _1110, _1110a, _1111, _1113, _1115, toilet10M, _1117, _1119,
    _1120, _1121, _1122, _1124, _1123, _1125, _1127, _1129,
    _1130, _1131, _1134, _1135, _1133, _1136, _1137, _1139,
    _1141, _1142, _1142a, toilet10W, _1144, _1146, _1146a, _1147a, _1149, rk1]

    var labels11 = [
        '01', 'serv', 'serv2', '03', '07', '06', '08',
        '10', '10a', '11', '13', '15', male, '17', '19',
        '20', '21', '22', '24', '23', '25', '27', '29',
        '30', '31', '34', '35', '33', '36', '37', '39',
        '41', '42', '42a', female, '44', '46', '46a', '47a', '49', `${chair_txt} "РК1"`
    ]

setEventAndEverything(paper11, rooms11, ['rk1'], [], labels11, room_font_size)

var s_t = [rt_stair, lt_lift, rt_lift, lt_stair, ll_lift, ll_stair, lr_lift, lr_stair, rl_lift, rl_stair, rr_lift, rr_stair, ml_stair, mr_stair]
setEvent(s_t)