export default [
{
	"label": "Map",
	"submenu": [
        { "label": "New map", "accelerator": "CmdOrCtrl+N", "role": "newMap" },
        { "label": "Open map", "accelerator": "CmdOrCtrl+O", "role": "load"},
		
		{ "type": "separator" },
		
		{
			"label": "Save...",
			"submenu": [
						{"label": "To disk", "role": "save"}, 
//						{"label": "To disk (js)", "role": "savejs"}, 
//						{"label": "To image", "role": "saveImage"}
					   ]
		},
		
		{ "type": "separator" },
		
        { "label": "Quicksave", "accelerator": "CmdOrCtrl+S", "role": "quickSave" },
        { "label": "Quickload", "accelerator": "CmdOrCtrl+L", "role": "quickLoad" }
	]
},
{
	"label": "Edit",
	"submenu": [
		{"label": "Manipulate map", "role": "manipulateMap"},
		{"label": "Merge nodes", "role": "mergeNodes"},		
		{ "type": "separator" },
		{"label": "Batch add", "role": "batchAdd"},
		{"label": "Batch edit nodes", "role": "batchEditNodes"},
		{"label": "Batch edit links", "role": "batchEditLinks"}
	]
},
{
	"label": "Explore",
	"submenu": [
		{"label": "Node browser", "role": "nodeBrowser"},
		{"label": "Map history", "role": "mapHistory"},
		{"label": "General map summary", "role": "generalSummary"}
	]
},
{
	"label": "Analyse",
	"submenu": [
		{ "label": "Domain analysis", "role": "domainAnalysis"},
		{ "label": "Central analysis", "role": "centralAnalysis"},
		{ "label": "Set analysis", "role": "setAnalysis"},
		{ "label": "Cluster analysis", "role": "clusterAnalysis"},
		{ "label": "Circularity analysis", "role": "loopAnalysis"},
		{ "label": "Decision tree analysis", "role": "decisionTreeAnalysis"},
		{ "label": "Signal word analysis", "role": "signalWordAnalysis"},
		{ "label": "Word count analysis", "role": "wordCountAnalysis"},
		{ "label": "Similarity analysis", "submenu": [
			{"label": "Jaccard index", "role": "similarityAnalysisJaccard"},
			{"label": "Key words", "role": "similarityAnalysisKeyWords"},
			{"label": "Word overlap", "role": "similarityAnalysisOverlap"}
		]}
	]
},
{
	"label": "Panes",
	"submenu": [
		{"label": "Styles", "role": "paneStyles"},
		{"label": "Minimap", "role": "paneMinimap"},
		{"label": "Annotations", "role": "paneAnnotations"}
	]
},
{
	"label": "Settings",
	"submenu": [
		{"label": "Sets", "role": "setEditor"},
		{ "type": "separator" },
		{"label": "Config", "role": "settings"}
	]
},
{
	"label": "Help",
	"submenu": [
		{"label": "Docs", "role": "helpDocs"},
		{"label": "Interactive tutorial", "role": "tutorial"}
	]
}
]