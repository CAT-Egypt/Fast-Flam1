/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'back_inside',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back_inside.jpg",'0px','0px']
                        },
                        {
                            id: 'pageContainer',
                            type: 'rect',
                            rect: ['0px', '0px', '1280px', '768px', 'auto', 'auto'],
                            fill: ["rgba(187,121,121,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'next',
                            type: 'image',
                            rect: ['1198px', '356px', '60px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Navigator_Next.png",'0px','0px']
                        },
                        {
                            id: 'back',
                            type: 'image',
                            rect: ['18px', '356px', '60px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Navigator_Next.png",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'Nav_bar',
                            symbolName: 'Nav_bar',
                            type: 'rect',
                            rect: ['396', '-50', '838', '102', 'auto', 'auto'],
                            overflow: 'visible'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Slide_00": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S0_00',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_00.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1280px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'container',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['76px', '107px', '260px', '72px', 'auto', 'auto'],
                            id: 'skipBtn',
                            text: '<p style=\"margin: 0px;\">​Skip</p>',
                            align: 'center',
                            textStyle: ['', '', '57px', '', ''],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [46, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_01": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S1_06',
                            type: 'image',
                            rect: ['319px', '620px', '223px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S1_06.png', '-238.6875px', '0px']
                        },
                        {
                            rect: ['468px', '190px', '306px', '441px', 'auto', 'auto'],
                            filter: [0, 0, 1, 2.4, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S1_04',
                            transform: [[], [], [], ['0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S1_04.png', '0px', '0px']
                        },
                        {
                            rect: ['785px', '342px', '321px', '55px', 'auto', 'auto'],
                            id: 'S1_03',
                            type: 'image',
                            clip: 'rect(0px -5.3857421875px 55px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_03.png', '0px', '0px']
                        },
                        {
                            rect: ['145px', '307px', '306px', '113px', 'auto', 'auto'],
                            id: 'S1_02',
                            type: 'image',
                            clip: 'rect(0px -7.55712890625px 113px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_02.png', '0px', '0px']
                        },
                        {
                            id: 'S1_01',
                            type: 'image',
                            rect: ['190px', '161px', '297px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S1_01.png', '-300.54150390625px', '0px']
                        },
                        {
                            rect: ['621px', '304px', '129px', '258px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S1_05',
                            display: 'none',
                            clip: 'rect(0px 129px 258px 140.578125px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_05.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut',
                            rect: ['759', '384', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_260',
                            rect: ['779', '152', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20173.mp3'],
                            id: 'Sound_173',
                            rect: ['521', '190', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20284.mp3'],
                            id: 'Sound_2842',
                            rect: ['323', '268', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '768px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: false,
                    data: [
                        [
                            "eid544",
                            "display",
                            500,
                            0,
                            "linear",
                            "${S1_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid545",
                            "display",
                            4164,
                            0,
                            "linear",
                            "${S1_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "clip",
                            4738,
                            500,
                            "linear",
                            "${S1_03}",
                            [0,-5.3857421875,55,0],
                            [0,321,55,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid52",
                            "clip",
                            1414,
                            500,
                            "linear",
                            "${S1_02}",
                            [0,-7.55712890625,113,0],
                            [0,306,113,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2",
                            "background-position",
                            500,
                            500,
                            "easeInOutQuad",
                            "${S1_01}",
                            [-300.54150390625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid547",
                            "clip",
                            4164,
                            300,
                            "linear",
                            "${S1_05}",
                            [0,129,258,140.578125],
                            [0,129,258,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid62",
                            "background-position",
                            5238,
                            500,
                            "linear",
                            "${S1_06}",
                            [-238.6875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "scaleX",
                            1914,
                            712,
                            "easeInOutQuad",
                            "${S1_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleX",
                            2626,
                            777,
                            "easeInOutQuad",
                            "${S1_04}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            3403,
                            761,
                            "easeInOutQuad",
                            "${S1_04}",
                            '0',
                            '1'
                        ],
                            [ "eid553", "trigger", 500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut}', [] ] ],
                            [ "eid563", "trigger", 1414, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_260}', [] ] ],
                            [ "eid554", "trigger", 1914.286, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2842}', [] ] ],
                            [ "eid555", "trigger", 4047.286, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2842}', [] ] ],
                            [ "eid556", "trigger", 4110.286, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_173}', [] ] ],
                            [ "eid564", "trigger", 4738, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_260}', [0] ] ],
                            [ "eid565", "trigger", 4738.286, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_173}', [] ] ],
                            [ "eid566", "trigger", 5305, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_260}', [0] ] ],
                            [ "eid567", "trigger", 7000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_260}', [] ] ]
                    ]
                }
            },
            "Slide_02": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S2_02',
                            type: 'image',
                            rect: ['-683px', '204px', '672px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_02.png', '0px', '0px']
                        },
                        {
                            rect: ['304px', '232px', '532px', '339px', 'auto', 'auto'],
                            id: 'S2_04',
                            type: 'image',
                            clip: 'rect(343.3046875px 532px 339px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2_04.png', '0px', '0px']
                        },
                        {
                            id: 'S2_03',
                            type: 'image',
                            rect: ['165px', '617px', '169px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_03.png', '-173.6171875px', '0px']
                        },
                        {
                            rect: ['-718px', '-102px', '938px', '60px', 'auto', 'auto'],
                            id: 'S2_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S2_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut2',
                            rect: ['296', '132', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20169.mp3'],
                            id: 'Sound_169',
                            rect: ['834', '349', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20284.mp3'],
                            id: 'Sound_2843',
                            rect: ['1170', '384', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20262.mp3'],
                            id: 'Sound_2622',
                            rect: ['648', '352', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'rect',
                            id: 'Slide_02_graph',
                            symbolName: 'Slide_02_graph',
                            opacity: '0',
                            rect: ['350', '249', '493', '302', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '768px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 7250,
                    autoPlay: false,
                    data: [
                        [
                            "eid80",
                            "clip",
                            2000,
                            500,
                            "linear",
                            "${S2_04}",
                            [343.3046875,532,339,0],
                            [0,532,339,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid72",
                            "left",
                            500,
                            750,
                            "swing",
                            "${S2_01}",
                            '-718px',
                            '61px'
                        ],
                        [
                            "eid78",
                            "left",
                            1250,
                            750,
                            "easeOutBack",
                            "${S2_02}",
                            '-683px',
                            '234px'
                        ],
                        [
                            "eid829",
                            "opacity",
                            1750,
                            250,
                            "easeOutBack",
                            "${Slide_02_graph}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            500,
                            750,
                            "swing",
                            "${S2_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "background-position",
                            6252,
                            500,
                            "easeOutBack",
                            "${S2_03}",
                            [-173.6171875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid74",
                            "top",
                            500,
                            750,
                            "swing",
                            "${S2_01}",
                            '-102px',
                            '124px'
                        ],
                            [ "eid578", "trigger", 500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut2}', [] ] ],
                            [ "eid579", "trigger", 1351, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_169}', [] ] ],
                            [ "eid580", "trigger", 1750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2843}', [] ] ],
                            [ "eid581", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2843}', [] ] ],
                            [ "eid594", "trigger", 6252, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2622}', [] ] ],
                            [ "eid601", "trigger", 7250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2622}', [] ] ]
                    ]
                }
            },
            "Slide_03": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['181px', '616px', '239px', '20px', 'auto', 'auto'],
                            id: 'S3_02',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S3_02.png', '-266.5625px', '0px']
                        },
                        {
                            rect: ['-520px', '-123px', '835px', '60px', 'auto', 'auto'],
                            id: 'S3_01',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S3_01.png', '0px', '0px']
                        },
                        {
                            rect: ['-672px', '200px', '672px', '395px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S2_02',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S2_02.png', '0px', '0px']
                        },
                        {
                            rect: ['284px', '223px', '571px', '350px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S3_03',
                            display: 'none',
                            clip: 'rect(354.5859375px 571px 350px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'Slide_03_graph',
                            rect: ['362', '322', '444', '228', 'auto', 'auto'],
                            id: 'Slide_03_graph'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut3',
                            rect: ['449', '236', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20169.mp3'],
                            id: 'Sound_1692',
                            rect: ['627', '246', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Crazy_Martians.mp3'],
                            id: 'Crazy_Martians2',
                            rect: ['1065', '499', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2602',
                            rect: ['1072', '583', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 5313,
                    autoPlay: false,
                    data: [
                        [
                            "eid1748",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${S2_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "left",
                            1000,
                            750,
                            "easeOutBack",
                            "${S2_02}",
                            '-672px',
                            '234px'
                        ],
                        [
                            "eid1751",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${S3_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "top",
                            250,
                            750,
                            "swing",
                            "${S3_01}",
                            '-123px',
                            '124px'
                        ],
                        [
                            "eid130",
                            "left",
                            250,
                            750,
                            "swing",
                            "${S3_01}",
                            '-520px',
                            '61px'
                        ],
                        [
                            "eid1750",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${S3_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "clip",
                            1750,
                            500,
                            "linear",
                            "${S3_03}",
                            [354.5859375,571,350,0],
                            [0,571,350,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1749",
                            "display",
                            250,
                            0,
                            "swing",
                            "${S3_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1351",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Slide_03_graph}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1747",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${S2_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "background-position",
                            2250,
                            500,
                            "easeOutBack",
                            "${S3_02}",
                            [-266.5625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid607", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut3}', [] ] ],
                            [ "eid608", "trigger", 945, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_1692}', [] ] ],
                            [ "eid609", "trigger", 1670, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Crazy_Martians2}', [] ] ],
                            [ "eid615", "trigger", 2250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2602}', [] ] ],
                            [ "eid611", "trigger", 2439, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Crazy_Martians2}', [] ] ],
                            [ "eid616", "trigger", 5313, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2602}', [] ] ]
                    ]
                }
            },
            "Nav_bar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'nav_00',
                            type: 'image',
                            rect: ['0px', '0px', '838px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_00.png', '0px', '0px']
                        },
                        {
                            id: 'nav_09',
                            type: 'image',
                            rect: ['766px', '21px', '65px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_09.png', '0px', '0px']
                        },
                        {
                            id: 'nav_08',
                            type: 'image',
                            rect: ['631px', '21px', '149px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_08.png', '0px', '0px']
                        },
                        {
                            id: 'nav_07',
                            type: 'image',
                            rect: ['541px', '20px', '111px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_07.png', '0px', '0px']
                        },
                        {
                            id: 'nav_06',
                            type: 'image',
                            rect: ['484px', '21px', '64px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_06.png', '0px', '0px']
                        },
                        {
                            id: 'nav_05',
                            type: 'image',
                            rect: ['393px', '21px', '88px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_05.png', '0px', '0px']
                        },
                        {
                            id: 'nav_04',
                            type: 'image',
                            rect: ['323px', '20px', '61px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_04.png', '0px', '0px']
                        },
                        {
                            id: 'nav_03',
                            type: 'image',
                            rect: ['231px', '21px', '88px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_03.png', '0px', '0px']
                        },
                        {
                            id: 'nav_02',
                            type: 'image',
                            rect: ['139px', '21px', '89px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_02.png', '0px', '0px']
                        },
                        {
                            id: 'nav_01',
                            type: 'image',
                            rect: ['7px', '21px', '123px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nav_01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '838px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_04": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['245px', '610px', '529px', '20px', 'auto', 'auto'],
                            id: 'S4_08',
                            fill: ['rgba(0,0,0,0)', 'images/S4_08.png', '-557.1875px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S4_05',
                            display: 'none',
                            rect: ['573px', '222px', '331px', '310px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4_05.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['244px', '235px', '266px', '268px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S4_03',
                            clip: 'rect(0px 24.1953125px 2.328125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4_03.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S4_04',
                            display: 'none',
                            rect: ['288px', '309px', '178px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['73px', '180px', '713px', '29px', 'auto', 'auto'],
                            id: 'S4_02',
                            fill: ['rgba(0,0,0,0)', 'images/S4_02.png', '0px', '-31.9296875px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S4_01',
                            opacity: '0',
                            rect: ['73px', '121px', '132px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['635px', '248px', '208px', '259px', 'auto', 'auto'],
                            id: 'S4_06',
                            fill: ['rgba(0,0,0,0)', 'images/S4_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['73px', '536px', '754px', '60px', 'auto', 'auto'],
                            id: 'S4_07',
                            fill: ['rgba(0,0,0,0)', 'images/S4_07.png', '0px', '-69.9765625px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2603',
                            rect: ['839', '418', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut4',
                            rect: ['617', '730', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20262.mp3'],
                            id: 'Sound_2623',
                            rect: ['928', '610', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 5377,
                    autoPlay: false,
                    data: [
                        [
                            "eid1359",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${S4_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1364",
                            "display",
                            3750,
                            0,
                            "easeOutBack",
                            "${S4_08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "clip",
                            1500,
                            500,
                            "linear",
                            "${S4_03}",
                            [0,24.1953125,2.328125,0],
                            [0,266,268,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid214",
                            "background-position",
                            3250,
                            500,
                            "linear",
                            "${S4_07}",
                            [0,-69.9765625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid173",
                            "scaleY",
                            2500,
                            250,
                            "easeOutBack",
                            "${S4_06}",
                            '0',
                            '2'
                        ],
                        [
                            "eid190",
                            "scaleY",
                            2750,
                            250,
                            "easeOutBack",
                            "${S4_06}",
                            '2',
                            '1'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            2500,
                            250,
                            "easeOutBack",
                            "${S4_06}",
                            '0',
                            '2'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            2750,
                            250,
                            "easeOutBack",
                            "${S4_06}",
                            '2',
                            '1'
                        ],
                        [
                            "eid169",
                            "scaleY",
                            1750,
                            500,
                            "easeOutBack",
                            "${S4_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1361",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${S4_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            2250,
                            1000,
                            "easeOutBack",
                            "${S4_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "background-position",
                            1000,
                            500,
                            "linear",
                            "${S4_02}",
                            [0,-31.9296875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1363",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${S4_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid218",
                            "background-position",
                            3750,
                            500,
                            "easeOutBack",
                            "${S4_08}",
                            [-557.1875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid167",
                            "scaleX",
                            1750,
                            500,
                            "easeOutBack",
                            "${S4_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "skewX",
                            250,
                            750,
                            "linear",
                            "${S4_01}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid161",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${S4_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            2250,
                            1000,
                            "easeOutBack",
                            "${S4_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1357",
                            "display",
                            250,
                            0,
                            "linear",
                            "${S4_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1362",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${S4_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1360",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${S4_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1358",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${S4_02}",
                            'none',
                            'block'
                        ],
                            [ "eid627", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2603}', [] ] ],
                            [ "eid628", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut4}', [] ] ],
                            [ "eid629", "trigger", 1750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2623}', [] ] ],
                            [ "eid630", "trigger", 2613, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2623}', [0] ] ],
                            [ "eid631", "trigger", 3318, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut4}', [0] ] ],
                            [ "eid632", "trigger", 3840, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2603}', [0] ] ],
                            [ "eid633", "trigger", 5377, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2603}', [] ] ],
                            [ "eid634", "trigger", 5377, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2623}', [] ] ]
                    ]
                }
            },
            "Slide_05": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['103px', '121px', '132px', '29px', 'auto', 'auto'],
                            transform: [[], [], ['89']],
                            type: 'image',
                            id: 'S4_01',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S4_01.png', '0px', '0px']
                        },
                        {
                            rect: ['103px', '190px', '762px', '29px', 'auto', 'auto'],
                            id: 'S5_01',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S5_01.png', '-771.578125px', '0px']
                        },
                        {
                            rect: ['762px', '239px', '331px', '310px', 'auto', 'auto'],
                            id: 'S4_05',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S4_05.png', '-343.0390625px', '0px']
                        },
                        {
                            rect: ['824px', '265px', '208px', '259px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'S4_06',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S4_06.png', '0px', '0px']
                        },
                        {
                            rect: ['462px', '253px', '265px', '267px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S5_04',
                            display: 'none',
                            clip: 'rect(0px -12.40625px 267px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5_04.png', '0px', '0px']
                        },
                        {
                            rect: ['498px', '347px', '193px', '79px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'S5_05',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S5_05.png', '0px', '0px']
                        },
                        {
                            rect: ['163px', '253px', '264px', '266px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S5_03',
                            display: 'none',
                            clip: 'rect(0px -16.5px 266px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5_03.png', '0px', '0px']
                        },
                        {
                            rect: ['192px', '326px', '206px', '120px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'S5_02',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S5_02.png', '0px', '0px']
                        },
                        {
                            rect: ['394px', '290px', '45px', '106px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'S5_08',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S5_08.png', '0px', '0px']
                        },
                        {
                            rect: ['694px', '290px', '45px', '106px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'S5_08Copy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S5_08.png', '0px', '0px']
                        },
                        {
                            rect: ['103px', '563px', '673px', '29px', 'auto', 'auto'],
                            id: 'S5_06',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S5_06.png', '-685.4453125px', '0px']
                        },
                        {
                            rect: ['217px', '618px', '529px', '20px', 'auto', 'auto'],
                            id: 'S5_07',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S5_07.png', '-527.5859375px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2604',
                            rect: ['1044', '646', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut5',
                            rect: ['838', '361', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20262.mp3'],
                            id: 'Sound_2624',
                            rect: ['1308', '618', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '768px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 7289,
                    autoPlay: false,
                    data: [
                        [
                            "eid243",
                            "scaleY",
                            2750,
                            750,
                            "easeOutBack",
                            "${S5_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "scaleX",
                            2250,
                            500,
                            "easeOutBack",
                            "${S5_08}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "scaleY",
                            3500,
                            750,
                            "easeOutBack",
                            "${S5_08Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1366",
                            "display",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${S5_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "clip",
                            1500,
                            750,
                            "linear",
                            "${S5_03}",
                            [0,-16.5,266,0],
                            [0,264,266,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid231",
                            "scaleX",
                            1500,
                            750,
                            "easeOutBack",
                            "${S5_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            4250,
                            500,
                            "easeOutBack",
                            "${S4_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid237",
                            "scaleY",
                            2250,
                            500,
                            "easeOutBack",
                            "${S5_08}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1369",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${S5_08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "scaleY",
                            1500,
                            750,
                            "easeOutBack",
                            "${S5_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid251",
                            "scaleX",
                            4250,
                            500,
                            "easeOutBack",
                            "${S4_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1368",
                            "display",
                            1500,
                            0,
                            "easeOutBack",
                            "${S5_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid241",
                            "scaleX",
                            2750,
                            750,
                            "easeOutBack",
                            "${S5_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "scaleX",
                            3500,
                            750,
                            "easeOutBack",
                            "${S5_08Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1375",
                            "display",
                            4000,
                            0,
                            "easeOutBack",
                            "${S4_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid249",
                            "background-position",
                            4000,
                            500,
                            "easeOutBack",
                            "${S4_05}",
                            [-343.0390625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1367",
                            "display",
                            1500,
                            0,
                            "easeOutBack",
                            "${S5_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid255",
                            "background-position",
                            4750,
                            500,
                            "linear",
                            "${S5_06}",
                            [-685.4453125,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1376",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${S4_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1370",
                            "display",
                            2750,
                            0,
                            "easeOutBack",
                            "${S5_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid257",
                            "background-position",
                            5654,
                            500,
                            "easeOutBack",
                            "${S5_07}",
                            [-527.5859375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1365",
                            "display",
                            250,
                            0,
                            "linear",
                            "${S4_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1373",
                            "display",
                            5654,
                            0,
                            "easeOutBack",
                            "${S5_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid224",
                            "skewX",
                            250,
                            750,
                            "linear",
                            "${S4_01}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid1372",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${S5_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1371",
                            "display",
                            3500,
                            0,
                            "easeOutBack",
                            "${S5_08Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid227",
                            "background-position",
                            1000,
                            500,
                            "easeInOutCubic",
                            "${S5_01}",
                            [-771.578125,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1374",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${S5_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "clip",
                            2750,
                            750,
                            "linear",
                            "${S5_04}",
                            [0,-12.40625,267,0],
                            [0,265,267,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid225",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${S4_01}",
                            '0',
                            '1'
                        ],
                            [ "eid640", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2604}', [] ] ],
                            [ "eid641", "trigger", 937, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut5}', [] ] ],
                            [ "eid642", "trigger", 1569, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2624}', [] ] ],
                            [ "eid643", "trigger", 2902, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2624}', [0] ] ],
                            [ "eid644", "trigger", 4066, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2624}', [0] ] ],
                            [ "eid645", "trigger", 4674, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut5}', [0] ] ],
                            [ "eid646", "trigger", 5450.546875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2604}', [0] ] ],
                            [ "eid647", "trigger", 7289, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2624}', [] ] ],
                            [ "eid648", "trigger", 7289, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2604}', [] ] ]
                    ]
                }
            },
            "Slide_06": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['319px', '196px', '672px', '395px', 'auto', 'auto'],
                            id: 'S6_02',
                            fill: ['rgba(0,0,0,0)', 'images/S6_02.png', '-681.578125px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['205px', '620px', '295px', '20px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S6_08',
                            clip: 'rect(-2px -15.296875px 18px -310.296875px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6_08.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['432px', '255px', '446px', '297px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S6_03',
                            clip: 'rect(302.609375px 446px 297px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['62px', '518px', '240px', '50px', 'auto', 'auto'],
                            id: 'S6_07',
                            fill: ['rgba(0,0,0,0)', 'images/S6_07.png', '-248.2578125px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-385px', '-106px', '769px', '60px', 'auto', 'auto'],
                            id: 'S6_01',
                            fill: ['rgba(0,0,0,0)', 'images/S6_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut6',
                            rect: ['1199', '680', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20169.mp3'],
                            id: 'Sound_1693',
                            rect: ['1113', '610', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20284.mp3'],
                            id: 'Sound_2845',
                            rect: ['720', '440', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%2034.mp3'],
                            id: 'Sound_343',
                            rect: ['831', '518', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            rect: ['553', '219', '277', '297', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'Slide_06_graph',
                            id: 'Slide_06_graph',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 6565,
                    autoPlay: false,
                    data: [
                        [
                            "eid280",
                            "background-position",
                            3000,
                            500,
                            "easeOutBack",
                            "${S6_07}",
                            [-248.2578125,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid270",
                            "clip",
                            2000,
                            500,
                            "linear",
                            "${S6_03}",
                            [302.609375,446,297,0],
                            [0,446,297,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1385",
                            "display",
                            3000,
                            0,
                            "easeOutBack",
                            "${S6_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1272",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Slide_06_graph}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "clip",
                            5945,
                            500,
                            "easeOutBack",
                            "${S6_08}",
                            [-2,-15.296875,18,-310.296875],
                            [0,295,20,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1383",
                            "display",
                            1000,
                            0,
                            "easeInOutBack",
                            "${S6_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "top",
                            250,
                            750,
                            "swing",
                            "${S6_01}",
                            '-106px',
                            '119px'
                        ],
                        [
                            "eid1384",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${S6_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "background-position",
                            1000,
                            750,
                            "easeInOutBack",
                            "${S6_02}",
                            [-681.578125,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1386",
                            "display",
                            5941,
                            0,
                            "easeOutBack",
                            "${S6_08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1382",
                            "display",
                            250,
                            0,
                            "swing",
                            "${S6_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "left",
                            250,
                            750,
                            "swing",
                            "${S6_01}",
                            '-385px',
                            '62px'
                        ],
                            [ "eid654", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut6}', [] ] ],
                            [ "eid655", "trigger", 1164, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_1693}', [] ] ],
                            [ "eid656", "trigger", 1750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2845}', [] ] ],
                            [ "eid657", "trigger", 2806, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_343}', [] ] ],
                            [ "eid658", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_343}', [] ] ],
                            [ "eid660", "trigger", 4250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2845}', [] ] ],
                            [ "eid663", "trigger", 5941, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_343}', [0] ] ]
                    ]
                }
            },
            "Slide_07": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['173px', '609px', '172px', '20px', 'auto', 'auto'],
                            id: 'S7_05',
                            fill: ['rgba(0,0,0,0)', 'images/S7_05.png', '-187.140625px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['523px', '236px', '362px', '340px', 'auto', 'auto'],
                            id: 'S7_04',
                            fill: ['rgba(0,0,0,0)', 'images/S7_04.png', '0px', '-364.140625px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2605',
                            rect: ['960', '696', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'image',
                            rect: ['173px', '250px', '268px', '270px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S7_02',
                            clip: 'rect(0px -7.09375px 270px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_02.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            display: 'none',
                            id: 'S7_03',
                            opacity: '0',
                            rect: ['228px', '354px', '158px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['62px', '143px', '783px', '60px', 'auto', 'auto'],
                            id: 'S7_012',
                            fill: ['rgba(0,0,0,0)', 'images/S7_01.png', '-788.4609375px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S2_122',
                            display: 'none',
                            rect: ['404px', '284px', '51px', '121px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_12.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut7',
                            rect: ['1092', '609', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20262.mp3'],
                            id: 'Sound_2625',
                            rect: ['1233', '674', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 4530,
                    autoPlay: false,
                    data: [
                        [
                            "eid1388",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${S7_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "background-position",
                            2500,
                            750,
                            "easeOutBack",
                            "${S7_04}",
                            [0,-364.140625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1389",
                            "display",
                            1500,
                            0,
                            "easeOutBack",
                            "${S7_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "scaleY",
                            1500,
                            500,
                            "easeOutBack",
                            "${S7_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid298",
                            "scaleX",
                            1500,
                            500,
                            "easeOutBack",
                            "${S7_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid302",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${S7_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1390",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${S2_122}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "clip",
                            1000,
                            750,
                            "linear",
                            "${S7_02}",
                            [0,-7.09375,270,0],
                            [0,268,270,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1391",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${S7_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "scaleY",
                            2000,
                            500,
                            "easeOutBack",
                            "${S2_122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1392",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${S7_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "background-position",
                            3250,
                            500,
                            "easeOutBack",
                            "${S7_05}",
                            [-187.140625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid305",
                            "scaleX",
                            2000,
                            500,
                            "easeOutBack",
                            "${S2_122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1387",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${S7_012}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "background-position",
                            250,
                            750,
                            "easeOutBack",
                            "${S7_012}",
                            [-788.4609375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid669", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut7}', [] ] ],
                            [ "eid670", "trigger", 1407, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2625}', [] ] ],
                            [ "eid671", "trigger", 2623, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2625}', [0] ] ],
                            [ "eid672", "trigger", 3091, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2605}', [] ] ],
                            [ "eid673", "trigger", 3683, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2625}', [] ] ],
                            [ "eid812", "trigger", 4530, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2605}', [] ] ]
                    ]
                }
            },
            "Slide_08": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['248px', '618px', '114px', '20px', 'auto', 'auto'],
                            id: 'S8_02',
                            fill: ['rgba(0,0,0,0)', 'images/S8_02.png', '-130.265625px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-904px', '144px', '898px', '87px', 'auto', 'auto'],
                            id: 'S8_01',
                            fill: ['rgba(0,0,0,0)', 'images/S8_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['433px', '265px', '328px', '307px', 'auto', 'auto'],
                            id: 'S8_05',
                            fill: ['rgba(0,0,0,0)', 'images/S8_05.png', '0px', '-316.890625px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut8',
                            rect: ['832', '638', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20284.mp3'],
                            id: 'Sound_2846',
                            rect: ['744', '638', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2606',
                            rect: ['849', '628', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 4840,
                    autoPlay: false,
                    data: [
                        [
                            "eid1394",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${S8_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1395",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${S8_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${S8_01}",
                            '-904px',
                            '76px'
                        ],
                        [
                            "eid1393",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${S8_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "background-position",
                            2250,
                            500,
                            "easeOutBack",
                            "${S8_02}",
                            [-130.265625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid320",
                            "background-position",
                            1250,
                            1000,
                            "easeOutBack",
                            "${S8_05}",
                            [0,-316.890625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid690", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut8}', [] ] ],
                            [ "eid691", "trigger", 1164, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2846}', [] ] ],
                            [ "eid692", "trigger", 2212, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2606}', [] ] ],
                            [ "eid693", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2606}', [] ] ],
                            [ "eid694", "trigger", 4840, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2846}', [] ] ]
                    ]
                }
            },
            "Slide_11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['233px', '627px', '249px', '20px', 'auto', 'auto'],
                            id: 'S11_04',
                            fill: ['rgba(0,0,0,0)', 'images/S11_04.png', '-281.0859375px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S11_06',
                            display: 'none',
                            rect: ['422px', '288px', '328px', '307px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S11_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['73px', '192px', '898px', '86px', 'auto', 'auto'],
                            id: 'S11_02',
                            fill: ['rgba(0,0,0,0)', 'images/S11_02.png', '-916.2890625px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['-484px', '-92px', '684px', '37px', 'auto', 'auto'],
                            id: 'S11_01',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S11_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut9',
                            rect: ['899', '637', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20173.mp3'],
                            id: 'Sound_1732',
                            rect: ['1180', '729', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2607',
                            rect: ['940', '657', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 5319,
                    autoPlay: false,
                    data: [
                        [
                            "eid380",
                            "background-position",
                            1043,
                            994,
                            "easeOutBack",
                            "${S11_02}",
                            [-916.2890625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid378",
                            "opacity",
                            250,
                            793,
                            "swing",
                            "${S11_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1405",
                            "display",
                            250,
                            0,
                            "swing",
                            "${S11_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "top",
                            250,
                            793,
                            "swing",
                            "${S11_01}",
                            '-92px',
                            '129px'
                        ],
                        [
                            "eid1408",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${S11_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid386",
                            "background-position",
                            3250,
                            500,
                            "easeOutBack",
                            "${S11_04}",
                            [-281.0859375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid374",
                            "left",
                            250,
                            793,
                            "swing",
                            "${S11_01}",
                            '-484px',
                            '73px'
                        ],
                        [
                            "eid1406",
                            "display",
                            1043,
                            0,
                            "easeOutBack",
                            "${S11_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid382",
                            "scaleX",
                            2000,
                            750,
                            "easeOutBack",
                            "${S11_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1407",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${S11_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid384",
                            "scaleY",
                            2000,
                            750,
                            "easeOutBack",
                            "${S11_06}",
                            '0',
                            '1'
                        ],
                            [ "eid705", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut9}', [] ] ],
                            [ "eid706", "trigger", 1043, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2607}', [] ] ],
                            [ "eid707", "trigger", 1874.453125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_1732}', [] ] ],
                            [ "eid708", "trigger", 3158, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2607}', [0] ] ],
                            [ "eid709", "trigger", 5319, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2607}', [] ] ]
                    ]
                }
            },
            "Slide_12": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S12_04',
                            display: 'none',
                            rect: ['419px', '296px', '328px', '307px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S12_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['223px', '628px', '847px', '47px', 'auto', 'auto'],
                            id: 'S12_03',
                            fill: ['rgba(0,0,0,0)', 'images/S12_03.png', '-889.59375px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['66px', '168px', '969px', '112px', 'auto', 'auto'],
                            id: 'S12_02',
                            fill: ['rgba(0,0,0,0)', 'images/S12_02.png', '-979.7890625px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['-695px', '112px', '950px', '71px', 'auto', 'auto'],
                            id: 'S12_01',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S12_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut10',
                            rect: ['1255', '675', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20173.mp3'],
                            id: 'Sound_1733',
                            rect: ['929', '450', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2608',
                            rect: ['1184', '635', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 5363,
                    autoPlay: false,
                    data: [
                        [
                            "eid1411",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${S12_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid399",
                            "background-position",
                            1000,
                            1000,
                            "easeOutBack",
                            "${S12_02}",
                            [-979.7890625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid401",
                            "scaleX",
                            2000,
                            500,
                            "easeOutBack",
                            "${S12_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid395",
                            "left",
                            250,
                            750,
                            "swing",
                            "${S12_01}",
                            '-695px',
                            '66px'
                        ],
                        [
                            "eid1412",
                            "display",
                            3403,
                            0,
                            "easeOutBack",
                            "${S12_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1410",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${S12_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid393",
                            "top",
                            250,
                            750,
                            "swing",
                            "${S12_01}",
                            '-126px',
                            '109px'
                        ],
                        [
                            "eid403",
                            "scaleY",
                            2000,
                            500,
                            "easeOutBack",
                            "${S12_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid397",
                            "opacity",
                            250,
                            750,
                            "swing",
                            "${S12_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1409",
                            "display",
                            250,
                            0,
                            "swing",
                            "${S12_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid405",
                            "background-position",
                            3403,
                            500,
                            "easeOutBack",
                            "${S12_03}",
                            [-889.59375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid716", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut10}', [] ] ],
                            [ "eid717", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2608}', [] ] ],
                            [ "eid718", "trigger", 2090, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_1733}', [] ] ],
                            [ "eid719", "trigger", 3256, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2608}', [0] ] ],
                            [ "eid720", "trigger", 5363, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2608}', [] ] ]
                    ]
                }
            },
            "Slide_13": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['231px', '619px', '847px', '47px', 'auto', 'auto'],
                            id: 'S13_06',
                            fill: ['rgba(0,0,0,0)', 'images/S13_06.png', '-859.9296875px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['238px', '307px', '268px', '278px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S13_04',
                            clip: 'rect(0px -7.015625px 278px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13_04.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S13_05',
                            display: 'none',
                            rect: ['282px', '367px', '180px', '182px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_05.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['564px', '292px', '328px', '307px', 'auto', 'auto'],
                            id: 'S13_03',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S13_03.png', '0px', '-322.09375px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['60px', '168px', '904px', '105px', 'auto', 'auto'],
                            id: 'S13_02',
                            fill: ['rgba(0,0,0,0)', 'images/S13_02.png', '-914.671875px', '0px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S13_01',
                            opacity: '0',
                            rect: ['60px', '111px', '694px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut11',
                            rect: ['497', '466', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2609',
                            rect: ['808', '533', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20262.mp3'],
                            id: 'Sound_2626',
                            rect: ['631', '643', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 6152,
                    autoPlay: false,
                    data: [
                        [
                            "eid418",
                            "clip",
                            1750,
                            750,
                            "linear",
                            "${S13_04}",
                            [0,-7.015625,278,0],
                            [0,268,278,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid434",
                            "background-position",
                            2750,
                            500,
                            "easeOutBack",
                            "${S13_03}",
                            [0,-322.09375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid414",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${S13_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid412",
                            "skewX",
                            250,
                            750,
                            "linear",
                            "${S13_01}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid420",
                            "scaleX",
                            2250,
                            500,
                            "easeOutBack",
                            "${S13_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid416",
                            "background-position",
                            1000,
                            750,
                            "easeOutBack",
                            "${S13_02}",
                            [-914.671875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid436",
                            "background-position",
                            3943,
                            500,
                            "easeOutBack",
                            "${S13_06}",
                            [-859.9296875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1416",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${S13_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "scaleY",
                            2250,
                            500,
                            "easeOutBack",
                            "${S13_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1417",
                            "display",
                            2750,
                            0,
                            "easeOutBack",
                            "${S13_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1413",
                            "display",
                            250,
                            0,
                            "linear",
                            "${S13_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1415",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${S13_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1418",
                            "display",
                            3943,
                            0,
                            "easeOutBack",
                            "${S13_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1414",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${S13_02}",
                            'none',
                            'block'
                        ],
                            [ "eid731", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut11}', [] ] ],
                            [ "eid732", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2609}', [] ] ],
                            [ "eid733", "trigger", 2250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2626}', [] ] ],
                            [ "eid734", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2626}', [0] ] ],
                            [ "eid735", "trigger", 4169.9609375, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2609}', [0] ] ],
                            [ "eid736", "trigger", 6152, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2626}', [] ] ],
                            [ "eid737", "trigger", 6152, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2609}', [] ] ]
                    ]
                }
            },
            "Slide_14": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['380px', '277px', '362px', '340px', 'auto', 'auto'],
                            id: 'S14_03',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S14_03.png', '0px', '-346.0703125px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['48px', '169px', '979px', '105px', 'auto', 'auto'],
                            id: 'S14_02',
                            fill: ['rgba(0,0,0,0)', 'images/S14_02.png', '-1001.859375px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['256px', '625px', '129px', '20px', 'auto', 'auto'],
                            id: 'S14_04',
                            fill: ['rgba(0,0,0,0)', 'images/S14_04.png', '-149.5390625px', '0px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S14_01',
                            opacity: '0',
                            rect: ['56px', '113px', '612px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S14_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut12',
                            rect: ['1094', '606', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_26010',
                            rect: ['807', '554', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20169.mp3'],
                            id: 'Sound_1695',
                            rect: ['934', '625', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 4527,
                    autoPlay: false,
                    data: [
                        [
                            "eid447",
                            "skewX",
                            250,
                            750,
                            "linear",
                            "${S14_01}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid457",
                            "background-position",
                            3000,
                            500,
                            "easeOutBack",
                            "${S14_04}",
                            [-149.5390625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid449",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${S14_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid453",
                            "background-position",
                            1750,
                            750,
                            "easeOutBack",
                            "${S14_03}",
                            [0,-346.0703125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1422",
                            "display",
                            3000,
                            0,
                            "easeOutBack",
                            "${S14_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid455",
                            "opacity",
                            1750,
                            750,
                            "easeOutBack",
                            "${S14_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1421",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${S14_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid451",
                            "background-position",
                            1000,
                            750,
                            "easeOutBack",
                            "${S14_02}",
                            [-1001.859375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1420",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${S14_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1419",
                            "display",
                            250,
                            0,
                            "linear",
                            "${S14_01}",
                            'none',
                            'block'
                        ],
                            [ "eid748", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut12}', [] ] ],
                            [ "eid749", "trigger", 915, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26010}', [] ] ],
                            [ "eid750", "trigger", 1626.171875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_1695}', [] ] ],
                            [ "eid751", "trigger", 2887, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26010}', [0] ] ],
                            [ "eid752", "trigger", 4527, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_26010}', [] ] ],
                            [ "eid753", "trigger", 4527, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_1695}', [] ] ]
                    ]
                }
            },
            "Slide_16": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'back_inside2',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/back_inside2.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['456px', '285px', '279px', '282px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S16_03',
                            clip: 'rect(0px -8.78125px 282px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S16_03.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S16_04',
                            display: 'none',
                            rect: ['492px', '363px', '208px', '125px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S16_04.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['78'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S16_01',
                            opacity: '0',
                            rect: ['99px', '145px', '119px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S16_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['100px', '211px', '631px', '60px', 'auto', 'auto'],
                            id: 'S16_02',
                            fill: ['rgba(0,0,0,0)', 'images/S16_02.png', '-652.859375px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut13',
                            rect: ['888', '575', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_26011',
                            rect: ['789', '527', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20262.mp3'],
                            id: 'Sound_2627',
                            rect: ['870', '554', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20284.mp3'],
                            id: 'Sound_2847',
                            rect: ['1019', '646', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 5722,
                    autoPlay: false,
                    data: [
                        [
                            "eid1427",
                            "display",
                            250,
                            0,
                            "linear",
                            "${S16_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid470",
                            "clip",
                            2000,
                            750,
                            "linear",
                            "${S16_03}",
                            [0,-8.78125,282,0],
                            [0,279,282,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1428",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${S16_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid476",
                            "scaleX",
                            2750,
                            750,
                            "easeOutBack",
                            "${S16_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid478",
                            "scaleY",
                            2750,
                            750,
                            "easeOutBack",
                            "${S16_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid464",
                            "skewX",
                            250,
                            750,
                            "linear",
                            "${S16_01}",
                            '78deg',
                            '0deg'
                        ],
                        [
                            "eid468",
                            "background-position",
                            1000,
                            1000,
                            "easeOutBack",
                            "${S16_02}",
                            [-652.859375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1430",
                            "display",
                            2750,
                            0,
                            "easeOutBack",
                            "${S16_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid466",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${S16_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1429",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${S16_03}",
                            'none',
                            'block'
                        ],
                            [ "eid764", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut13}', [] ] ],
                            [ "eid765", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26011}', [] ] ],
                            [ "eid766", "trigger", 1801.29296875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2847}', [] ] ],
                            [ "eid767", "trigger", 2710, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2627}', [] ] ],
                            [ "eid768", "trigger", 5722, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2847}', [] ] ],
                            [ "eid769", "trigger", 5722, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2627}', [] ] ]
                    ]
                }
            },
            "Slide_17": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'back_inside218',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/back_inside2.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['53px', '614px', '393px', '6px', 'auto', 'auto'],
                            id: 'S17_08',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S17_08.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            display: 'none',
                            id: 'S17_07',
                            opacity: '0',
                            rect: ['830px', '111px', '207px', '493px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S17_07.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['749px', '90px', '299px', '315px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S17_06',
                            clip: 'rect(0px 299px 322.2109375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S17_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['453px', '528px', '424px', '82px', 'auto', 'auto'],
                            id: 'S17_05',
                            fill: ['rgba(0,0,0,0)', 'images/S17_05.png', '-432.09375px', '0px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S17_04',
                            opacity: '0',
                            rect: ['53px', '350px', '494px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S17_04.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S17_03',
                            opacity: '0',
                            rect: ['53px', '179px', '668px', '59px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S17_03.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S17_02',
                            opacity: '0',
                            rect: ['53px', '267px', '631px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S17_02.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S17_01',
                            opacity: '0',
                            rect: ['53px', '127px', '720px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S17_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_26012',
                            rect: ['973', '702', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20169.mp3'],
                            id: 'Sound_1696',
                            rect: ['583', '744', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20284.mp3'],
                            id: 'Sound_2848',
                            rect: ['684', '537', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: false,
                    data: [
                        [
                            "eid527",
                            "clip",
                            3571,
                            750,
                            "linear",
                            "${S17_06}",
                            [0,299,-15.03125,0],
                            [0,299,322.2109375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid523",
                            "scaleY",
                            2821,
                            750,
                            "linear",
                            "${S17_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1336",
                            "display",
                            2321,
                            0,
                            "linear",
                            "${S17_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid503",
                            "skewX",
                            250,
                            500,
                            "linear",
                            "${S17_01}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid507",
                            "skewX",
                            931,
                            500,
                            "linear",
                            "${S17_03}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid1334",
                            "display",
                            931,
                            0,
                            "linear",
                            "${S17_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1339",
                            "display",
                            4321,
                            0,
                            "easeOutBack",
                            "${S17_08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "skewX",
                            1588,
                            500,
                            "linear",
                            "${S17_02}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid525",
                            "opacity",
                            2821,
                            750,
                            "linear",
                            "${S17_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid533",
                            "opacity",
                            4321,
                            500,
                            "easeOutBack",
                            "${S17_08}",
                            '0',
                            '1'
                        ],
                        [
                            "eid529",
                            "height",
                            4321,
                            500,
                            "easeOutBack",
                            "${S17_08}",
                            '6px',
                            '217px'
                        ],
                        [
                            "eid531",
                            "top",
                            4321,
                            500,
                            "easeOutBack",
                            "${S17_08}",
                            '614px',
                            '397px'
                        ],
                        [
                            "eid515",
                            "opacity",
                            1588,
                            500,
                            "linear",
                            "${S17_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1333",
                            "display",
                            250,
                            0,
                            "linear",
                            "${S17_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid517",
                            "skewX",
                            2321,
                            500,
                            "linear",
                            "${S17_04}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid521",
                            "scaleX",
                            2821,
                            750,
                            "linear",
                            "${S17_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid509",
                            "opacity",
                            931,
                            500,
                            "linear",
                            "${S17_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid505",
                            "opacity",
                            250,
                            500,
                            "linear",
                            "${S17_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid519",
                            "opacity",
                            2321,
                            500,
                            "linear",
                            "${S17_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1337",
                            "display",
                            2821,
                            0,
                            "linear",
                            "${S17_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid535",
                            "background-position",
                            4821,
                            750,
                            "easeOutBack",
                            "${S17_05}",
                            [-432.09375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1335",
                            "display",
                            1588,
                            0,
                            "linear",
                            "${S17_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1340",
                            "display",
                            4821,
                            0,
                            "easeOutBack",
                            "${S17_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1338",
                            "display",
                            3571,
                            0,
                            "linear",
                            "${S17_06}",
                            'none',
                            'block'
                        ],
                            [ "eid780", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26012}', [] ] ],
                            [ "eid781", "trigger", 931, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26012}', [0] ] ],
                            [ "eid782", "trigger", 1588, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26012}', [0] ] ],
                            [ "eid783", "trigger", 2321, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26012}', [0] ] ],
                            [ "eid784", "trigger", 3000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_1696}', [] ] ],
                            [ "eid785", "trigger", 3315.703125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2848}', [] ] ],
                            [ "eid791", "trigger", 4367, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26012}', [0] ] ],
                            [ "eid792", "trigger", 5152.3046875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26012}', [0] ] ],
                            [ "eid794", "trigger", 6500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_1696}', [] ] ],
                            [ "eid793", "trigger", 6500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_26012}', [] ] ],
                            [ "eid805", "trigger", 6500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2848}', [] ] ]
                    ]
                }
            },
            "Slide_09": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['248px', '618px', '114px', '20px', 'auto', 'auto'],
                            id: 'S8_02',
                            fill: ['rgba(0,0,0,0)', 'images/S8_02.png', '-130.265625px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-904px', '144px', '898px', '87px', 'auto', 'auto'],
                            id: 'S8_01',
                            fill: ['rgba(0,0,0,0)', 'images/S8_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['433px', '265px', '328px', '307px', 'auto', 'auto'],
                            id: 'S8_05',
                            fill: ['rgba(0,0,0,0)', 'images/S8_05.png', '0px', '-316.890625px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut8',
                            rect: ['832', '638', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20284.mp3'],
                            id: 'Sound_2846',
                            rect: ['744', '638', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2606',
                            rect: ['849', '628', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 4840,
                    autoPlay: false,
                    data: [
                        [
                            "eid1397",
                            "display",
                            1250,
                            0,
                            "easeOutBack",
                            "${S8_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1398",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${S8_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "background-position",
                            2250,
                            500,
                            "easeOutBack",
                            "${S8_02}",
                            [-130.265625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1396",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${S8_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${S8_01}",
                            '-904px',
                            '76px'
                        ],
                        [
                            "eid320",
                            "background-position",
                            1250,
                            1000,
                            "easeOutBack",
                            "${S8_05}",
                            [0,-316.890625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid690", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut8}', [] ] ],
                            [ "eid691", "trigger", 1164, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2846}', [] ] ],
                            [ "eid692", "trigger", 2212, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2606}', [] ] ],
                            [ "eid693", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2606}', [] ] ],
                            [ "eid694", "trigger", 4840, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2846}', [] ] ]
                    ]
                }
            },
            "Slide_10": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['173px', '609px', '172px', '20px', 'auto', 'auto'],
                            id: 'S7_05',
                            fill: ['rgba(0,0,0,0)', 'images/S7_05.png', '-187.140625px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['523px', '236px', '362px', '340px', 'auto', 'auto'],
                            id: 'S7_04',
                            fill: ['rgba(0,0,0,0)', 'images/S7_04.png', '0px', '-364.140625px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_2605',
                            rect: ['960', '696', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'image',
                            rect: ['173px', '250px', '268px', '270px', 'auto', 'auto'],
                            display: 'none',
                            id: 'S7_02',
                            clip: 'rect(0px -7.09375px 270px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_02.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            display: 'none',
                            id: 'S7_03',
                            opacity: '0',
                            rect: ['228px', '354px', '158px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['62px', '143px', '783px', '60px', 'auto', 'auto'],
                            id: 'S7_012',
                            fill: ['rgba(0,0,0,0)', 'images/S7_01.png', '-788.4609375px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'S2_122',
                            display: 'none',
                            rect: ['404px', '284px', '51px', '121px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_12.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut7',
                            rect: ['1092', '609', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20262.mp3'],
                            id: 'Sound_2625',
                            rect: ['1233', '674', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 4953,
                    autoPlay: false,
                    data: [
                        [
                            "eid1400",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${S7_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid309",
                            "background-position",
                            2500,
                            750,
                            "easeOutBack",
                            "${S7_04}",
                            [0,-364.140625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1401",
                            "display",
                            1500,
                            0,
                            "easeOutBack",
                            "${S7_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "scaleY",
                            1500,
                            500,
                            "easeOutBack",
                            "${S7_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid298",
                            "scaleX",
                            1500,
                            500,
                            "easeOutBack",
                            "${S7_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid302",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${S7_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1402",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${S2_122}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "clip",
                            1000,
                            750,
                            "linear",
                            "${S7_02}",
                            [0,-7.09375,270,0],
                            [0,268,270,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1403",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${S7_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid307",
                            "scaleY",
                            2000,
                            500,
                            "easeOutBack",
                            "${S2_122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1404",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${S7_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "background-position",
                            3250,
                            500,
                            "easeOutBack",
                            "${S7_05}",
                            [-187.140625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid305",
                            "scaleX",
                            2000,
                            500,
                            "easeOutBack",
                            "${S2_122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1399",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${S7_012}",
                            'none',
                            'block'
                        ],
                        [
                            "eid294",
                            "background-position",
                            250,
                            750,
                            "easeOutBack",
                            "${S7_012}",
                            [-788.4609375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid669", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut7}', [] ] ],
                            [ "eid670", "trigger", 1407, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2625}', [] ] ],
                            [ "eid671", "trigger", 2623, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2625}', [0] ] ],
                            [ "eid672", "trigger", 3091, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_2605}', [] ] ],
                            [ "eid673", "trigger", 3683, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2625}', [] ] ],
                            [ "eid679", "trigger", 4953, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_2605}', [] ] ]
                    ]
                }
            },
            "Slide_15": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['380px', '277px', '362px', '340px', 'auto', 'auto'],
                            id: 'S14_03',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/S14_03.png', '0px', '-346.0703125px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['48px', '169px', '979px', '105px', 'auto', 'auto'],
                            id: 'S14_02',
                            fill: ['rgba(0,0,0,0)', 'images/S14_02.png', '-1001.859375px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['256px', '625px', '129px', '20px', 'auto', 'auto'],
                            id: 'S14_04',
                            fill: ['rgba(0,0,0,0)', 'images/S14_04.png', '-149.5390625px', '0px']
                        },
                        {
                            transform: [[], [], ['89'], [1, 1, 1]],
                            type: 'image',
                            display: 'none',
                            id: 'S14_01',
                            opacity: '0',
                            rect: ['56px', '113px', '612px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S14_01.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Spacely_RoolOut.mp3'],
                            id: 'Spacely_RoolOut12',
                            rect: ['1094', '606', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20260.mp3'],
                            id: 'Sound_26010',
                            rect: ['807', '554', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%20169.mp3'],
                            id: 'Sound_1695',
                            rect: ['934', '625', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 4527,
                    autoPlay: false,
                    data: [
                        [
                            "eid447",
                            "skewX",
                            250,
                            750,
                            "linear",
                            "${S14_01}",
                            '89deg',
                            '0deg'
                        ],
                        [
                            "eid457",
                            "background-position",
                            3000,
                            500,
                            "easeOutBack",
                            "${S14_04}",
                            [-149.5390625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid449",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${S14_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid453",
                            "background-position",
                            1750,
                            750,
                            "easeOutBack",
                            "${S14_03}",
                            [0,-346.0703125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1426",
                            "display",
                            3000,
                            0,
                            "easeOutBack",
                            "${S14_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid455",
                            "opacity",
                            1750,
                            750,
                            "easeOutBack",
                            "${S14_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1425",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${S14_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid451",
                            "background-position",
                            1000,
                            750,
                            "easeOutBack",
                            "${S14_02}",
                            [-1001.859375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1424",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${S14_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1423",
                            "display",
                            250,
                            0,
                            "linear",
                            "${S14_01}",
                            'none',
                            'block'
                        ],
                            [ "eid748", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Spacely_RoolOut12}', [] ] ],
                            [ "eid749", "trigger", 915, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26010}', [] ] ],
                            [ "eid750", "trigger", 1626.171875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_1695}', [] ] ],
                            [ "eid751", "trigger", 2887, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_26010}', [0] ] ],
                            [ "eid752", "trigger", 4527, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_26010}', [] ] ],
                            [ "eid753", "trigger", 4527, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_1695}', [] ] ]
                    ]
                }
            },
            "Slide_02_graph": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S2_11',
                            type: 'image',
                            rect: ['417px', '271px', '36px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_11.png', '0px', '34.17578125px']
                        },
                        {
                            id: 'S2_10',
                            type: 'image',
                            rect: ['374px', '45px', '36px', '257px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_10.png', '0px', '264.34375px']
                        },
                        {
                            id: 'S2_09',
                            type: 'image',
                            rect: ['259px', '34px', '36px', '268px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_09.png', '0px', '276.8388671875px']
                        },
                        {
                            id: 'S2_08',
                            type: 'image',
                            rect: ['187px', '271px', '35px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_08.png', '0px', '33.7080078125px']
                        },
                        {
                            id: 'S2_07',
                            type: 'image',
                            rect: ['145px', '34px', '35px', '268px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_07.png', '0px', '282.9951171875px']
                        },
                        {
                            id: 'S2_06',
                            type: 'image',
                            rect: ['70px', '285px', '27px', '9px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_06.png', '0px', '14.5732421875px']
                        },
                        {
                            id: 'S2_06Copy',
                            type: 'image',
                            rect: ['306px', '285px', '27px', '9px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_06.png', '0px', '17.34619140625px']
                        },
                        {
                            id: 'S2_05',
                            type: 'image',
                            rect: ['20px', '10px', '36px', '292px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_05.png', '0px', '299.45849609375px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['12px', '40px', '51px', '121px', 'auto', 'auto'],
                            id: 'S2_12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S2_12.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%2034.mp3'],
                            id: 'Sound_34',
                            rect: ['406', '344', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Clock_tick.mp3'],
                            id: 'Clock_tick',
                            rect: ['920', '253', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'text',
                            id: 'plyGraph',
                            opacity: '0.46113782051282',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '493px', '302px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(116, 110, 0);\">Tap here</span></p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            textStyle: ['', '', '303px', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '493px', '302px']
                        }
                    }
                },
                timeline: {
                    duration: 3826.592,
                    autoPlay: false,
                    data: [
                        [
                            "eid90",
                            "-webkit-transform-origin",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            [50,50],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2477",
                            "-moz-transform-origin",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            [50,50],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2478",
                            "-ms-transform-origin",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            [50,50],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2479",
                            "msTransformOrigin",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            [50,50],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2480",
                            "-o-transform-origin",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            [50,50],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2481",
                            "transform-origin",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            [50,50],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid104",
                            "opacity",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "background-position",
                            1750,
                            500,
                            "easeOutBounce",
                            "${S2_09}",
                            [0,276.8388671875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid108",
                            "background-position",
                            1500,
                            250,
                            "easeOutBounce",
                            "${S2_08}",
                            [0,33.7080078125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid116",
                            "background-position",
                            3000,
                            250,
                            "easeOutBounce",
                            "${S2_11}",
                            [0,34.17578125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid82",
                            "background-position",
                            250,
                            500,
                            "easeOutBounce",
                            "${S2_05}",
                            [0,299.45849609375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid114",
                            "background-position",
                            2500,
                            500,
                            "easeOutBounce",
                            "${S2_10}",
                            [0,264.34375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid100",
                            "scaleX",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "background-position",
                            2250,
                            250,
                            "linear",
                            "${S2_06Copy}",
                            [0,17.34619140625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid102",
                            "scaleY",
                            250,
                            500,
                            "linear",
                            "${S2_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "background-position",
                            750,
                            250,
                            "easeOutBounce",
                            "${S2_06}",
                            [0,14.5732421875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid106",
                            "background-position",
                            1000,
                            500,
                            "easeOutBounce",
                            "${S2_07}",
                            [0,282.9951171875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1214",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${plyGraph}",
                            '0.4611378312110901',
                            '0'
                        ],
                            [ "eid835", "trigger", 249.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_34}', [] ] ],
                            [ "eid836", "trigger", 749.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_34}', [] ] ],
                            [ "eid837", "trigger", 749.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Clock_tick}', [] ] ],
                            [ "eid838", "trigger", 999.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_34}', [0] ] ],
                            [ "eid839", "trigger", 1499.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Clock_tick}', [0] ] ],
                            [ "eid840", "trigger", 1534.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_34}', [] ] ],
                            [ "eid841", "trigger", 1811.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_34}', [0] ] ],
                            [ "eid842", "trigger", 2206.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Clock_tick}', [0] ] ],
                            [ "eid843", "trigger", 2249.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_34}', [] ] ],
                            [ "eid844", "trigger", 2547.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_34}', [0] ] ],
                            [ "eid845", "trigger", 3016.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Clock_tick}', [0] ] ],
                            [ "eid846", "trigger", 3051.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Sound_34}', [] ] ],
                            [ "eid847", "trigger", 3826.592, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Clock_tick}', [] ] ]
                    ]
                }
            },
            "Slide_03_graph": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S3_07',
                            type: 'image',
                            rect: ['405px', '97px', '39px', '131px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3_07.png', '0px', '135.609375px']
                        },
                        {
                            id: 'S3_06',
                            type: 'image',
                            rect: ['274px', '48px', '40px', '180px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3_06.png', '0px', '189.5859375px']
                        },
                        {
                            id: 'S3_05',
                            type: 'image',
                            rect: ['145px', '48px', '39px', '180px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3_05.png', '0px', '196.28125px']
                        },
                        {
                            id: 'S3_04',
                            type: 'image',
                            rect: ['0px', '0px', '39px', '228px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3_04.png', '0px', '244.390625px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['-6px', '27px', '51px', '121px', 'auto', 'auto'],
                            id: 'S2_12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S2_12.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Sound%2034.mp3'],
                            id: 'Sound_342',
                            rect: ['1006', '573', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'text',
                            id: 'plyGraph',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['-43px', '-96px', '540px', '329px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; line-height: 398px;\">​Tap here</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,0.58)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '228px']
                        }
                    }
                },
                timeline: {
                    duration: 3033.51171875,
                    autoPlay: false,
                    data: [
                        [
                            "eid150",
                            "background-position",
                            2250,
                            500,
                            "easeOutBounce",
                            "${S3_07}",
                            [0,135.609375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid138",
                            "background-position",
                            250,
                            500,
                            "easeOutBounce",
                            "${S3_04}",
                            [0,244.390625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid140",
                            "scaleX",
                            750,
                            500,
                            "easeOutBack",
                            "${S2_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            750,
                            500,
                            "easeOutBack",
                            "${S2_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            750,
                            500,
                            "easeOutBack",
                            "${S2_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1250",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${plyGraph}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "background-position",
                            1250,
                            500,
                            "easeOutBounce",
                            "${S3_05}",
                            [0,196.28125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid148",
                            "background-position",
                            1750,
                            500,
                            "easeOutBounce",
                            "${S3_06}",
                            [0,189.5859375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid878", "trigger", 588.84765625, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_342}', [] ] ],
                            [ "eid879", "trigger", 1212.84765625, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_342}', [0] ] ],
                            [ "eid880", "trigger", 1785.51171875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_342}', [0] ] ],
                            [ "eid881", "trigger", 2409.51171875, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Sound_342}', [0] ] ]
                    ]
                }
            },
            "Slide_06_graph": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S6_05',
                            type: 'image',
                            rect: ['219px', '193px', '58px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6_05.png', '0px', '119.2265625px']
                        },
                        {
                            id: 'S6_04',
                            type: 'image',
                            rect: ['0px', '0px', '58px', '297px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6_04.png', '0px', '307.265625px']
                        },
                        {
                            rect: ['-5px', '48px', '67px', '162px', 'auto', 'auto'],
                            id: 'S6_06',
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S6_06.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/Clock_tick.mp3'],
                            id: 'Clock_tick2Copy',
                            rect: ['1042', '607', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            type: 'text',
                            rect: ['-74px', '2px', '385px', '297px', 'auto', 'auto'],
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​Tap here</p>',
                            id: 'playGraph',
                            textStyle: ['', '', '346px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,0.5804)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '277px', '297px']
                        }
                    }
                },
                timeline: {
                    duration: 2393.01865625,
                    autoPlay: false,
                    data: [
                        [
                            "eid272",
                            "background-position",
                            250,
                            500,
                            "easeOutBounce",
                            "${S6_04}",
                            [0,307.265625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1266",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${playGraph}",
                            '1',
                            '0'
                        ],
                        [
                            "eid274",
                            "scaleX",
                            1250,
                            500,
                            "easeOutBack",
                            "${S6_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid276",
                            "scaleY",
                            1250,
                            500,
                            "easeOutBack",
                            "${S6_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "background-position",
                            1750,
                            500,
                            "easeOutBounce",
                            "${S6_05}",
                            [0,119.2265625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                            [ "eid892", "trigger", 250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Clock_tick2Copy}', [] ] ],
                            [ "eid893", "trigger", 1583.22265625, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Clock_tick2Copy}', [0] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-810360");
