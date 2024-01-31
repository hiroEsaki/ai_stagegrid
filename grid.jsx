// illustratorで間数グリッド作成
// 2024/01/31 H.Esk

// 入力ダイアログ
var dialog = new Window("dialog"); 
    dialog.text = "グリッド作成"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "column"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

	var group2 = group1.add("group", undefined, {name: "group2"}); 
		group2.orientation = "row"; 
		group2.alignChildren = ["left","center"]; 
		group2.spacing = 10; 
		group2.margins = 0; 

		var statictext1 = group2.add("statictext", undefined, undefined, {name: "statictext1"}); 
			statictext1.text = "1間設定"; 

		var unit1 = group2.add("radiobutton", undefined, undefined, {name: "unit1"}); 
			unit1.text = "1800mm"; 

		var unit2 = group2.add("radiobutton", undefined, undefined, {name: "unit2"}); 
			unit2.text = "1818mm"; 
			unit2.value = true;

	var group3 = group1.add("group", undefined, {name: "group3"}); 
		group3.orientation = "row"; 
		group3.alignChildren = ["left","center"]; 
		group3.spacing = 10; 
		group3.margins = 0; 

		var statictext2 = group3.add("statictext", undefined, undefined, {name: "statictext2"}); 
			statictext2.text = "補助グリッド"; 

		var subunit1 = group3.add("radiobutton", undefined, undefined, {name: "subunit1"}); 
			subunit1.text = "1尺"; 

		var subunit2 = group3.add("radiobutton", undefined, undefined, {name: "subunit2"}); 
			subunit2.text = "3尺"; 

		var subunit3 = group3.add("radiobutton", undefined, undefined, {name: "subunit3"}); 
			subunit3.text = "補助グリッドなし"; 
			subunit3.value = true;

var divider1 = dialog.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

var group4 = dialog.add("group", undefined, {name: "group4"}); 
    group4.orientation = "column"; 
    group4.alignChildren = ["right","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

	var group5 = group4.add("group", undefined, {name: "group5"}); 
		group5.orientation = "row"; 
		group5.alignChildren = ["left","center"]; 
		group5.spacing = 10; 
		group5.margins = 0; 

		var statictext3 = group5.add("statictext", undefined, undefined, {name: "statictext3"}); 
			statictext3.text = "グリッド間口"; 
			statictext3.justify = "right"; 

		var stageWidth = group5.add("slider", undefined, undefined, undefined, undefined, {name: "stageWidth"}); 
			stageWidth.minvalue = 0; 
			stageWidth.maxvalue = 30; 
			stageWidth.value = 10; 
			stageWidth.preferredSize.width = 150; 

		var statictext4 = group5.add("statictext", undefined, undefined, {name: "statictext4"}); 
			statictext4.text = stageWidth.value + "間"; 
			statictext4.preferredSize.width = 50; 
			statictext4.justify = "right"; 

	var group6 = group4.add("group", undefined, {name: "group6"}); 
		group6.orientation = "row"; 
		group6.alignChildren = ["left","center"]; 
		group6.spacing = 10; 
		group6.margins = 0; 

		var statictext5 = group6.add("statictext", undefined, undefined, {name: "statictext5"}); 
			statictext5.text = "グリッド奥行き"; 
			statictext5.justify = "right"; 

		var stageDepth = group6.add("slider", undefined, undefined, undefined, undefined, {name: "stageDepth"}); 
			stageDepth.minvalue = 0; 
			stageDepth.maxvalue = 20; 
			stageDepth.value = 5; 
			stageDepth.preferredSize.width = 150; 

		var statictext6 = group6.add("statictext", undefined, undefined, {name: "statictext6"}); 
			statictext6.text = stageDepth.value + "間"; 
			statictext6.preferredSize.width = 50; 
			statictext6.justify = "right"; 
		
		var group7 = group4.add("group", undefined, {name: "group6"}); 
			group7.orientation = "row"; 
			group7.alignChildren = ["left","center"]; 
			group7.spacing = 10; 
			group7.margins = 0; 
	
			var statictext7 = group7.add("statictext", undefined, undefined, {name: "statictext7"}); 
				statictext7.text = "舞台前側へ延長する"; 
				statictext7.justify = "right"; 
	
			var overDownstage = group7.add("slider", undefined, undefined, undefined, undefined, {name: "overDownstage"}); 
				overDownstage.minvalue = 0; 
				overDownstage.maxvalue = 20; 
				overDownstage.value = 0; 
				overDownstage.preferredSize.width = 150; 

			var statictext8 = group7.add("statictext", undefined, undefined, {name: "statictext8"}); 
				statictext8.text = overDownstage.value + "間"; 
				statictext8.preferredSize.width = 50; 
				statictext8.justify = "right"; 

var divider2 = dialog.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

var group8 = dialog.add("group", undefined, {name: "group7"}); 
	group8.orientation = "row"; 
	group8.alignChildren = ["left","center"]; 
	group8.spacing = 10; 
	group8.margins = 0; 

	var marker = group8.add("checkbox", undefined, undefined, {name: "marker"}); 
		marker.text = "間数を表示する";

	var horizontal = group8.add("checkbox", undefined, undefined, {name: "horizontal"}); 
		horizontal.text = "平行線（横方向）を作成する"; 

var divider3 = dialog.add("panel", undefined, undefined, {name: "divider3"}); 
	divider3.alignment = "fill"; 

var group9 = dialog.add("group", undefined, {name: "group8"}); 
	group9.orientation = "row"; 
	group9.alignChildren = ["left","center"]; 
	group9.spacing = 10; 
	group9.margins = 0; 

	var create = group9.add("button", undefined, undefined, {name: "create"}); 
		create.text = "グリッドを作成する"; 

	var exit = group9.add("button", undefined, undefined, {name: "cancel"}); 
		exit.text = "キャンセル"; 

// スライダー変化と文字表示
stageWidth.onChanging = function(){
	statictext4.text = (Math.round(stageWidth.value * 2)/2).toString() + "間";
	stageWidth.value = Math.round(stageWidth.value * 2)/2;
}
stageDepth.onChanging = function(){
	statictext6.text = (Math.round(stageDepth.value * 2)/2).toString() + "間";
	stageDepth.value = Math.round(stageDepth.value * 2)/2;
}
overDownstage.onChanging = function(){
	statictext8.text = (Math.round(overDownstage.value * 2)/2).toString() + "間";
	overDownstage.value = Math.round(overDownstage.value * 2)/2;
}
// キャンセル処理
exit.onClick = function(){
	dialog.close();
}
// 作成ボタンを押したときの処理
create.onClick = function(){
	var mainUnit = Number(unit1.value) * 1800 + Number(unit2.value) * 1818;
	var isSubUnit = subunit3.value;
	var subUnit = Number(subunit1.value) * 1 + Number(subunit2.value) * 3;
	var isMarker = marker.value;
	var isHorizontal = horizontal.value;
	
	// 0.5間刻みに調整
	gridWidth = Math.round(stageWidth.value * 2) / 2;
	gridDepth = Math.round(stageDepth.value * 2) / 2;
	gridOver = Math.round(overDownstage.value * 2) / 2;

	makeGrid (mainUnit, subUnit, isSubUnit, isMarker, gridWidth, gridDepth, gridOver, isHorizontal);

	dialog.close();
}

dialog.show();

// グリッド作成関数
function makeGrid(mainUnit, subUnit, isSubUnit, isMarker, gridWidth, gridDepth, gridOver, isHorizontal) {
	var scale = 1/100;
	subUnit = mainUnit * subUnit / 6;
	
	mainUnit = mainUnit * scale;
	subUnit = subUnit * scale;

    var doc = app.activeDocument;
	var layer = findOrCreateLayer("grid");

	var group = layer.groupItems.add();
	group.name = "grid";
	var verticalGroup = group.groupItems.add();
	verticalGroup.name = "縦主グリッド";
	if(isSubUnit != true){
		var verticalSubGroup = group.groupItems.add();
		verticalSubGroup.name = "縦副グリッド";
	}
	if(isHorizontal){
		var horizontalGroup = group.groupItems.add();
		var horizontalSubGroup = group.groupItems.add();
		horizontalGroup.name = "横主グリッド";
		horizontalSubGroup.name = "横副グリッド"
	}
	if(isMarker){
		var textGroup = group.groupItems.add();
		textGroup.name = "間数";

		// 間数表示に文字スタイルを適用
		var textStyle = "grid Marker";
		if (!isCharacterStyleExists(textStyle)) {
			var gridMarkerStyle = doc.characterStyles.add(textStyle);
			var originalStyle = doc.characterStyles["[標準文字スタイル]"];
			gridMarkerStyle.textFont = originalStyle.textFont;
			gridMarkerStyle.size = originalStyle.size;
		}else{
			gridMarkerStyle = doc.characterStyles.getByName(textStyle);
		}
	}

    // 主グリッド
    for (var i = -Math.floor(gridWidth/2); i <= Math.floor(gridWidth/2); i++) {
		var x = i * mainUnit;
        var mainLine = verticalGroup.pathItems.add();
		var y = - gridOver * mainUnit;
        mainLine.setEntirePath([[getPts(x), getPts(y)], [getPts(x), getPts(y + mainUnit * (gridOver + gridDepth))]]);
        mainLine.stroked = true;
        mainLine.strokeWidth = 0.5;
        mainLine.strokeColor = getCyanColor(55);
		mainLine.filled = false;
		mainLine.strokeDashes = [];

        if (isMarker) {//間数表示
            var markerText = textGroup.textFrames.add();
            markerText.contents = (i === 0) ? "CL" : Math.abs(i).toString();
            markerText.position = [getPts(x), getPts(y-1)];
            markerText.paragraphs[0].justification = Justification.CENTER;
			gridMarkerStyle.applyTo(markerText.textRange);
			
        }
    }
	if(isHorizontal){//水平主グリッド
		for (var i = 0 ; i <= gridDepth + Math.floor(gridOver) ; i++){
			var y = (i - Math.floor(gridOver)) * mainUnit;
			var mainLine = horizontalGroup.pathItems.add();
			mainLine.setEntirePath([[getPts(- mainUnit * gridWidth / 2), getPts(y)], [getPts(mainUnit * gridWidth/2), getPts(y)]]);
			mainLine.stroked = true;
			mainLine.strokeWidth = 0.5;
			mainLine.strokeColor = getCyanColor(55);
			mainLine.filled = false;
			mainLine.strokeDashes = [];
		}
	}
	
	if (isSubUnit != true){//副グリッド
		var u = mainUnit / subUnit;
		for (var i = -Math.floor(gridWidth * u / 2); i <= Math.floor(gridWidth * u / 2); i++) {
			var x = i * subUnit;
			var y = - gridOver * mainUnit;
			if (x  % mainUnit !== 0) {
				var subLine = verticalSubGroup.pathItems.add();
				subLine.setEntirePath([[getPts(x), getPts(y)], [getPts(x), getPts(y + mainUnit * (gridOver + gridDepth))]]);
				subLine.stroked = true;
				subLine.strokeWidth = 0.25;
				subLine.strokeColor = getCyanColor(55);
				subLine.filled = false;
				subLine.strokeDashes = [10, 3, 2, 3];
			}
		}
		if(isHorizontal){//水平副グリッド
			for (var i = 0 ; i<=(gridDepth + gridOver) * u; i++){
				var y = i * subUnit - gridOver * mainUnit;
				if(Math.abs(y % mainUnit) > 1e-6){
					var subLine = horizontalSubGroup.pathItems.add();
					subLine.setEntirePath([[getPts(- mainUnit * gridWidth / 2), getPts(y)], [getPts(mainUnit * gridWidth/2), getPts(y)]]);
					subLine.stroked = true;
					subLine.strokeWidth = 0.25;
					subLine.strokeColor = getCyanColor(55);
					subLine.filled = false;
					subLine.strokeDashes = [10, 3, 2, 3];
				}
			}
		}
	}

}

function getCyanColor(cyanValue) {
	// 色指定（シアン）
    var newColor = new CMYKColor();
    newColor.cyan = cyanValue;
    newColor.magenta = 0;
    newColor.yellow = 0;
    newColor.black = 0;
    return newColor;
}

function getPts(mm){
	// mmをptに変換
	var pts = mm * 72 / 25.4;
	return pts;
}

function findOrCreateLayer(layerName) {
	//layerNameレイヤーを検索し、なかったら作成
    var doc = app.activeDocument;
    var layer;

    for (var i = 0; i < doc.layers.length; i++) {
        if (doc.layers[i].name === layerName) {
            layer = doc.layers[i];
            break;
        }
    }

	if (!layer) {
        layer = doc.layers.add();
        layer.name = layerName;
    }

    return layer;
}
function isCharacterStyleExists(styleName) {
	// styleNameという文字スタイルを検索し、なかったら作成
    var doc = app.activeDocument;
    var characterStyles = doc.characterStyles;

    for (var i = 0; i < characterStyles.length; i++) {
        if (characterStyles[i].name === styleName) {
            return true
        }
    }
	return false;
}
