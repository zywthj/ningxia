/*数据*/
//1、水环境数据
var mapdata1 = {
	"okFlag": 1,
	"errMsg": "json数据获取成功",
	"QuanQuList": [{
			"id": 1,
			"PositionName": "中卫下河沿",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "甘肃—宁夏省界",
			"target": "考核目标：Ⅱ类",
			"level": "2",
			"top": "300px",
			"left": "90px"
		},
		{
			"id": 2,
			"PositionName": "金沙湾",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "中卫—吴忠市界",
			"target": "考核目标：Ⅱ类",
			"level": "2",
			"top": "220px",
			"left": "220px"
		},
		{
			"id": 3,
			"PositionName": "叶盛公路桥",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "吴忠—银川市界",
			"target": "考核目标：Ⅱ类",
			"level": "1",
			"top": "170px",
			"left": "250px"
		},
		{
			"id": 4,
			"PositionName": "银古公路桥",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "控制黄河宁东能源化工基地段水质",
			"target": "考核目标：Ⅱ类",
			"level": "3",
			"top": "220px",
			"left": "350px"
		},
		{
			"id": 5,
			"PositionName": "平罗黄河大桥",
			"AQI": "Ⅲ",
			"PrimaryPollutant": "银川—石嘴山市界",
			"target": "考核目标：Ⅲ类",
			"level": "2",
			"top": "110px",
			"left": "200px"
		},
		{
			"id": 6,
			"PositionName": "麻黄沟",
			"AQI": "Ⅲ",
			"PrimaryPollutant": "宁夏—内蒙古省界",
			"target": "考核目标：Ⅲ类",
			"level": "1",
			"top": "50px",
			"left": "320px"
		},
		{
			"id": 7,
			"PositionName": "二十里铺",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "上游源头水",
			"target": "—",
			"level": "3",
			"top": "530px",
			"left": "235px"
		},
		{
			"id": 8,
			"PositionName": "三营",
			"AQI": "劣Ⅴ",
			"PrimaryPollutant": "固原—中卫市界",
			"target": "考核目标：Ⅳ类",
			"level": "1",
			"top": "420px",
			"left": "230px"
		},
		{
			"id": 9,
			"PositionName": "泉眼山",
			"AQI": "Ⅲ",
			"PrimaryPollutant": "中卫市入黄口",
			"target": "考核目标：Ⅲ类",
			"level": "2",
			"top": "310px",
			"left": "170px"
		},
		{
			"id": 10,
			"PositionName": "玉桥",
			"AQI": "Ⅲ",
			"PrimaryPollutant": "宁夏—甘肃省界",
			"target": "考核目标：Ⅳ类",
			"level": "3",
			"top": "310px",
			"left": "70px"
		},
		{
			"id": 11,
			"PositionName": "龙潭水库",
			"AQI": "Ⅰ",
			"PrimaryPollutant": "上游源头水",
			"target": "—",
			"level": "1",
			"top": "460px",
			"left": "180px"
		},
		{
			"id": 12,
			"PositionName": "弹筝峡",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "宁夏—甘肃省界",
			"target": "考核目标：Ⅱ类",
			"level": "2",
			"top": "370px",
			"left": "110px"
		},
		{
			"id": 13,
			"PositionName": "峰台",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "上游源头水",
			"target": "—",
			"level": "3",
			"top": "530px",
			"left": "310px"
		},
		{
			"id": 14,
			"PositionName": "联财",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "宁夏—甘肃省界",
			"target": "Ⅳ类",
			"level": "2",
			"top": "560px",
			"left": "160px"
		},
		{
			"id": 15,
			"PositionName": "石家河桥",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "宁夏—甘肃省界",
			"target": "—",
			"level": "1",
			"top": "595px",
			"left": "200px"
		},
		{
			"id": 16,
			"PositionName": "乃家河水库",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "上游源头水",
			"target": "—",
			"level": "3",
			"top": "470px",
			"left": "270px"
		},
		{
			"id": 17,
			"PositionName": "沟圈",
			"AQI": "Ⅱ",
			"PrimaryPollutant": "宁夏—甘肃省界",
			"target": "Ⅳ类",
			"level": "1",
			"top": "520px",
			"left": "130px"
		},
		{
			"id": 18,
			"PositionName": "常沟",
			"AQI": "Ⅲ",
			"PrimaryPollutant": "宁夏—甘肃省界",
			"target": "-",
			"level": "3",
			"top": "325px",
			"left": "310px"
		},
		{
			"id": 19,
			"PositionName": "杨坡",
			"AQI": "断流",
			"PrimaryPollutant": "宁夏—甘肃省界",
			"level": "3",
			"target": "-",
			"top": "220px",
			"left": "270px"
		},
		{
			"id": 20,
			"PositionName": "乌陶公路桥",
			"AQI": "Ⅳ",
			"PrimaryPollutant": "石嘴山市入黄口",
			"target": "-",
			"level": "3",
			"top": "85px",
			"left": "290px"
		}
	]
};
// 2、建设项目数据
var mapdata2 = {
	"QuanQuList": [{
		"areaName": '银川市',
		"huanping": '320',
		"check": '验收项目：120',
		"checkRate": '验收率：37.50%',
		"top": '110px',
		"left": '200px',
		"picUrl": './images/build_yinchuan.png'
	}, {
		"areaName": '石嘴山市',
		"huanping": '302',
		"check": '验收项目：132',
		"checkRate": '验收率：43.71%',
		"top": '20px',
		"left": '240px',
		"picUrl": './images/build_shizuishan.png'
	}, {
		"areaName": '中卫市',
		"huanping": '341',
		"check": '验收项目：101',
		"checkRate": '验收率：29.62%',
		"top": '270px',
		"left": '120px',
		"picUrl": './images/build_zhongwei.png'
	}, {
		"areaName": '吴忠市',
		"huanping": '374',
		"check": '验收项目：134',
		"checkRate": '验收率：35.83%',
		"top": '220px',
		"left": '230px',
		"picUrl": './images/build_wuzhong.png'
	}, {
		"areaName": '固原市',
		"huanping": '390',
		"check": '验收项目：190',
		"checkRate": '验收率：48.72%',
		"top": '470px',
		"left": '230px',
		"picUrl": './images/build_guyuan.png'
	}]
};
// 3、公众监督数据
var mapdata3 = {
	"QuanQuList": [{
		"areaName": '银川市',
		"complainNum": '388',
		"airDirty": '大气污染：81',
		"waterDirty": '水污染：21',
		"soundDirty": '277',
		"top": '110px',
		"left": '200px',
		"picUrl": './images/supervise_yinchuan.png'
	}, {
		"areaName": '石嘴山市',
		"complainNum": '93',
		"airDirty": '大气污染：36',
		"waterDirty": '水污染：6',
		"soundDirty": '48',
		"top": '20px',
		"left": '240px',
		"picUrl": './images/supervise_shizuishan.png'
	}, {
		"areaName": '中卫市',
		"complainNum": '21',
		"airDirty": '大气污染：14',
		"waterDirty": '水污染：2',
		"soundDirty": '4',
		"top": '270px',
		"left": '120px',
		"picUrl": './images/supervise_zhongwei.png'
	}, {
		"areaName": '吴忠市',
		"complainNum": '190',
		"airDirty": '大气污染：75',
		"waterDirty": '水污染：20',
		"soundDirty": '78',
		"top": '220px',
		"left": '230px',
		"picUrl": './images/supervise_wuzhong.png'
	}, {
		"areaName": '固原市',
		"complainNum": '46',
		"airDirty": '大气污染：14',
		"waterDirty": '水污染：3',
		"soundDirty": '27',
		"top": '470px',
		"left": '230px',
		"picUrl": './images/supervise_guyuan.png'
	}, {

		"areaName": '宁东地区',
		"complainNum": '2',
		"airDirty": '大气污染：0',
		"waterDirty": '水污染：1',
		"soundDirty": '0',
		"top": '260px',
		"left": '310px',
		"picUrl": './images/supervise_ningdong.png'
	}]
};
// 4、排污许可证数据
var mapdata4 = {
	"QuanQuList": [{
		"areaName": '银川市',
		"permissionNum": '4731',
		"expen": '排污收费数：7,353,516',
		"rate": '比例：20.43%',
		"top": '110px',
		"left": '200px',
		"picUrl": './images/permission_yinchuan.png'
	}, {
		"areaName": '石嘴山市',
		"permissionNum": '112',
		"expen": '排污收费数：5,139,185',
		"rate": '比例：14.28%',
		"top": '20px',
		"left": '240px',
		"picUrl": './images/permission_shizuishan.png'
	}, {
		"areaName": '中卫市',
		"permissionNum": '170',
		"expen": '排污收费数：5,375,270',
		"rate": '比例：14.94%',
		"top": '270px',
		"left": '120px',
		"picUrl": './images/permission_zhongwei.png'
	}, {
		"areaName": '吴忠市',
		"permissionNum": '368',
		"expen": '排污收费数：2,228,353',
		"rate": '比例：61.92%',
		"top": '220px',
		"left": '230px',
		"picUrl": './images/permission_wuzhong.png'
	}, {
		"areaName": '固原市',
		"permissionNum": '53',
		"expen": '排污收费数：813,519',
		"rate": '比例：2.26%',
		"top": '470px',
		"left": '230px',
		"picUrl": './images/permission_guyuan.png'
	}]
};
//5、大气环境数据
var airsData = [
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "隆德站",
		"Longitude": "106.126944",
		"Latitude": "35.615833",
		"AQI": "37",
		"PrimaryPollutant": "—",
		"number": "1",
		"Top": "600",
		"Left": "220"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "平罗县",
		"Longitude": "106.535723",
		"Latitude": "38.919503",
		"AQI": "42",
		"PrimaryPollutant": "—",
		"number": "2",
		"Top": "110",
		"Left": "270"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "泾源站",
		"Longitude": "106.3041666",
		"Latitude": "35.495",
		"AQI": "43",
		"PrimaryPollutant": "—",
		"number": "3",
		"Top": "610",
		"Left": "250"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "贺兰银河北街",
		"Longitude": "106.337222",
		"Latitude": "38.5627777",
		"AQI": "45",
		"PrimaryPollutant": "—",
		"number": "4",
		"Top": "125",
		"Left": "250"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "滨河新区",
		"Longitude": "106.75861",
		"Latitude": "38.63972",
		"AQI": "46",
		"PrimaryPollutant": "—",
		"number": "5",
		"Top": "131",
		"Left": "280"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "大武口朝阳西街站点",
		"Longitude": "106.36699",
		"Latitude": "39.014358",
		"AQI": "47",
		"PrimaryPollutant": "—",
		"number": "6",
		"Top": "95",
		"Left": "280"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "红果子惠新街站点",
		"Longitude": "106.709686",
		"Latitude": "39.1316611",
		"AQI": "48",
		"PrimaryPollutant": "—",
		"number": "7",
		"Top": "79",
		"Left": "290"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "红寺堡区",
		"Longitude": "106.061695",
		"Latitude": "37.439066",
		"AQI": "50",
		"PrimaryPollutant": "—",
		"number": "8",
		"Top": "335",
		"Left": "285"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "强家庙社区",
		"Longitude": "106.420722",
		"Latitude": "38.40213",
		"AQI": "52",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "9",
		"Top": "188",
		"Left": "320"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "西吉站",
		"Longitude": "105.7316667",
		"Latitude": "35.961666",
		"AQI": "52",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "10",
		"Top": "563",
		"Left": "230"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "灵武灵州大道",
		"Longitude": "106.3343055",
		"Latitude": "38.10166",
		"AQI": "52",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "11",
		"Top": "225",
		"Left": "300"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "中宁站",
		"Longitude": "105.698902",
		"Latitude": "37.489642",
		"AQI": "53",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "12",
		"Top": "325",
		"Left": "233"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "贺兰山东路",
		"Longitude": "106.232777",
		"Latitude": "38.4975",
		"AQI": "53",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "13",
		"Top": "164",
		"Left": "250"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "沙湖旅游区站点",
		"Longitude": "106.3394",
		"Latitude": "38.81697",
		"AQI": "53",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "14",
		"Top": "116",
		"Left": "270"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "宁化生活区",
		"Longitude": "106.07153",
		"Latitude": "38.485833",
		"AQI": "55",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "15",
		"Top": "143",
		"Left": "270"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "上海东路",
		"Longitude": "106.2739",
		"Latitude": "38.4841",
		"AQI": "56",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "16",
		"Top": "170",
		"Left": "290"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "盐池县",
		"Longitude": "107.41351",
		"Latitude": "37.789634",
		"AQI": "56",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "17",
		"Top": "284",
		"Left": "350"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "同心环保局东",
		"Longitude": "105.933139",
		"Latitude": "36.994574",
		"AQI": "59",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "18",
		"Top": "415",
		"Left": "269"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "彭阳站",
		"Longitude": "106.62694",
		"Latitude": "35.859722",
		"AQI": "59",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "19",
		"Top": "577",
		"Left": "260"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "海原站",
		"Longitude": "105.6407944",
		"Latitude": "36.566838",
		"AQI": "59",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "20",
		"Top": "474",
		"Left": "221"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "吴忠教育园区",
		"Longitude": "106.15325",
		"Latitude": "37.96477777",
		"AQI": "59",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "21",
		"Top": "260",
		"Left": "289"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "中卫沙坡头消防站",
		"Longitude": "105.019722",
		"Latitude": "37.451388",
		"AQI": "59",
		"PrimaryPollutant": "臭氧1小时",
		"number": "22",
		"Top": "350",
		"Left": "125"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "阅海商务区",
		"Longitude": "106.22888",
		"Latitude": "38.5145277",
		"AQI": "61",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "23",
		"Top": "160",
		"Left": "250"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "中卫环保局",
		"Longitude": "105.197105",
		"Latitude": "37.50021",
		"AQI": "61",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "24",
		"Top": "325",
		"Left": "170"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "水乡路",
		"Longitude": "106.238522",
		"Latitude": "38.447798",
		"AQI": "62",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "25",
		"Top": "177",
		"Left": "200"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "文昌北街",
		"Longitude": "106.1024",
		"Latitude": "38.49494",
		"AQI": "63",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "26",
		"Top": "148",
		"Left": "265"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "永宁迎宾大道",
		"Longitude": "106.263766",
		"Latitude": "38.28798",
		"AQI": "65",
		"PrimaryPollutant": "臭氧1小时",
		"number": "27",
		"Top": "210",
		"Left": "307"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "固原新区站",
		"Longitude": "106.2375",
		"Latitude": "36.02111",
		"AQI": "66",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "28",
		"Top": "530",
		"Left": "287"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "官桥站",
		"Longitude": "105.18",
		"Latitude": "37.0172222",
		"AQI": "67",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "29",
		"Top": "407",
		"Left": "173"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "吴忠高级中学",
		"Longitude": "106.210333",
		"Latitude": "37.983055",
		"AQI": "68",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "30",
		"Top": "255",
		"Left": "294"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "固原马园站",
		"Longitude": "106.231944",
		"Latitude": "36.141666",
		"AQI": "69",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "31",
		"Top": "520",
		"Left": "280"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "贺兰山马莲口",
		"Longitude": "105.95118",
		"Latitude": "38.60164166",
		"AQI": "73",
		"PrimaryPollutant": "臭氧1小时",
		"number": "32",
		"Top": "137",
		"Left": "200"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "临河工业园",
		"Longitude": "106.5380556",
		"Latitude": "38.2125",
		"AQI": "74",
		"PrimaryPollutant": "臭氧1小时",
		"number": "33",
		"Top": "215",
		"Left": "318"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "惠农南大街站点",
		"Longitude": "106.7704444",
		"Latitude": "39.228166",
		"AQI": "76",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "34",
		"Top": "62",
		"Left": "310"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "吴忠新区二泵站",
		"Longitude": "106.18419",
		"Latitude": "37.996305",
		"AQI": "78",
		"PrimaryPollutant": "臭氧1小时",
		"number": "35",
		"Top": "244",
		"Left": "283"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "学院路",
		"Longitude": "106.13583",
		"Latitude": "38.5036111",
		"AQI": "79",
		"PrimaryPollutant": "臭氧1小时",
		"number": "36",
		"Top": "152",
		"Left": "265"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "固原监测站",
		"Longitude": "106.27916",
		"Latitude": "36.002222",
		"AQI": "85",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "37",
		"Top": "544",
		"Left": "296"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "青铜峡市",
		"Longitude": "106.078564",
		"Latitude": "38.034549",
		"AQI": "86",
		"PrimaryPollutant": "颗粒物(PM10)",
		"number": "38",
		"Top": "240",
		"Left": "260"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "宁煤烯烃",
		"Longitude": "106.582222",
		"Latitude": "38.201388",
		"AQI": "98",
		"PrimaryPollutant": "臭氧1小时",
		"number": "39",
		"Top": "217",
		"Left": "325"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "鸭子荡水库",
		"Longitude": "106.541666",
		"Latitude": "38.19555",
		"AQI": "98",
		"PrimaryPollutant": "臭氧1小时",
		"number": "40",
		"Top": "220",
		"Left": "320"
	},
	{
		"TimePoint": "2017-07-21 14:00:00",
		"PositionName": "宝塔石化",
		"Longitude": "106.6027777",
		"Latitude": "38.11611",
		"AQI": "112",
		"PrimaryPollutant": "臭氧1小时",
		"number": "41",
		"Top": "225",
		"Left": "330"
	}
];



// 水环境
function waterEnv(){
	// 水环境---全区重点断面圆环图
	var key_sections = echarts.init(document.getElementById('key_sections'));
	key_sections.setOption({
		title: {
			text: '全区重点断面',
			x: 'center',
			y: 'center',
			textStyle: {
				fontSize: 14,
				color: '#fff',
				fontFamily: '宋体'
			}
		},
		series: [{
			type: 'pie',
			hoverAnimation: false,
			radius: [70, 88],
			label: {
				normal: {
					textStyle: {
						fontSize: 12,
						color: '#fff'
					}
				}
			},
			labelLine: {
				normal: {
					length: -9, //引出线的长度
					show: false
				}
			},
			data: [{
					value: 6,
					name: '黄河干流断面(6)个'
				},
				{
					value: 14,
					name: '黄河支流断面(14)个'
				},
				{
					value: 8,
					name: '沿海重灾区(8)个'
				}
			]
		}],
		color: ['#62d740', '#5ab7ff', '#fd7e01']
	});
	// 水环境---考核断面水质等级金字塔图
	$('#water_level').highcharts({
		chart: {
			type: 'pyramid',
			backgroundColor: 'none',
			borderWidth: 0,
			height: 260,
			marginRight: 20,
			alignTicks: false,
		},
		exporting: {
			enabled: false
		},
		credits: {
			enabled: false,
		},
		title: {
			text: '考核断面水质等级',
			align: 'center',
			x: -10,
			y: 25,
			style: {
				color: '#fff',
				fontFamily: '微软雅黑',
				fontSize: 16,
				fontWeight: 'bold'
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				dataLabels: {
					borderWidth: 0,
					distance: 0,
					enabled: true,
					connectorPadding: 1,
					style: {
						fontSize: 12,
						fontFamily: '宋体',
						color: '#fff',
						fontWeight: 'normal'
					},
				},
			}
		},
		series: [{
			type: "pyramid",
			name: '考核断面水质等级',
			borderColor: 'none',
			colors: ['#b8302c', '#ff8736', '#fdff5a', '#85ff5a', '#5ab7ff'],
			data: [
				['', 8],
				['', 7],
				['', 20],
				['', 50],
				['', 5]
			]
		}]
	});
}

// 自动监控---数据滚动列表(含获取滚动数据和滚动效果)
function autoLookDis() {
	var scrTop;
	$.ajax({
		type: 'GET',
		url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetZiDongJianKong',
		async: true,
		success: function(data) {
			var jsonData = JSON.parse($(data).find("string").html());
			$.each(jsonData.ChaoBiaoQiYeList, function(i) {
				qiye_tr = '<tr class="trr" index="' + jsonData.ChaoBiaoQiYeList[i].RegionName + '"><td>' + jsonData.ChaoBiaoQiYeList[i].WRYMC + '</td><td>' + jsonData.ChaoBiaoQiYeList[i].PollutantName + '</td><td>' + jsonData.ChaoBiaoQiYeList[i].StandardValueTrue + '/' + jsonData.ChaoBiaoQiYeList[i].AvgStrength + '</td><td>' + jsonData.ChaoBiaoQiYeList[i].MonitorTime + '</td></tr>';
				$('#table_c').append(qiye_tr);
			})
			$(".trr").each(function() {
				if($(this).attr("index") == "中卫市") {
					$(this).addClass("t_red")
				} else {
					$(this).addClass("t_blue")
				}
			})
		}
	});
	$('#table_c').hover(function() {
		clearInterval(scrTop);
	}, function() {
		var _this = $(this);
		scrTop = setInterval(function() {
			var height = _this.find('tr:first').height();
			_this.animate({
				'marginTop': '-=1'
			}, 0, function() { //每过30毫秒向上滚动1像素，累减
				var s_top = Math.abs(parseInt(_this.css("margin-top"))); //计算table向上滚动的距离
				if(s_top >= height) { //如果滚动距离超过一个tr的高度
					_this.find('tr:first').appendTo(_this); //就把第一个tr再添加到table最下面
					_this.css("margin-top", 0); //把table的margin-top归0,循环第一步
				}
			});
		}, 50);
	}).trigger('mouseout');
}

// 建设项目---环评和竣工项目柱状图
function buildTip(){
	var build = echarts.init(document.getElementById('build'));
	build.setOption({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function(params) {
				var result = params[0].name + '<br/>';
				params.forEach(function(item) {
					result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>' + item.seriesName + ': ' + (item.value > 0 ? item.value : (-item.value)) + '<br/>';
				});
				return result;
			}
		},
		legend: {
			data: ['环评项目', '竣工项目'],
			align: 'left',
			x: '38%',
			y: '0%',
			textStyle: {
				color: ['#5cc4fb', '#ff8737'],
				fontSize: 12,
				fontFamily: '宋体'
			}
		},
		grid: {
			x: '0%',
			y: '15%',
			x2: '15%',
			containLabel: true,
		},
		xAxis: [{
			type: 'category',
			data: ['银川市', '石嘴山市', '中卫市', '吴忠市', '固原市'],
			axisLine: {
				lineStyle: {
					color: '#4b5767'
				}
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0, //强制显示所有标签
				textStyle: {
					color: '#fff',
					fontFamily: '微软雅黑',
					fontSize: 14
				}
			},

		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#4b5767',
					width: 3
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontFamily: '微软雅黑',
					fontSize: 14,
					fontWeight: 'bold'
				},
				formatter: function(value) {
					if(value < 0) {
						return -value;
					} else {
						return value;
					}
				}
			}
		}],
		series: [{
				type: 'bar',
				barWidth: '29px',
				name: '环评项目',
				data: [300, 280, 310, 380, 400],
				itemStyle: {
					normal: {
						color: '#5cc5fb',
						borderWidth: 1,
						borderColor: '#rgba(255,255,255,0.5)'
					}
				},
				stack: true, //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
			},
			{
				stack: true,
				type: 'bar',
				barWidth: '29px',
				name: '竣工项目',
				data: [-100, -100, -80, -100, -180],
				itemStyle: {
					normal: {
						color: '#ff8736',
						borderWidth: 1,
						borderColor: '#rgba(255,255,255,0.5)'
					}
				}
			}
		]
	});
}

// 公众监督---全区历年公众监督环境质量分析折线图(data1,data2,data3分别为三条折线的y值,datat为legend图例,datax为横坐标所示时间)
function superviseDis(data1, data2, data3, datat, datax) {
	var supervise = echarts.init(document.getElementById('supervise'));
	supervise.setOption({
		title: {
			text: '全区历年公众监督环境质量分析',
			left: '36%',
			top: 0,
			textStyle: {
				color: '#5cc4fb',
				fontSize: 12,
				fontFamily: '微软雅黑'
			}
		},
		grid: {
			top: 30,
			y2: 80
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			}
		},
		legend: {
			align: 'left',
			icon: 'circle',
			bottom: 36,
			data: datat,
			textStyle: {
				color: ['#5cc5fb', '#85ff5a', '#ff8736'],
				fontSize: 14,
				fontFamily: '微软雅黑'
			},
			itemGap: 20
		},
		xAxis: [{
			type: 'category',
			data: datax,
			axisLine: {
				lineStyle: {
					color: '#4b5767',
					width: 2
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 14,
					fontFamily: '微软雅黑'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#323742'
				}
			}
		}],
		yAxis: [{
			type: 'value',
			min: 0,
			max: 1000,
			interval: 250,
			axisLine: {
				lineStyle: {
					color: '#323742',
					width: 1
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 14,
					fontFamily: '微软雅黑'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#323742',
					width: 1
				}
			}
		}],
		series: [{
			name: '大气污染',
			type: 'line',
			data: data1,
			itemStyle: {
				normal: {
					color: '#5cc5fb',
					lineStyle: {
						width: 3
					}
				}
			},
			symbol: 'circle',
			symbolSize: 10
		}, {
			name: '水污染',
			type: 'line',
			data: data2,
			itemStyle: {
				normal: {
					color: '#85ff5a',
					lineStyle: {
						width: 3
					}
				}
			},
			symbol: 'circle',
			symbolSize: 10
		}, {
			name: '噪声污染',
			type: 'line',
			data: data3,
			itemStyle: {
				normal: {
					color: '#ff8736',
					lineStyle: {
						width: 3
					}
				}
			},
			symbol: 'circle',
			symbolSize: 10
		}]
	});
}
// 调用公众监督并填充数据
function getSuperviseDisData() {
	$.ajax({
		type: 'GET',
		url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetGongZhongJianDu',
		async: true,
		success: function(data) {
			var legend_title = [];
			var times = [];
			var airY = [];
			var waterY = [];
			var soundY = [];
			var jsonData = JSON.parse($(data).find("string").html());
			for(var i = 0; i < jsonData.GongZhongJianDuList.length; i++) {
				if(times.indexOf(jsonData.GongZhongJianDuList[i].AcceptTime) == -1) {
					times.push(jsonData.GongZhongJianDuList[i].AcceptTime);
				}
				if(jsonData.GongZhongJianDuList[i].InformCategory == '大气污染') {
					legend_title.push(jsonData.GongZhongJianDuList[i].InformCategory);
					airY.push(jsonData.GongZhongJianDuList[i].number);
				} else if(jsonData.GongZhongJianDuList[i].InformCategory == '水污染') {
					legend_title.push(jsonData.GongZhongJianDuList[i].InformCategory);
					waterY.push(jsonData.GongZhongJianDuList[i].number);
				} else if(jsonData.GongZhongJianDuList[i].InformCategory == '噪声污染') {
					legend_title.push(jsonData.GongZhongJianDuList[i].InformCategory);
					soundY.push(jsonData.GongZhongJianDuList[i].number);
				}
			}
			superviseDis(airY, waterY, soundY, legend_title, times)
		}
	});
}

// 排污许可证---宁夏自治区企业排污许可证数量统计和雷达图
function permission_num() {
	var permission = echarts.init(document.getElementById('permission'));
	permission.setOption({
		radar: {
			radius: '58%',
			indicator: [{
					name: '国家重点监控企业',
					min: 0
				},
				{
					name: '市控企业',
					min: 0
				},
				{
					name: '医疗机构',
					min: 0
				},
				{
					name: '集中供热单位',
					min: 0
				},
				{
					name: '一般工业企业',
					max: 100
				},
				{
					name: '餐饮企业',
					max: 100
				}
			],
			name: {
				textStyle: {
					color: '#fff'
				}
			}
		},
		series: [{
			type: 'radar',
			data: [{
				value: [0, 0, 0, 0, 35, 100],
			}]
		}]
	});
	$.ajax({
		type: 'GET',
		url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetPaiWuNum',
		async: true,
		success: function(data) {
			var jsonData = JSON.parse($(data).find("string").html());
			for(var i=0; i<jsonData.WuRanYuanList.length-1; i++){
				$('#permission_card .p_num'+(i+1)).html(jsonData.WuRanYuanList[i].number);
			}
		}
	})
}

// 污染源---污染企业监测级别柱状图(data表示y值)
function sourceChart(data){
	var levelChart = echarts.init(document.getElementById('level'));
	levelChart.setOption({
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			}
		},
		title: {
			text: '宁夏污染企业监测级别统计',
			x: 'center',
			top: 10,
			textStyle: {
				fontSize: 14,
				color: '#5cc4fb'
			}
		},
		xAxis: {
			type: 'category',
			data: ['国控企业', '省控企业', '市控企业', '非重点污...', '其他'],
			axisLabel: {
				show: true,
				interval: 0,
				textStyle: {
					color: '#fff'
				},
			},
			axisLine: {
				lineStyle: {
					color: '#808d9e'
				}
			},
			axisTick: {
				lineStyle: {
					color: '#ccd6eb'
				},
				length: 8
			}
		},
		yAxis: [{
			min: 0,
			max: 4500,
			interval: 1500,
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontFamily: '微软雅黑'
				}
			},
			splitLine: {
				show: true
			},
			axisLine: {
				show: false
			}
		}],
		grid: {
			width: '80%',
			x: '50',
		},
		series: [{
			type: 'bar',
			data: data,
			barWidth: '30px',
			itemStyle: {
				normal: {
					color: function(params) {
						var colorList = ['#b7302d', '#dc3c3c', '#ff8737', '#fdff5a', '#85ff5a'];
						return colorList[params.dataIndex];
					},
					label: {
						show: true,
						position: 'top',
						formatter: '{c}\n',
						textStyle: {
							color: '#fff',
							fontWeight: 'bold'
						}
					}
				}
			}
		}],
	});
}
// 污染源---污染企业区域汇总统计(各个参数分别表示不同的y值)
function sourceArea(data1,data2,data3,data4,data5,data6){
	var area = echarts.init(document.getElementById('area'));
	area.setOption({
		title: {
			text: '宁夏污染企业区域汇总统计',
			x: 'center',
			textStyle: {
				fontSize: 14,
				color: '#5cc4fb'
			},
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {d}%"
		},
		legend: {
			orient: 'horizontal',
			x: 'center',
			left: 30,
			bottom: 20,
			data: ['银川市', '石嘴山市', '吴忠市', '固原市', '中卫市', '宁东地区'],
			icon: 'circle',
			textStyle: {
				color: '#fff',
				fontWeight: 'bold',
				fontFamily: '微软雅黑'
			}
		},
		series: {
			name: '污染区域统计',
			type: 'pie',
			radius: '65%',
			center: ['50%', '38%'],
			label: {
				normal: {
					position: 'inner',
					textStyle: {
						fontSize: 12,
						color: '#fff',
						fontWeight: 'bold'
					},
					formatter: function(params) {
						return(params.percent).toFixed(1) + '%';
					}
				}
			},
			labelLine: {
				normal: {
					show: false,
					length: 0 //引出线的长度
				}
			},
			itemStyle: {
				normal: {
					//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
					color: function(params) {
						var colorList = ['#65fc9a', '#16b7f4', '#32d981', '#efef1a', '#ef8f0a', '#b8302c'];
						return colorList[params.dataIndex];
					}
				}
			},
			data: [{
					value: data1,
					name: '银川市'
				},
				{
					value: data2,
					name: '石嘴山市'
				},
				{
					value: data3,
					name: '吴忠市'
				},
				{
					value: data4,
					name: '固原市'
				},
				{
					value: data5,
					name: '中卫市'
				},
				{
					value: data6,
					name: '宁东地区'
				}
			],
		}
	});
}
// 调用污染源柱状图并填充数据
function getSourceChart(){
	var sourceValues = [];
	$.ajax({
		type: 'GET',
		url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetQiYeTypeCount',
		async: true,
		success: function(data) {
			var jsonData = JSON.parse($(data).find("string").html());
			for(var i = 0; i < jsonData.QiYeTypeCount.length; i++) {
				sourceValues.push(jsonData.QiYeTypeCount[i].number)
			}
			sourceChart(sourceValues);
		}
	});
}
// 调用污染源饼图并填充数据
function getSourceArea(){
	$.ajax({
		type: 'GET',
		url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetQiYeCityCount',
		async: true,
		success: function(data) {
			var jsonData = JSON.parse($(data).find("string").html());
			sourceArea(jsonData.QiYeCityCount[0].number,jsonData.QiYeCityCount[1].number,jsonData.QiYeCityCount[2].number,jsonData.QiYeCityCount[3].number,jsonData.QiYeCityCount[4].number,jsonData.QiYeCityCount[5].number);
		}
	})
}
	
// 大气环境
function airTabs() {
	var airArea0 = [],
		airArea1 = [],
		airArea2 = [],
		airArea3 = [],
		airArea4 = [];
	var areas = [airArea0, airArea1, airArea2, airArea3, airArea4];
	var _idx = 0;
	var tab_timer;
	var d = new Date();
	var now = new Date(d.getTime());
	var end = new Date(d.getTime() - 86400000 * 15);
	var nowDay = (now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate());
	var endDay = (end.getFullYear() + "-" + (end.getMonth() + 1) + "-" + end.getDate());

	// 大气环境---面积折线图
	function airZxt(airData) {
		var mountain = echarts.init(document.getElementById('mountain'));
		mountain.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
				padding: [4, 10, 4, 15],
				formatter: function(params) {
					var result = '';
					params.forEach(function(item) {
						result += '<span style="position:absolute;left:3px;top:10px; border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>' + item.value;
					});
					return result;
				}
			},
			grid: {
				x: 30,
				y: 5
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: [endDay, '', '', '', '', '', '', '', '', '', '', '', nowDay, '', ''],
				axisLabel: {
					interval: 3,
					show: true,
					textStyle: {
						color: '#fff',
						fontFamily: '微软雅黑'
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#323742',
						type: 'dashed'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#4b5767',
						width: 2
					}
				},
				axisTick: {
					show: false
				}
			}],
			yAxis: [{
				type: 'value',
				min: 0,
				max: 300,
				interval: 100,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#fff',
						fontFamily: '微软雅黑'
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#323742',
						type: 'dotted'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#4b5767'
					}
				},
				axisTick: {
					lineStyle: {
						color: '#4b5767'
					}
				}
			}],
			legend: {
				show: false
			},
			visualMap: {
				showLabel: false,
				show: false,
				pieces: [{
					min: 0,
					lte: 100,
					color: '#5ad342'
				}, {
					gt: 100,
					lte: 200,
					color: '#f4e625'
				}, {
					gt: 200,
					color: '#f48b25'
				}]
			},
			series: [{
				symbol: 'none',
				smooth: true,
				type: 'line',
				smooth: true,
				smoothMonotone: 'x',
				slient: true,
				data: airData,
				itemStyle: {
					normal: {
						areaStyle: {
							type: ''
						},
						lineStyle: {
							width: 3
						}
					}
				}
			}]
		});
	}
	// 调用大气环境面积图并填充数据
	function getZXTData(zxtData) {
		$.ajax({
			type: 'POST',
			url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetAQIHistoryData',
			data: {
				endTime: nowDay,
				startTime: endDay
			},
			async: true,
			success: function(data) {
				var jsonData = JSON.parse($(data).find("string").html());
				for(var i = 0; i < jsonData.AQIHistory.length; i++) {
					switch(jsonData.AQIHistory[i].XZQH){
						case "银川市" : airArea0.push(jsonData.AQIHistory[i].aqiAVG);
						break;
						case "石嘴山市" : airArea1.push(jsonData.AQIHistory[i].aqiAVG);
						break;
						case "吴忠市" : airArea2.push(jsonData.AQIHistory[i].aqiAVG);
						break;
						case "固原市" : airArea3.push(jsonData.AQIHistory[i].aqiAVG);
						break;
						case "中卫市" : airArea4.push(jsonData.AQIHistory[i].aqiAVG);
						break;
					}
				}
				airZxt(zxtData);
			}
		});
	}
	//大气环境---仪表盘
	function gaugeChart(data) {
		var gauge = echarts.init(document.getElementById('gauge'));
		gauge.setOption({
			tooltip: {
				formatter: "{a} <br/>{c} {b}"
			},
			series: [{
					name: '大气环境中',
					type: 'gauge',
					z: 3,
					min: 0,
					max: 400,
					splitNumber: 4,
					radius: '70%',
					axisLine: {
						lineStyle: {
							width: 10,
							color: [
								[0],
								[1, '#4b5767']
							]
						}
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						length: 15,
						lineStyle: {
							color: '#4b5767'
						}
					},
					splitLine: {
						length: 25,
						lineStyle: {
							color: '#4b5767'
						}
					},
					pointer: {
						width: 5,
						length: 90,
					},
					title: {
						offsetCenter: [0, -50],
						textStyle: {
							fontSize: 14,
							color: '#fff'
						}
					},
					detail: {
						offsetCenter: [0, '90%'],
						textStyle: {
							color: '#fff',
							fontSize: 40
						}
					},
					data: [{
						value: data,
						name: 'AQI',
						itemStyle: {
							normal: {
								color: '#fff'
							}
						}
					}]
				},
				{
					name: '大气环境小',
					type: 'gauge',
					min: 0,
					max: 400,
					splitNumber: 6,
					radius: '30%',
					axisLine: {
						lineStyle: {
							width: 10,
							color: [
								[0.2, '#64d640'],
								[0.4, '#f4e525'],
								[0.6, '#fd7e02'],
								[0.75, '#fc0001'],
								[1.25, '#9a0052'],
								[1.75, '#4b5767']
							]
						}
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: false
					},
					pointer: {
						show: false
					},
					title: {
						show: false
					},
					detail: {
						show: false
					}
				},
				{
					name: '大气环境大',
					type: 'gauge',
					min: 0,
					max: 400,
					radius: '95%',
					axisLine: {
						lineStyle: {
							width: 10,
							color: [
								[0],
								[1, '#77d83c']
							]
						}
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: false
					},
					pointer: {
						show: false
					},
					title: {
						show: false
					},
					detail: {
						show: false
					}
				}
			]
		});
	}
	//调用大气环境并填充仪表盘的数据
	function getGaugeChartData(chartIndex) {
		$.ajax({
			type: 'GET',
			url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/getAQICurrentData',
			async: true,
			success: function(data) {
				var jsonData = JSON.parse($(data).find("string").html());
				gaugeChart(jsonData.AQICurrentData[chartIndex].AQI)
			}
		});
	}
	//不同城市间的大气环境切换
	function areaTabs(){
		var air = function(idx) {getGaugeChartData(idx); getZXTData(areas[idx])};
		air(0);	//初始显示第一个的面积折线图和仪表盘
		function autoTab() {
			tab_timer = setInterval(function() {
				_idx++;
				if(_idx > 4) {
					_idx = 0;
				}
				$('#cityName li').eq(_idx).addClass('active').siblings().removeClass('active');
				air(_idx);
			}, 10000);
		}
		autoTab();
		$('#cityName li').each(function(i) {
			$(this).mouseover(function() {
				clearInterval(tab_timer);
				$(this).addClass('active').siblings().removeClass('active');
				air(i);
				_idx = i;
			});
			$(this).mouseout(function() {
				autoTab();
			});
		})
	}
	areaTabs();
}

// DOM结构加载完毕调用方法
// 处理自动监控数据在地图上的显示 
$(function() {
	var szsArea = [
		{"top": 40,"left": 240},
		{"top": 60,"left": 250},
		{"top": 100,"left": 270},
		{"top": 30,"left": 280}
	];
	var ycArea = [
		{"top": 70,"left": 210},
		{"top": 100,"left": 220},
		{"top": 120,"left": 230},
		{"top": 140,"left": 248},
		{"top": 160,"left": 255},
		{"top": 180,"left": 263},
		{"top": 150,"left": 225},
		{"top": 170,"left": 277},
		{"top": 190,"left": 266},
		{"top": 193,"left": 260},
		{"top": 195,"left": 222},
		{"top": 200,"left": 275},
		{"top": 220,"left": 205},
		{"top": 80,"left": 236},
		{"top": 90,"left": 259},
		{"top": 215,"left": 233},
		{"top": 220,"left": 244},
		{"top": 225,"left": 238},
		{"top": 110,"left": 217},
		{"top": 130,"left": 234},
		{"top": 199,"left": 226},
		{"top": 205,"left": 261},
		{"top": 210,"left": 256}
	];
	var wzArea = [
		{"top": 265,"left": 180},
		{"top": 275,"left": 340},
		{"top": 285,"left": 200},
		{"top": 260,"left": 220},
		{"top": 270,"left": 240},
		{"top": 300,"left": 260},
		{"top": 295,"left": 320},
		{"top": 255,"left": 300},
	];
	var zwArea = [
		{"top": 270,"left": 120},
		{"top": 370,"left": 135},
		{"top": 380,"left": 150},
		{"top": 280,"left": 165},
		{"top": 290,"left": 180},
		{"top": 300,"left": 195},
		{"top": 310,"left": 210},
		{"top": 320,"left": 235},
		{"top": 330,"left": 250},
		{"top": 340,"left": 265},
		{"top": 350,"left": 280},
		{"top": 275,"left": 125},
		{"top": 285,"left": 130},
		{"top": 295,"left": 140},
		{"top": 305,"left": 190},
		{"top": 315,"left": 200},
		{"top": 345,"left": 220},
		{"top": 325,"left": 230},
		{"top": 335,"left": 240},
		{"top": 350,"left": 270}
	];
	var ndArea = [
		{"top": 230,"left": 325},
		{"top": 240,"left": 335},
		{"top": 250,"left": 340},
		{"top": 260,"left": 320},
		{"top": 270,"left": 305},
		{"top": 280,"left": 300},
		{"top": 290,"left": 310},
		{"top": 300,"left": 320},
		{"top": 310,"left": 330},
		{"top": 320,"left": 370},
		{"top": 330,"left": 315},
		{"top": 220,"left": 345},
		{"top": 265,"left": 365},
		{"top": 275,"left": 355},
		{"top": 305,"left": 360}
	];
	var gyArea = [
		{"top": 520,"left": 260},
		{"top": 530,"left": 270},
		{"top": 540,"left": 280},
		{"top": 550,"left": 290},
		{"top": 560,"left": 300}
	];
	var nhArea = [
		{"top": 430,"left": 220},
		{"top": 450,"left": 230},
		{"top": 460,"left": 200},
		{"top": 470,"left": 210}
	];
	var tableData = [];  //自动监控
	var sourceData = []; //污染物
	var dis_map_timer;

	// 随机生成地图上每个区域的点
	function getRandomDian(data, DataType, areaName, dataIndex){
		var idx = Math.floor(Math.random()*areaName.length);
		data["top"] = areaName[idx].top;
		data["left"] = areaName[idx].left;
		DataType.push(data);
	}
	// 获取自动监控数据并生成新数组
	$.ajax({
		url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetZiDongJianKong',
		success: function(data) {
			var jsonData = JSON.parse($(data).find("string").html());
			for(var i = 0; i < jsonData.ChaoBiaoQiYeList.length; i++) {
				switch(jsonData.ChaoBiaoQiYeList[i].RegionName){
					case '石嘴山市': getRandomDian(jsonData.ChaoBiaoQiYeList[i],tableData,szsArea,i);
					break;
					case '银川市': getRandomDian(jsonData.ChaoBiaoQiYeList[i],tableData,ycArea,i);
					break;
					case '中卫市': getRandomDian(jsonData.ChaoBiaoQiYeList[i],tableData,zwArea,i);
					break;
					case '宁东区': getRandomDian(jsonData.ChaoBiaoQiYeList[i],tableData,ndArea,i);
					break;
					case '固原市': getRandomDian(jsonData.ChaoBiaoQiYeList[i],tableData,gyArea,i);
					break;
					case '宁夏回族自治区': getRandomDian(jsonData.ChaoBiaoQiYeList[i],tableData,nhArea,i);
					break;
				}
			}
		}
	})
	// 获取污染源数据并生成新数组
	$.ajax({
		url: 'http://119.60.12.114:10291/NingXiaWebService/NingXiaService.asmx/GetWuRanYuan',
		success: function(data) {
			var jsonData = JSON.parse($(data).find("string").html());
			for(var i = 0; i < 60; i++) {
				switch(jsonData.WuRanYuanList[i].cityName){
					case '银川市': getRandomDian(jsonData.WuRanYuanList[i],sourceData,ycArea,i);
					break;
					case '吴忠市': getRandomDian(jsonData.WuRanYuanList[i],sourceData,wzArea,i);
					break;
					case '中卫市': getRandomDian(jsonData.WuRanYuanList[i],sourceData,zwArea,i);
					break;
					case '宁东基地': getRandomDian(jsonData.WuRanYuanList[i],sourceData,ndArea,i);
					break;
				}
			}
		}
	})

	// 地图数据：
	function mapTabs() {
		// 自动监控和污染源地图上点的样式
		function addPoints(top, left, className, data) {
			var span = $('<span></span>')
			span.addClass(className);
			span.attr("name", data);
			var myTop = top + 'px';
			var myLeft = left + 'px';
			span.css({
				top: myTop,
				left: myLeft
			})
			span.appendTo($('.map_wrapper'));
		}
		// 不同地图项切换时的样式变化
		function TextStyleTabs(domImg) {
			$('.map .map_text1').html('');
			$('.map .map_text2').html('');
			$('.map .map_text3').html('');
			$('.map .map_text4').html('');
			$('.map_wrapper *').not('.map_img').remove();
			$('#supervise_all .supervise_title').attr('src', './images/supervise_title.png');
			$('.head_common').attr('src', './images/common_head.png');
			$(domImg).attr('src', './images/common_head_active.jpg');
		}
		//随机显示某个点的数据
		function randomDisData(data1,data2,data3,data4) {
			$('.map .map_text1').html(data1).attr('title',data1);
			$('.map .map_text2').html(data2).attr('title',data2);
			$('.map .map_text3').html(data3).attr('title',data3);
			$('.map .map_text4').html(data4);
		}
		// 在地图上生成点
		function newPoint(mapdata,data1,data2,data3,data4,className) {
			randomDisData(data1,data2,data3,data4);
			for(var i = 0; i < mapdata.QuanQuList.length; i++) {
				var myLeft = mapdata.QuanQuList[i].left;
				var myTop = mapdata.QuanQuList[i].top;
				var img_url = mapdata.QuanQuList[i].picUrl;
				var type_img = $('<img />');
				type_img.addClass(className);
				type_img.css({
					left: myLeft,
					top: myTop
				});
				type_img.attr('src', img_url);
				type_img.appendTo($('.map_wrapper'));
			}
		}

		// 循环轮播每个模块
		var dis_map = [
			// 水环境在地图上点的样式及内容
			function disWaterLevel() {
				TextStyleTabs('#water_envir .title_bg');
				// 随机显示水环境地图数据
				var index = Math.floor(Math.random() * (mapdata1.QuanQuList.length));
				randomDisData(mapdata1.QuanQuList[index].PositionName,mapdata1.QuanQuList[index].AQI,mapdata1.QuanQuList[index].PrimaryPollutant,mapdata1.QuanQuList[index].target);
				for(var i = 0; i < mapdata1.QuanQuList.length; i++) {
					var myLeft = mapdata1.QuanQuList[i].left;
					var myTop = mapdata1.QuanQuList[i].top;
					var circle = $('<span></span>');
					circle.addClass('waterDian');
					circle.css({
						left: myLeft,
						top: myTop
					});
					if(mapdata1.QuanQuList[i].level == 1) {
						circle.css('background', 'url(./images/green_circle.png)');
					}
					if(mapdata1.QuanQuList[i].level == 2) {
						circle.css('background', 'url(./images/yellow_circle.png)');
					}
					if(mapdata1.QuanQuList[i].level == 3) {
						circle.css('background', 'url(./images/red_circle.png)');
					}
					circle.appendTo($('.map_wrapper'));
				}
				$(".waterDian").eq(index).addClass("pointActive");

				$(".waterDian").each(function(i) {
					$(this).on("mouseover", function() {
						$(".pointActive").removeClass("pointActive");
						$(this).addClass("pointActive");
						randomDisData(mapdata1.QuanQuList[i].PositionName,mapdata1.QuanQuList[i].AQI,mapdata1.QuanQuList[i].PrimaryPollutant,mapdata1.QuanQuList[i].target);
						clearInterval(dis_map_timer);
					})
					$(this).on("mouseout", function() {
						$(".pointActive").removeClass("pointActive");
						mapTimer();
					})
				});
			},
			// 自动监控在地图上点的样式及内容
			function disTableData() {
				TextStyleTabs('#autoLook .title_bg');
				function disData(index,data){
					var video = $('<video autoplay="autoplay" loop="loop"></video>');
					var randomSrc = Math.floor(Math.random()*11)+1;
					video.attr('src', './video/'+randomSrc+'.mp4');
					video.css({
						width: 150,
						height: 160
					});
					$('.map .map_text1').html(data).attr('title', data);
					$('.map .map_text2').html(video).attr('title','');
				}
				var index = Math.floor(Math.random() * (tableData.length));
				disData(index,tableData[index].WRYMC);
				
				/*循环生成点*/
				for(var i = 0; i < tableData.length; i++) {
					addPoints(tableData[i].top, tableData[i].left, "autoDian", tableData[i].WRYMC)
				}
				$(".autoDian").eq(index).addClass("pointActive");
				$(".autoDian").each(function() {
					$(this).on("mouseover", function() {
						$(".pointActive").removeClass("pointActive");
						$(this).addClass("pointActive");
						disData($(this).index(), $(this).attr("name"));
						clearInterval(dis_map_timer);
					})
					$(this).on("mouseout", function() {
						$(".pointActive").removeClass("pointActive");
						mapTimer();
					})
				});
			},
			// 建设项目在地图上点的样式及内容
			function disBuildWork() {
				TextStyleTabs('#build_work .title_img');
				var index = Math.floor(Math.random()*(mapdata2.QuanQuList.length));
				newPoint(mapdata2, mapdata2.QuanQuList[index].areaName, mapdata2.QuanQuList[index].huanping, mapdata2.QuanQuList[index].check, mapdata2.QuanQuList[index].checkRate, 'build_dis');
				$('.build_dis').eq(index).addClass("pointActive");
				$('.build_dis').each(function(i){
					$(this).on("mouseover", function() {
						$(".pointActive").removeClass("pointActive");
						$(this).addClass("pointActive");
						randomDisData(mapdata2.QuanQuList[i].areaName,mapdata2.QuanQuList[i].huanping,mapdata2.QuanQuList[i].check,mapdata2.QuanQuList[i].checkRate);
						clearInterval(dis_map_timer);
					});
					$(this).on("mouseout", function() {
						$(".pointActive").removeClass("pointActive");
						mapTimer();
					});
				});
			},
			// 公众监督在地图上点的样式及内容
			function disSuperviseCondition() {
				TextStyleTabs('#supervise_all .supervise_title');
				$("#supervise_all .supervise_title").attr('src', './images/common_head_active_sam.jpg');
				var index = Math.floor(Math.random() * (mapdata3.QuanQuList.length));
				newPoint(mapdata3, mapdata3.QuanQuList[index].areaName, mapdata3.QuanQuList[index].complainNum, mapdata3.QuanQuList[index].airDirty, mapdata3.QuanQuList[index].waterDirty, 'supervise_dis');
				$('.supervise_dis').eq(index).addClass("pointActive");
				$(".supervise_dis").each(function(i){
					$(this).on("mouseover", function() {
						$(".pointActive").removeClass("pointActive");
						$(this).addClass("pointActive");
						randomDisData(mapdata3.QuanQuList[i].areaName,mapdata3.QuanQuList[i].complainNum,mapdata3.QuanQuList[i].airDirty,mapdata3.QuanQuList[i].waterDirty);
						clearInterval(dis_map_timer);
					});
					$(this).on("mouseout", function() {
						$(".pointActive").removeClass("pointActive");
						mapTimer();
					});	
				});
			},
			// 排污许可证在地图上点的样式及内容
			function disPermissionCondition() {
				TextStyleTabs('#permission_card .title_img');
				var index = Math.floor(Math.random() * (mapdata4.QuanQuList.length));
				newPoint(mapdata4, mapdata4.QuanQuList[index].areaName, mapdata4.QuanQuList[index].permissionNum, mapdata4.QuanQuList[index].expen, mapdata4.QuanQuList[index].rate, 'permission_dis');
				$('.permission_dis').eq(index).addClass("pointActive");
				$(".permission_dis").each(function(i){
					$(this).on("mouseover", function() {
						$(".pointActive").removeClass("pointActive");
						$(this).addClass("pointActive");
						randomDisData(mapdata4.QuanQuList[i].areaName,mapdata4.QuanQuList[i].permissionNum,mapdata4.QuanQuList[i].expen,mapdata4.QuanQuList[i].rate);
						clearInterval(dis_map_timer);
					});
					$(this).on("mouseout", function() {
						$(".pointActive").removeClass("pointActive");
						mapTimer();
					});	
				});
			},
			// 污染源在地图上点的样式及内容
			function disDirtySource() {
				TextStyleTabs('#source_dirty .title_bg');
				var index = Math.floor(Math.random() * (sourceData.length));
				randomDisData(sourceData[index].WRYMC, sourceData[index].JG, '公司法人：' + sourceData[index].FDDBR, '公司地址：' + sourceData[index].cityName);
				for(var i = 0; i < sourceData.length; i++) {
					var span = '<sapn class="sourceDian"  index="' + i + '" style="top:' + sourceData[i].top + 'px;left:' + sourceData[i].left + 'px"></span>'
					$(".map_wrapper").append(span);
				};
				$(".sourceDian").eq(index).addClass("pointActive");
				$(".sourceDian").each(function() {
					$(this).on("mouseover", function() {
						$(".pointActive").removeClass("pointActive");
						$(this).addClass("pointActive");
						var myIndex = $(this).attr("index");
						randomDisData(sourceData[myIndex].WRYMC, sourceData[myIndex].JG, '公司法人：' + sourceData[myIndex].FDDBR, '公司地址：' + sourceData[myIndex].cityName);
						clearInterval(dis_map_timer);
					})
					$(this).on("mouseout", function() {
						$(".pointActive").removeClass("pointActive");
						mapTimer();
					})
				});
			},
			// 大气环境在地图上点的样式及内容
			function disDirtyAir() {
				TextStyleTabs('#air_dirty .title_bg');
				var index = Math.floor(Math.random() * (airsData.length));
				randomDisData(airsData[index].PositionName, airsData[index].AQI, '首要污染物：' + airsData[index].PrimaryPollutant, '实时排名：' + airsData[index].number + '/' + airsData.length);
				for(var i = 0; i < airsData.length; i++) {
					var span;
					if(Number(airsData[i].AQI) > 0 && Number(airsData[i].AQI) < 100) {
						span = '<sapn class="airDian greenicon"  index="' + i + '" style="top:' + airsData[i].Top + 'px;left:' + airsData[i].Left + 'px;"></span>'
					} else if(Number(airsData[i].AQI) > 100 && Number(airsData[i].AQI) < 150) {

						span = '<sapn class="airDian yellowicon"  index="' + i + '" style="top:' + airsData[i].Top + 'px;left:' + airsData[i].Left + 'px;"></span>'

					} else {
						span = '<sapn class="airDian rddicon"  index="' + i + '" style="top:' + airsData[i].Top + 'px;left:' + airsData[i].Left + 'px;"></span>'
					}

					$(".map_wrapper").append(span);
				}
				$(".airDian").eq(index).addClass("pointActive");
				$(".airDian").each(function() {
					$(this).on("mouseover", function() {
						$(".pointActive").removeClass("pointActive");
						$(this).addClass("pointActive");
						var myIndex = $(this).attr("index");
						randomDisData(airsData[myIndex].PositionName, airsData[myIndex].AQI, '首要污染物：' + airsData[myIndex].PrimaryPollutant, '实时排名：' + airsData[myIndex].number + '/' + airsData.length);
						clearInterval(dis_map_timer);
					})
					$(this).on("mouseout", function() {
						$(".pointActive").removeClass("pointActive");
						mapTimer();
					})
				});
			}
		];
		//初始显示水环境
		dis_map[0](); 
		var _index = 0;
		function mapTimer() {
			dis_map_timer = setInterval(function() {
				_index++;
				if(_index > dis_map.length - 1) {
					_index = 0;
				}
				dis_map[_index]();
			}, 60000)
		}
		mapTimer();
		//各个模块划上效果
		$('.wrapper .item_map').each(function(){
			$(this).on('mouseenter',function(){
				clearInterval(dis_map_timer);
				var _idx = $(this).attr('index');
				dis_map[_idx]();
				$('#supervise_all .supervise_title').attr('src', './images/supervise_title.png');
				$('.head_common').attr('src', './images/common_head.png');
				$(this).find('.head_common').attr('src', './images/common_head_active.jpg');
				$(this).find('.supervise_title').attr('src', './images/common_head_active_sam.jpg');
			});
			$(this).on('mouseleave',function(){
				_index = $(this).attr('index');
				mapTimer();
			});
		});
		
	}

	// 水环境
	waterEnv();
	// 自动监控滚动列表
	autoLookDis();
	// 建设项目
	buildTip();
	// 公众监督
	getSuperviseDisData()
	// 排污许可证
	permission_num();
	// 污染源---污染企业监测级别
	getSourceChart();
	// 污染源---污染企业区域汇总统计
	getSourceArea();
	// 大气环境
	airTabs();
	// 地图显示情况
	mapTabs();
});