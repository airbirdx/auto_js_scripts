"auto";

setScreenMetrics(1080, 1920);

sleep(1000);      // 1s  缓启动

//  FS <==> FGO SERVENT
var FS = require('fgo_cmd.js');

// infi_awards(1);    // 抽无限池 - 括号内为所要抽取的池子数目
// daily_exp();       // 周回 - 获取 EXP 种火

yanzuo_shougao();  // 赝作复刻 - 无限池效率 - 自动 + 手动
// yanzuo_xinzang();  // 赝作复刻 - 术本刷心脏 - 小莫 3T 冲浪


// console.show();

// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //


// ----------------------------------------------------------------- //
// 暂未调试
// ----------------------------------------------------------------- //
// 活动：周回副本（阵容仅供参考）
// 队伍：3T 过
// 阵容：肯娘 - 清姬 - 大英雄 | 梅林 - '助战' - 式姐
// 礼装：万华镜 - 万华镜 - 满破虚数 | X - '助战' - 午餐
// ----------------------------------------------------------------- //
function daily_exp(){
	FS.C3();

	FS.ATK();
	
	FS.EC();
	FS.P4();
	FS.P5();

	sleep(40000); // 看烟花 + 自动换人... 40s

	FS.C1();
	FS.B3(); // 可以注释
	
	FS.ATK();

	FS.EB();
	FS.P3();
	FS.P4();

	sleep(35000); // 看烧烤... 35s
	
	FS.A3();

	FS.ATK();

	FS.EB();
	FS.P3();
	FS.P4();

	sleep(35000); // 看打雷... 30s

	FS.ATK();  // 点击画面，使用 ATK 模拟掉
    FS.ATK();
	FS.NEXT(); // 点击下一步，完成刷本

}

// ----------------------------------------------------------------- //
// 功能：无限池自动抽奖
// 默认：奖池 300 的时候点击 222 下 (0.74)
//      ->  400      点击 300 下
// ----------------------------------------------------------------- //
function infi_awards(n, pn){
	var count = arguments[1]? arguments[1] : 240;
	for ( ni = 0; ni < n; ni++ ){
		sleep(500);      // 0.5s  缓启动
		for ( i = 0; i < count; i++ )
			FS.INFI0();
		FS.INFI1();
		FS.INFI2();
		FS.INFI3();
	}
}


// ----------------------------------------------------------------- //
// 活动：赝作复刻
// 队伍：刷起来，3T 稳定进入 ROUND 3
// 助战：满破学者 + 310 梅林
// 阵容：大英雄 - 闪闪 - 孔老师 | 肯娘 - 助战 - 学妹
// 礼装：满破虚数 - 学者 - 学者 | 满破学者 - 助战 - 学者
// ----------------------------------------------------------------- //
function yanzuo_shougao(){
	
    FS.START(40000);   // 40s 加载... 跑芙芙

	// --- ROUND 1 --- //
	FS.A3();	  // 大英雄自充

	FS.ATK();     // 攻击

	FS.EA();      // 选卡
	FS.P2();
	FS.P3();

	sleep(40000); // 看烟花 + 自动换人... 40s

	// --- ROUND 2 --- //
	FS.C1(3, 1);  // 孔老师 加班
	FS.C2();      // 50NP 加满
	FS.C3();

	FS.SWITCH_SERVENT(3, 4); // 孔老师 下班 梅林 加班

	FS.C1();      // 梅林
	FS.C2();

	FS.B1();      // 闪闪

	FS.A1();      // 肯娘
	FS.A3();

	FS.ATK();     // 攻击

	FS.P1();      // 选卡
	FS.P2();      // 前两张卡打打星
	FS.EA();

	sleep(40000); // 攻击 + 看打雷... 40s

	// --- ROUND 3 --- //

	FS.C3(3, 2);  // 梅林

	FS.B2();      // 闪闪
	FS.B3();

	FS.MS0();     // 礼装攻击力
	FS.MS1();

	FS.ATK();     // 攻击

	FS.EB();      // 选卡

	sleep(500);   // 交给 MASTER 选择后续

	print('...Pls Sel Card...');
	console.show();

}


// ----------------------------------------------------------------- //
// 活动：赝作复刻
// 队伍：小莫 3T 冲浪
// 阵容：牛肉丸 - 小莫 - 孔老师 | 小玉 - '助战' - 学妹
// 礼装：万华镜 - 满破学者 - 学者 | 学者 - 助战 - 学者
// ----------------------------------------------------------------- //
function yanzuo_xinzang(){
	
    FS.START(40000);   // 40s 加载... 跑芙芙

	// --- ROUND 1 --- //
	FS.C1(3, 2);  // 孔老师 加班
	FS.C2();      // 50NP 加满
	FS.C3();

	FS.SWITCH_SERVENT(3, 4); // 孔老师 下班 小玉 加班

	FS.C3(3, 2);  // 小玉

	FS.B1();      // 小莫

	FS.A1();      // 牛肉丸
	FS.A2();

	FS.ATK();     // 攻击

	FS.EB();      // 选卡
	FS.EA();
	FS.P2();

	sleep(35000); // 冲浪中... 35s

	// --- ROUND 2 --- //

	FS.ATK();     // 攻击

	FS.EB();      // 选卡
	FS.EA();
	FS.P2();

	sleep(35000); // 冲浪中... 35s

	// --- ROUND 3 --- //

	FS.B3();   // 小莫， NP满上

	FS.MS0();  // 礼装攻击力
	FS.MS1();

	FS.ATK();

	FS.EB();
	FS.EA();
	FS.P2();

    sleep(45000);  // 冲浪中...跳船中... 45s
    
    FS.ATK();  // 点击画面，使用 ATK 模拟掉
    FS.ATK();
	FS.NEXT(); // 点击下一步，完成刷本
	
}

// 技能测试函数
function tst_skill(){
    // var FS;
    // FS.C1(3,2);
    // FS.SWITCH_SERVENT(3, 4); // 孔老师 下班 小玉 加班

}