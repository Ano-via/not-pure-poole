(() => {
    // 数据定义 (保持原样)
    const table1 = [{uid:'MARD_A1', id:'A1', r:250, g:244, b:200},
{uid:'MARD_A2', id:'A2', r:255, g:255, b:213},
{uid:'MARD_A3', id:'A3', r:254, g:255, b:139},
{uid:'MARD_A4', id:'A4', r:251, g:237, b:86},
{uid:'MARD_A5', id:'A5', r:244, g:215, b:56},
{uid:'MARD_A6', id:'A6', r:254, g:172, b:76},
{uid:'MARD_A7', id:'A7', r:254, g:139, b:76},
{uid:'MARD_A8', id:'A8', r:255, g:218, b:69},
{uid:'MARD_A9', id:'A9', r:255, g:153, b:91},
{uid:'MARD_A10', id:'A10', r:247, g:124, b:49},
{uid:'MARD_A11', id:'A11', r:255, g:221, b:153},
{uid:'MARD_A12', id:'A12', r:254, g:159, b:114},
{uid:'MARD_A13', id:'A13', r:255, g:195, b:101},
{uid:'MARD_A14', id:'A14', r:253, g:84, b:61},
{uid:'MARD_A15', id:'A15', r:255, g:243, b:101},
{uid:'MARD_A16', id:'A16', r:255, g:255, b:159},
{uid:'MARD_A17', id:'A17', r:255, g:227, b:110},
{uid:'MARD_A18', id:'A18', r:254, g:190, b:125},
{uid:'MARD_A19', id:'A19', r:253, g:124, b:114},
{uid:'MARD_A20', id:'A20', r:255, g:213, b:104},
{uid:'MARD_A21', id:'A21', r:255, g:227, b:149},
{uid:'MARD_A22', id:'A22', r:244, g:245, b:125},
{uid:'MARD_A23', id:'A23', r:230, g:201, b:183},
{uid:'MARD_A24', id:'A24', r:247, g:248, b:162},
{uid:'MARD_A25', id:'A25', r:255, g:214, b:125},
{uid:'MARD_A26', id:'A26', r:255, g:200, b:48},
{uid:'MARD_B1', id:'B1', r:230, g:238, b:49},
{uid:'MARD_B2', id:'B2', r:99, g:243, b:71},
{uid:'MARD_B3', id:'B3', r:158, g:247, b:128},
{uid:'MARD_B4', id:'B4', r:93, g:224, b:53},
{uid:'MARD_B5', id:'B5', r:53, g:227, b:82},
{uid:'MARD_B6', id:'B6', r:101, g:226, b:166},
{uid:'MARD_B7', id:'B7', r:61, g:175, b:128},
{uid:'MARD_B8', id:'B8', r:28, g:156, b:79},
{uid:'MARD_B9', id:'B9', r:39, g:82, b:58},
{uid:'MARD_B10', id:'B10', r:149, g:211, b:194},
{uid:'MARD_B11', id:'B11', r:93, g:114, b:42},
{uid:'MARD_B12', id:'B12', r:22, g:111, b:65},
{uid:'MARD_B13', id:'B13', r:202, g:235, b:123},
{uid:'MARD_B14', id:'B14', r:173, g:233, b:70},
{uid:'MARD_B15', id:'B15', r:46, g:81, b:50},
{uid:'MARD_B16', id:'B16', r:197, g:237, b:156},
{uid:'MARD_B17', id:'B17', r:155, g:177, b:58},
{uid:'MARD_B18', id:'B18', r:230, g:238, b:73},
{uid:'MARD_B19', id:'B19', r:36, g:184, b:140},
{uid:'MARD_B20', id:'B20', r:194, g:240, b:204},
{uid:'MARD_B21', id:'B21', r:21, g:106, b:107},
{uid:'MARD_B22', id:'B22', r:11, g:60, b:67},
{uid:'MARD_B23', id:'B23', r:48, g:58, b:33},
{uid:'MARD_B24', id:'B24', r:238, g:252, b:165},
{uid:'MARD_B25', id:'B25', r:78, g:132, b:109},
{uid:'MARD_B26', id:'B26', r:141, g:122, b:53},
{uid:'MARD_B27', id:'B27', r:204, g:225, b:175},
{uid:'MARD_B28', id:'B28', r:158, g:229, b:185},
{uid:'MARD_B29', id:'B29', r:197, g:226, b:84},
{uid:'MARD_B30', id:'B30', r:226, g:252, b:177},
{uid:'MARD_B31', id:'B31', r:176, g:231, b:146},
{uid:'MARD_B32', id:'B32', r:156, g:171, b:90},
{uid:'MARD_C1', id:'C1', r:232, g:255, b:231},
{uid:'MARD_C2', id:'C2', r:169, g:249, b:252},
{uid:'MARD_C3', id:'C3', r:160, g:226, b:251},
{uid:'MARD_C4', id:'C4', r:65, g:204, b:255},
{uid:'MARD_C5', id:'C5', r:1, g:172, b:235},
{uid:'MARD_C6', id:'C6', r:80, g:170, b:240},
{uid:'MARD_C7', id:'C7', r:54, g:119, b:210},
{uid:'MARD_C8', id:'C8', r:15, g:84, b:192},
{uid:'MARD_C9', id:'C9', r:50, g:75, b:202},
{uid:'MARD_C10', id:'C10', r:62, g:188, b:226},
{uid:'MARD_C11', id:'C11', r:40, g:221, b:222},
{uid:'MARD_C12', id:'C12', r:28, g:51, b:77},
{uid:'MARD_C13', id:'C13', r:205, g:232, b:255},
{uid:'MARD_C14', id:'C14', r:213, g:253, b:255},
{uid:'MARD_C15', id:'C15', r:34, g:196, b:198},
{uid:'MARD_C16', id:'C16', r:21, g:87, b:168},
{uid:'MARD_C17', id:'C17', r:4, g:209, b:246},
{uid:'MARD_C18', id:'C18', r:29, g:51, b:68},
{uid:'MARD_C19', id:'C19', r:24, g:135, b:162},
{uid:'MARD_C20', id:'C20', r:23, g:109, b:175},
{uid:'MARD_C21', id:'C21', r:190, g:221, b:255},
{uid:'MARD_C22', id:'C22', r:103, g:180, b:190},
{uid:'MARD_C23', id:'C23', r:200, g:226, b:255},
{uid:'MARD_C24', id:'C24', r:124, g:196, b:255},
{uid:'MARD_C25', id:'C25', r:169, g:229, b:229},
{uid:'MARD_C26', id:'C26', r:60, g:174, b:216},
{uid:'MARD_C27', id:'C27', r:211, g:223, b:250},
{uid:'MARD_C28', id:'C28', r:187, g:207, b:237},
{uid:'MARD_C29', id:'C29', r:52, g:72, b:142},
{uid:'MARD_D1', id:'D1', r:174, g:180, b:242},
{uid:'MARD_D2', id:'D2', r:133, g:142, b:221},
{uid:'MARD_D3', id:'D3', r:47, g:84, b:175},
{uid:'MARD_D4', id:'D4', r:24, g:42, b:132},
{uid:'MARD_D5', id:'D5', r:24, g:161, b:205},
{uid:'MARD_D6', id:'D6', r:14, g:49, b:141},
{uid:'MARD_D7', id:'D7', r:24, g:79, b:203},
{uid:'MARD_D8', id:'D8', r:40, g:89, b:180},
{uid:'MARD_D9', id:'D9', r:69, g:91, b:149},
{uid:'MARD_D10', id:'D10', r:18, g:15, b:102},
{uid:'MARD_D11', id:'D11', r:110, g:131, b:159},
{uid:'MARD_D12', id:'D12', r:157, g:163, b:232},
{uid:'MARD_D13', id:'D13', r:76, g:161, b:133},
{uid:'MARD_D14', id:'D14', r:25, g:70, b:128},
{uid:'MARD_D15', id:'D15', r:115, g:230, b:255},
{uid:'MARD_D16', id:'D16', r:5, g:180, b:237},
{uid:'MARD_D17', id:'D17', r:84, g:135, b:202},
{uid:'MARD_D18', id:'D18', r:161, g:187, b:255},
{uid:'MARD_D19', id:'D19', r:30, g:49, b:134},
{uid:'MARD_D20', id:'D20', r:56, g:80, b:129},
{uid:'MARD_D21', id:'D21', r:132, g:192, b:255},
{uid:'MARD_D22', id:'D22', r:19, g:49, b:150},
{uid:'MARD_D23', id:'D23', r:25, g:47, b:108},
{uid:'MARD_D24', id:'D24', r:17, g:32, b:64},
{uid:'MARD_E1', id:'E1', r:121, g:204, b:230},
{uid:'MARD_E2', id:'E2', r:87, g:172, b:202},
{uid:'MARD_E3', id:'E3', r:66, g:107, b:148},
{uid:'MARD_E4', id:'E4', r:42, g:94, b:128},
{uid:'MARD_E5', id:'E5', r:11, g:63, b:100},
{uid:'MARD_E6', id:'E6', r:114, g:165, b:183},
{uid:'MARD_E7', id:'E7', r:63, g:138, b:204},
{uid:'MARD_E8', id:'E8', r:6, g:118, b:192},
{uid:'MARD_E9', id:'E9', r:1, g:96, b:184},
{uid:'MARD_E10', id:'E10', r:30, g:100, b:144},
{uid:'MARD_E11', id:'E11', r:8, g:23, b:37},
{uid:'MARD_E12', id:'E12', r:6, g:51, b:69},
{uid:'MARD_E13', id:'E13', r:62, g:74, b:80},
{uid:'MARD_E14', id:'E14', r:3, g:39, b:72},
{uid:'MARD_E15', id:'E15', r:17, g:50, b:76},
{uid:'MARD_E16', id:'E16', r:2, g:22, b:31},
{uid:'MARD_E17', id:'E17', r:21, g:75, b:94},
{uid:'MARD_E18', id:'E18', r:11, g:108, b:149},
{uid:'MARD_E19', id:'E19', r:19, g:131, b:141},
{uid:'MARD_E20', id:'E20', r:20, g:76, b:86},
{uid:'MARD_E21', id:'E21', r:15, g:47, b:55},
{uid:'MARD_E22', id:'E22', r:10, g:35, b:40},
{uid:'MARD_E23', id:'E23', r:88, g:131, b:161},
{uid:'MARD_E24', id:'E24', r:66, g:94, b:122},
{uid:'MARD_F1', id:'F1', r:251, g:196, b:179},
{uid:'MARD_F2', id:'F2', r:251, g:205, b:148},
{uid:'MARD_F3', id:'F3', r:247, g:102, b:75},
{uid:'MARD_F4', id:'F4', r:254, g:186, b:196},
{uid:'MARD_F5', id:'F5', r:246, g:201, b:209},
{uid:'MARD_F6', id:'F6', r:160, g:43, b:43},
{uid:'MARD_F7', id:'F7', r:155, g:38, b:43},
{uid:'MARD_F8', id:'F8', r:187, g:57, b:38},
{uid:'MARD_F9', id:'F9', r:197, g:60, b:81},
{uid:'MARD_F10', id:'F10', r:198, g:59, b:57},
{uid:'MARD_F11', id:'F11', r:90, g:33, b:33},
{uid:'MARD_F12', id:'F12', r:253, g:78, b:106},
{uid:'MARD_F13', id:'F13', r:243, g:87, b:68},
{uid:'MARD_F14', id:'F14', r:255, g:169, b:173},
{uid:'MARD_F15', id:'F15', r:211, g:0, b:34},
{uid:'MARD_F16', id:'F16', r:254, g:194, b:166},
{uid:'MARD_F17', id:'F17', r:230, g:156, b:121},
{uid:'MARD_F18', id:'F18', r:211, g:124, b:70},
{uid:'MARD_F19', id:'F19', r:193, g:68, b:74},
{uid:'MARD_F20', id:'F20', r:205, g:147, b:145},
{uid:'MARD_F21', id:'F21', r:247, g:180, b:198},
{uid:'MARD_F22', id:'F22', r:253, g:192, b:208},
{uid:'MARD_F23', id:'F23', r:246, g:126, b:102},
{uid:'MARD_F24', id:'F24', r:230, g:152, b:170},
{uid:'MARD_F25', id:'F25', r:229, g:75, b:79},
{uid:'MARD_G1', id:'G1', r:255, g:226, b:206},
{uid:'MARD_G2', id:'G2', r:255, g:196, b:170},
{uid:'MARD_G3', id:'G3', r:244, g:195, b:165},
{uid:'MARD_G4', id:'G4', r:225, g:179, b:131},
{uid:'MARD_G5', id:'G5', r:237, g:176, b:69},
{uid:'MARD_G6', id:'G6', r:233, g:156, b:23},
{uid:'MARD_G7', id:'G7', r:157, g:91, b:62},
{uid:'MARD_G8', id:'G8', r:117, g:59, b:50},
{uid:'MARD_G9', id:'G9', r:230, g:180, b:131},
{uid:'MARD_G10', id:'G10', r:217, g:140, b:57},
{uid:'MARD_G11', id:'G11', r:224, g:197, b:147},
{uid:'MARD_G12', id:'G12', r:255, g:200, b:144},
{uid:'MARD_G13', id:'G13', r:183, g:113, b:74},
{uid:'MARD_G14', id:'G14', r:141, g:97, b:76},
{uid:'MARD_G15', id:'G15', r:252, g:249, b:224},
{uid:'MARD_G16', id:'G16', r:242, g:217, b:186},
{uid:'MARD_G17', id:'G17', r:123, g:82, b:75},
{uid:'MARD_G18', id:'G18', r:255, g:228, b:204},
{uid:'MARD_G19', id:'G19', r:224, g:121, b:53},
{uid:'MARD_G20', id:'G20', r:169, g:64, b:35},
{uid:'MARD_G21', id:'G21', r:184, g:133, b:88},
{uid:'MARD_H1', id:'H1', r:253, g:251, b:255},
{uid:'MARD_H2', id:'H2', r:254, g:255, b:255},
{uid:'MARD_H3', id:'H3', r:182, g:177, b:186},
{uid:'MARD_H4', id:'H4', r:137, g:133, b:140},
{uid:'MARD_H5', id:'H5', r:72, g:70, b:78},
{uid:'MARD_H6', id:'H6', r:47, g:43, b:47},
{uid:'MARD_H7', id:'H7', r:0, g:0, b:0},
{uid:'MARD_H8', id:'H8', r:231, g:214, b:219},
{uid:'MARD_H9', id:'H9', r:237, g:237, b:237},
{uid:'MARD_H10', id:'H10', r:238, g:233, b:234},
{uid:'MARD_H11', id:'H11', r:206, g:205, b:213},
{uid:'MARD_H12', id:'H12', r:255, g:245, b:237},
{uid:'MARD_H13', id:'H13', r:245, g:236, b:210},
{uid:'MARD_H14', id:'H14', r:207, g:215, b:211},
{uid:'MARD_H15', id:'H15', r:152, g:166, b:168},
{uid:'MARD_H16', id:'H16', r:29, g:20, b:20},
{uid:'MARD_H17', id:'H17', r:241, g:237, b:237},
{uid:'MARD_H18', id:'H18', r:255, g:253, b:240},
{uid:'MARD_H19', id:'H19', r:246, g:239, b:226},
{uid:'MARD_H20', id:'H20', r:148, g:159, b:163},
{uid:'MARD_H21', id:'H21', r:255, g:251, b:225},
{uid:'MARD_H22', id:'H22', r:202, g:202, b:212},
{uid:'MARD_H23', id:'H23', r:154, g:157, b:148},
{uid:'MARD_M1', id:'M1', r:188, g:198, b:184},
{uid:'MARD_M2', id:'M2', r:138, g:163, b:134},
{uid:'MARD_M3', id:'M3', r:105, g:125, b:128},
{uid:'MARD_M4', id:'M4', r:227, g:210, b:188},
{uid:'MARD_M5', id:'M5', r:208, g:204, b:170},
{uid:'MARD_M6', id:'M6', r:176, g:167, b:130},
{uid:'MARD_M7', id:'M7', r:180, g:164, b:151},
{uid:'MARD_M8', id:'M8', r:179, g:130, b:129},
{uid:'MARD_M9', id:'M9', r:165, g:135, b:103},
{uid:'MARD_M10', id:'M10', r:197, g:178, b:188},
{uid:'MARD_M11', id:'M11', r:159, g:117, b:148},
{uid:'MARD_M12', id:'M12', r:100, g:71, b:73},
{uid:'MARD_M13', id:'M13', r:209, g:144, b:102},
{uid:'MARD_M14', id:'M14', r:199, g:115, b:98},
{uid:'MARD_M15', id:'M15', r:117, g:125, b:123},
{uid:'MARD_P1', id:'P1', r:252, g:247, b:248},
{uid:'MARD_P2', id:'P2', r:176, g:169, b:172},
{uid:'MARD_P3', id:'P3', r:175, g:220, b:171},
{uid:'MARD_P4', id:'P4', r:254, g:164, b:159},
{uid:'MARD_P5', id:'P5', r:238, g:140, b:62},
{uid:'MARD_P6', id:'P6', r:95, g:208, b:167},
{uid:'MARD_P7', id:'P7', r:235, g:146, b:112},
{uid:'MARD_P8', id:'P8', r:240, g:217, b:88},
{uid:'MARD_P9', id:'P9', r:217, g:217, b:217},
{uid:'MARD_P10', id:'P10', r:217, g:199, b:234},
{uid:'MARD_P11', id:'P11', r:243, g:236, b:201},
{uid:'MARD_P12', id:'P12', r:230, g:238, b:242},
{uid:'MARD_P13', id:'P13', r:170, g:203, b:239},
{uid:'MARD_P14', id:'P14', r:51, g:118, b:176},
{uid:'MARD_P15', id:'P15', r:102, g:133, b:117},
{uid:'MARD_P16', id:'P16', r:254, g:191, b:69},
{uid:'MARD_P17', id:'P17', r:254, g:163, b:36},
{uid:'MARD_P18', id:'P18', r:254, g:184, b:159},
{uid:'MARD_P19', id:'P19', r:255, g:224, b:233},
{uid:'MARD_P20', id:'P20', r:254, g:190, b:207},
{uid:'MARD_P21', id:'P21', r:236, g:190, b:191},
{uid:'MARD_P22', id:'P22', r:228, g:168, b:159},
{uid:'MARD_P23', id:'P23', r:165, g:98, b:104},
{uid:'MARD_Q1', id:'Q1', r:242, g:165, b:232},
{uid:'MARD_Q2', id:'Q2', r:233, g:236, b:145},
{uid:'MARD_Q3', id:'Q3', r:255, g:255, b:0},
{uid:'MARD_Q4', id:'Q4', r:255, g:235, b:250},
{uid:'MARD_Q5', id:'Q5', r:118, g:206, b:222},
{uid:'MARD_R1', id:'R1', r:213, g:13, b:33},
{uid:'MARD_R2', id:'R2', r:249, g:47, b:131},
{uid:'MARD_R3', id:'R3', r:253, g:131, b:36},
{uid:'MARD_R4', id:'R4', r:248, g:236, b:49},
{uid:'MARD_R5', id:'R5', r:53, g:199, b:91},
{uid:'MARD_R6', id:'R6', r:35, g:184, b:145},
{uid:'MARD_R7', id:'R7', r:25, g:119, b:157},
{uid:'MARD_R8', id:'R8', r:26, g:96, b:195},
{uid:'MARD_R9', id:'R9', r:154, g:86, b:180},
{uid:'MARD_R10', id:'R10', r:255, g:219, b:76},
{uid:'MARD_R11', id:'R11', r:255, g:235, b:250},
{uid:'MARD_R12', id:'R12', r:216, g:213, b:206},
{uid:'MARD_R13', id:'R13', r:85, g:81, b:76},
{uid:'MARD_R14', id:'R14', r:159, g:228, b:223},
{uid:'MARD_R15', id:'R15', r:119, g:206, b:233},
{uid:'MARD_R16', id:'R16', r:62, g:207, b:202},
{uid:'MARD_R17', id:'R17', r:74, g:134, b:122},
{uid:'MARD_R18', id:'R18', r:127, g:205, b:157},
{uid:'MARD_R19', id:'R19', r:205, g:229, b:93},
{uid:'MARD_R20', id:'R20', r:232, g:199, b:180},
{uid:'MARD_R21', id:'R21', r:173, g:111, b:60},
{uid:'MARD_R22', id:'R22', r:108, g:55, b:47},
{uid:'MARD_R23', id:'R23', r:254, g:184, b:114},
{uid:'MARD_R24', id:'R24', r:243, g:193, b:192},
{uid:'MARD_R25', id:'R25', r:201, g:103, b:94},
{uid:'MARD_R26', id:'R26', r:210, g:147, b:190},
{uid:'MARD_R27', id:'R27', r:234, g:140, b:177},
{uid:'MARD_R28', id:'R28', r:156, g:135, b:214},
{uid:'MARD_T1', id:'T1', r:255, g:255, b:255},
{uid:'MARD_Y1', id:'Y1', r:253, g:111, b:180},
{uid:'MARD_Y2', id:'Y2', r:254, g:180, b:129},
{uid:'MARD_Y3', id:'Y3', r:215, g:250, b:160},
{uid:'MARD_Y4', id:'Y4', r:139, g:219, b:250},
{uid:'MARD_Y5', id:'Y5', r:233, g:135, b:234},
{uid:'MARD_ZG1', id:'ZG1', r:218, g:171, b:179},
{uid:'MARD_ZG2', id:'ZG2', r:214, g:170, b:135},
{uid:'MARD_ZG3', id:'ZG3', r:193, g:189, b:141},
{uid:'MARD_ZG4', id:'ZG4', r:150, g:182, b:159},
{uid:'MARD_ZG5', id:'ZG5', r:132, g:157, b:198},
{uid:'MARD_ZG6', id:'ZG6', r:148, g:191, b:226},
{uid:'MARD_ZG7', id:'ZG7', r:226, g:169, b:210},
{uid:'MARD_ZG8', id:'ZG8', r:171, g:145, b:192},]
const table01id = [
  'MARD_B3','MARD_C3','MARD_D9','MARD_E2','MARD_G1','MARD_A4',
  'MARD_B5','MARD_C5','MARD_D6','MARD_E4','MARD_G5','MARD_A6',
  'MARD_B8','MARD_C8','MARD_D7','MARD_F5','MARD_G7','MARD_A7',
  'MARD_H1','MARD_H2','MARD_H3','MARD_H4','MARD_H5','MARD_H7'
];
const table02id = [
  'MARD_C2','MARD_C13','MARD_D19','MARD_E8','MARD_A13','MARD_A11',
  'MARD_C10','MARD_C6','MARD_D18','MARD_E3','MARD_A10','MARD_G9',
  'MARD_C11','MARD_C7','MARD_D21','MARD_D13','MARD_F13','MARD_G13',
  'MARD_B12','MARD_D3','MARD_D15','MARD_E7','MARD_F8','MARD_G8'
];
const table03id = [
  'MARD_A3','MARD_B20','MARD_D16','MARD_D8','MARD_E1','MARD_G2',
  'MARD_B18','MARD_B10','MARD_D11','MARD_D12','MARD_E12','MARD_G3',
  'MARD_B14','MARD_B19','MARD_D2','MARD_D20','MARD_E5','MARD_F10',
  'MARD_B17','MARD_B7','MARD_C16','MARD_D14','MARD_E13','MARD_F7'
];
const table04id = [
  'MARD_E11','MARD_E14','MARD_F1','MARD_A14','MARD_M6','MARD_M5',
  'MARD_E15','MARD_F14','MARD_F9','MARD_F2','MARD_G14','MARD_M9',
  'MARD_E9','MARD_E6','MARD_F12','MARD_F3','MARD_F11','MARD_M12',
  'MARD_D5','MARD_E10','MARD_F4','MARD_F6','MARD_G17','MARD_H6'
];
const table05id = [
  'MARD_A15','MARD_A5','MARD_A8','MARD_A12','MARD_A9','MARD_G6',
  'MARD_A1','MARD_B13','MARD_B1','MARD_B2','MARD_B4','MARD_B11',
  'MARD_H12','MARD_C1','MARD_B16','MARD_B6','MARD_C15','MARD_B15',
  'MARD_C14','MARD_D17','MARD_D1','MARD_C4','MARD_C17','MARD_C9'
];
const table06id = [
  'MARD_H8','MARD_G15','MARD_A2','MARD_H13','MARD_G16','MARD_H9',
  'MARD_H10','MARD_M1','MARD_G11','MARD_G4','MARD_M4','MARD_H14',
  'MARD_M10','MARD_M2','MARD_G12','MARD_M13','MARD_M7','MARD_H11',
  'MARD_M11','MARD_M3','MARD_G10','MARD_M14','MARD_M8','MARD_M15'
];
const table09id = [
  'MARD_H17','MARD_H18','MARD_H19','MARD_E16','MARD_F16','MARD_F17',
  'MARD_D23','MARD_E24','MARD_E19','MARD_E18','MARD_E17','MARD_E20',
  'MARD_B24','MARD_A16','MARD_A17','MARD_A18','MARD_F24','MARD_F23',
  'MARD_A24','MARD_A22','MARD_A21','MARD_F21','MARD_F22','MARD_A19'
];
const table10id = [
  'MARD_A26','MARD_A25','MARD_A20','MARD_A23','MARD_G18','MARD_H21',
  'MARD_B26','MARD_B32','MARD_B31','MARD_B30','MARD_B27','MARD_B29',
  'MARD_C22','MARD_C23','MARD_C24','MARD_B28','MARD_C25','MARD_C27',
  'MARD_H15','MARD_H20','MARD_H23','MARD_H22','MARD_C28','MARD_C21'
];
const table11id = [
  'MARD_F15','MARD_F19','MARD_G20','MARD_E21','MARD_E22','MARD_D26',
  'MARD_F25','MARD_F20','MARD_G19','MARD_F18','MARD_G21','MARD_E23',
  'MARD_D25','MARD_D22','MARD_D24','MARD_C20','MARD_B21','MARD_B25',
  'MARD_H16','MARD_B23','MARD_C18','MARD_B22','MARD_C19','MARD_C26'
];
const tableAid = [
  'MARD_B10','MARD_C2','MARD_C3','MARD_C13','MARD_D16','MARD_D17',
  'MARD_B6','MARD_C4','MARD_C10','MARD_C17','MARD_D1','MARD_D11',
  'MARD_C15','MARD_C11','MARD_C5','MARD_C6','MARD_C7','MARD_D2',
  'MARD_B19','MARD_B7','MARD_C8','MARD_C9','MARD_D3','MARD_C16'
];
const tableBid = [
  'MARD_E12','MARD_E2','MARD_E8','MARD_D19','MARD_D8','MARD_D9',
  'MARD_E6','MARD_E4','MARD_E3','MARD_E9','MARD_D12','MARD_D6',
  'MARD_E5','MARD_E10','MARD_D5','MARD_D13','MARD_D20','MARD_D18',
  'MARD_E7','MARD_E13','MARD_D21','MARD_D14','MARD_D7','MARD_D15'
];
const tableCid = [
  'MARD_C14','MARD_B20','MARD_C1','MARD_B18','MARD_M5','MARD_M6',
  'MARD_B3','MARD_B16','MARD_B13','MARD_B1','MARD_G13','MARD_F10',
  'MARD_B5','MARD_B4','MARD_B2','MARD_B14','MARD_G7','MARD_F11',
  'MARD_B15','MARD_B12','MARD_B8','MARD_B17','MARD_B11','MARD_G8'
];
const tableDid = [
  'MARD_A15','MARD_A3','MARD_A11','MARD_A9','MARD_F14','MARD_F12',
  'MARD_A4','MARD_A13','MARD_A6','MARD_F1','MARD_F2','MARD_F3',
  'MARD_A5','MARD_A10','MARD_A7','MARD_F13','MARD_F9','MARD_F6',
  'MARD_A8','MARD_A14','MARD_F4','MARD_F5','MARD_F8','MARD_F7'
];
const tableEid = [
  'MARD_E15','MARD_E1','MARD_E14','MARD_E11','MARD_H2','MARD_H1',
  'MARD_A12','MARD_G3','MARD_G2','MARD_G1','MARD_A1','MARD_H12',
  'MARD_G6','MARD_G5','MARD_G9','MARD_M9','MARD_H3','MARD_H4',
  'MARD_G14','MARD_M12','MARD_G17','MARD_H5','MARD_H6','MARD_H7'
];
function buildTableFromIds(uids) {
  return table1.filter(c => uids.includes(c.uid));
}

  const table01 = buildTableFromIds(table01id);
  const table02 = buildTableFromIds(table02id);
  const table03 = buildTableFromIds(table03id);
  const table04 = buildTableFromIds(table04id);
  const table05 = buildTableFromIds(table05id);
  const table06 = buildTableFromIds(table06id);
  const table09 = buildTableFromIds(table09id);
  const table10 = buildTableFromIds(table10id);
  const table11 = buildTableFromIds(table11id);
  const tableA = buildTableFromIds(tableAid);
  const tableB = buildTableFromIds(tableBid);
  const tableC = buildTableFromIds(tableCid);
  const tableD = buildTableFromIds(tableDid);
  const tableE = buildTableFromIds(tableEid);
  
function mergeTables(...tables) {
  const map = new Map();
  tables.flat().forEach(c => map.set(c.uid, c));
  return Array.from(map.values());
}
const tableMyIds = [
  'A9','B13','G7','H2','H3','H5','E18','E4','R1','D9','D18','D7','B3','B2','B8','C21','C10','D3','E1','A12','A7','A15','R10','A4','E1','G10','F13','H1','H11','H4','E6','F3','F8','E19','D5','D6','C15','B13','B21','R14','C4','D4','R27','R3','A10','A2','R4','A3' // 这里是你自定义的 id 列表
];

// 生成 tableMy
function buildMyTableFromTable1(oldIds, newIds) {
  const result = [];
  oldIds.forEach((oldId, idx) => {
    const color = table1.find(c => c.uid === oldId);
    if (color) {
      // 使用新对象，确保不引用 table1 原对象
      result.push({
	    uid: oldIds[idx],
        id: newIds[idx],
        r: color.r,
        g: color.g,
        b: color.b
      });
    }
  });
  return result;
}


// 举例
  const tableMy = buildMyTableFromTable1(  
    ['MARD_A9','MARD_B13','MARD_G7','MARD_H2','MARD_H3','MARD_H5','MARD_E18','MARD_E4','MARD_R1','MARD_D9','MARD_D18','MARD_D7','MARD_B3','MARD_B2','MARD_B8','MARD_C21','MARD_C10','MARD_D3','MARD_E1','MARD_A12','MARD_A7','MARD_A15','MARD_R10','MARD_A4','MARD_E1','MARD_G10','MARD_F13','MARD_H1','MARD_H11','MARD_H4','MARD_E6','MARD_F3','MARD_F8','MARD_E19','MARD_D5','MARD_D6','MARD_C15','MARD_B13','MARD_B21','MARD_R14','MARD_C4','MARD_D4','MARD_R27','MARD_R3','MARD_A10','MARD_A2','MARD_R4','MARD_A3'], 
    ['U2','U4','U5','V2','V4','V6','S1','S2','S5','T2','T5','T6','Q2','Q4','Q5','R1','R2','R5','N2','N3','N6','P2','P5','P6','U1','U3','U6','V1','V3','V5','S3','S4','S6','T1','T3','T4','Q1','Q3','Q6','R3','R4','R6','N1','N4','N5','P1','P3','P4']
  );
  const tableCoco = buildMyTableFromTable1(  
    ['MARD_A1','MARD_A2','MARD_A3','MARD_A4','MARD_A5','MARD_A6','MARD_A7','MARD_A8','MARD_A9','MARD_A10','MARD_A11','MARD_A12','MARD_A13','MARD_A14','MARD_A15','MARD_A16','MARD_A17','MARD_A18','MARD_A19','MARD_A20','MARD_A21','MARD_A22','MARD_A23','MARD_A24','MARD_A25','MARD_A26','MARD_B1','MARD_B2','MARD_B3','MARD_B4','MARD_B5','MARD_B6','MARD_B7','MARD_B8','MARD_B9','MARD_B10','MARD_B11','MARD_B12','MARD_B13','MARD_B14','MARD_B15','MARD_B16','MARD_B17','MARD_B18','MARD_B19','MARD_B20','MARD_B21','MARD_B22','MARD_B23','MARD_B24','MARD_B25','MARD_B26','MARD_B27','MARD_B28','MARD_B29','MARD_B30','MARD_B31','MARD_B32','MARD_C1','MARD_C2','MARD_C3','MARD_C4','MARD_C5','MARD_C6','MARD_C7','MARD_C8','MARD_C9','MARD_C10','MARD_C11','MARD_C12','MARD_C13','MARD_C14','MARD_C15','MARD_C16','MARD_C17','MARD_C18','MARD_C19','MARD_C20','MARD_C21','MARD_C22','MARD_C23','MARD_C24','MARD_C25','MARD_C26','MARD_C27','MARD_C28','MARD_C29','MARD_D1','MARD_D2','MARD_D3','MARD_D4','MARD_D5','MARD_D6','MARD_D7','MARD_D8','MARD_D9','MARD_D10','MARD_D11','MARD_D12','MARD_D13','MARD_D14','MARD_D15','MARD_D16','MARD_D17','MARD_D18','MARD_D19','MARD_D20','MARD_D21','MARD_D22','MARD_D23','MARD_D24','MARD_D25','MARD_D26','MARD_E1','MARD_E2','MARD_E3','MARD_E4','MARD_E5','MARD_E6','MARD_E7','MARD_E8','MARD_E9','MARD_E10','MARD_E11','MARD_E12','MARD_E13','MARD_E14','MARD_E15','MARD_E16','MARD_E17','MARD_E18','MARD_E19','MARD_E20','MARD_E21','MARD_E22','MARD_E23','MARD_E24','MARD_F1','MARD_F2','MARD_F3','MARD_F4','MARD_F5','MARD_F6','MARD_F7','MARD_F8','MARD_F9','MARD_F10','MARD_F11','MARD_F12','MARD_F13','MARD_F14','MARD_F15','MARD_F16','MARD_F17','MARD_F18','MARD_F19','MARD_F20','MARD_F21','MARD_F22','MARD_F23','MARD_F24','MARD_F25','MARD_G1','MARD_G2','MARD_G3','MARD_G4','MARD_G5','MARD_G6','MARD_G7','MARD_G8','MARD_G9','MARD_G10','MARD_G11','MARD_G12','MARD_G13','MARD_G14','MARD_G15','MARD_G16','MARD_G17','MARD_G18','MARD_G19','MARD_G20','MARD_G21','MARD_H1','MARD_H2','MARD_H3','MARD_H4','MARD_H5','MARD_H6','MARD_H7','MARD_H8','MARD_H9','MARD_H10','MARD_H11','MARD_H12','MARD_H13','MARD_H14','MARD_H15','MARD_H16','MARD_H17','MARD_H18','MARD_H19','MARD_H20','MARD_H21','MARD_H22','MARD_H23','MARD_M1','MARD_M2','MARD_M3','MARD_M4','MARD_M5','MARD_M6','MARD_M7','MARD_M8','MARD_M9','MARD_M10','MARD_M11','MARD_M12','MARD_M13','MARD_M14','MARD_M15','MARD_P1','MARD_P2','MARD_P3','MARD_P4','MARD_P5','MARD_P6','MARD_P7','MARD_P8','MARD_P9','MARD_P10','MARD_P11','MARD_P12','MARD_P13','MARD_P14','MARD_P15','MARD_P16','MARD_P17','MARD_P18','MARD_P19','MARD_P20','MARD_P21','MARD_P22','MARD_P23','MARD_R1','MARD_R2','MARD_R3','MARD_R4','MARD_R5','MARD_R6','MARD_R7','MARD_R8','MARD_R9','MARD_R10','MARD_R11','MARD_R12','MARD_R13','MARD_R14','MARD_R15','MARD_R16','MARD_R17','MARD_R18','MARD_R19','MARD_R20','MARD_R21','MARD_R22','MARD_R23','MARD_R24','MARD_R25','MARD_R26','MARD_R27','MARD_R28','MARD_T1','MARD_Y1','MARD_Y2','MARD_Y3','MARD_Y4','MARD_Y5'], 
    ['E2','E1','E5','E7','D3','D5','D8','E8','D6','D7','D1','K9','D4','C5','E4','E3','E6','D2','K10','E9','E10','E11','E12','E13','E14','E15','F5','F8','F4','F9','F10','G4','G5','F11','F16','G3','F14','F12','F2','F6','F15','F3','F13','F7','G6','G2','G7','G8','F17','F1','F18','F19','F20','F21','F22','F23','F24','F25','G1','H3','H4','H5','H7','H8','H13','H14','H16','H9','H10','H23','H1','H2','H11','H18','H19','H24','H12','H17','H6','H25','H26','H27','H28','H29','H30','H31','H32','J7','J8','H15','H20','J12','J11','J15','J3','J4','J19','J6','J10','J14','J16','H22','J1','J5','J13','J9','J17','J18','H21','J2','J20','J21','J22','K3','K15','K17','K21','K19','K22','K25','K12','K18','K23','K2','K16','K24','K5','K4','K1','K11','K13','K14','K26','K27','K28','K29','K30','K8','C2','C3','C6','C7','Z21','C10','C9','K20','Z20','Z23','C1','C4','K7','C8','K6','K31','K32','K33','K34','K35','K36','K37','K38','K39','Z2','Z5','Z6','Z8','Z10','Z11','Z18','Z22','Z9','Z15','Z7','Z13','Z14','Z17','Z3','Z4','Z16','Z1','Z12','Z19','Z24','A2','A1','B3','B5','B6','B7','B9','A9','A8','A10','B1','A4','A6','B2','B4','B8','A7','A3','A5','B10','A11','A12','B11','Y1','Y2','Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10','Y11','Y12','Y13','Y14','Y15','M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11','M12','M13','M14','M15','M16','M17','M18','M19','M21','M20','M22','M23','L1','L2','L3','L4','L5','L6','L7','L8','L9','L10','L11','L12','L13','S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13','S14','S15','L14','N1','N2','N3','N4','N5']
  );
  const tableKaka = buildMyTableFromTable1(  
    ['MARD_A1','MARD_A2','MARD_A3','MARD_A4','MARD_A5','MARD_A6','MARD_A7','MARD_A8','MARD_A9','MARD_A10','MARD_A11','MARD_A12','MARD_A13','MARD_A14','MARD_A15','MARD_A16','MARD_A19','MARD_A22','MARD_A24','MARD_A25','MARD_A26','MARD_B1','MARD_B2','MARD_B3','MARD_B4','MARD_B5','MARD_B6','MARD_B7','MARD_B9','MARD_B10','MARD_B11','MARD_B12','MARD_B13','MARD_B14','MARD_B15','MARD_B17','MARD_B18','MARD_B19','MARD_B20','MARD_B21','MARD_B22','MARD_B23','MARD_B26','MARD_B32','MARD_C1','MARD_C2','MARD_C3','MARD_C4','MARD_C5','MARD_C6','MARD_C7','MARD_C8','MARD_C9','MARD_C11','MARD_C13','MARD_C14','MARD_C15','MARD_C18','MARD_C21','MARD_C24','MARD_C27','MARD_D1','MARD_D2','MARD_D3','MARD_D4','MARD_D6','MARD_D7','MARD_D8','MARD_D9','MARD_D10','MARD_D12','MARD_D14','MARD_D17','MARD_D20','MARD_D21','MARD_D22','MARD_D24','MARD_E1','MARD_E2','MARD_E3','MARD_E4','MARD_E5','MARD_E7','MARD_E8','MARD_E9','MARD_E10','MARD_E11','MARD_E12','MARD_E13','MARD_E14','MARD_E16','MARD_E17','MARD_E19','MARD_E20','MARD_E21','MARD_E22','MARD_E23','MARD_E24','MARD_F3','MARD_F5','MARD_F6','MARD_F7','MARD_F8','MARD_F9','MARD_F11','MARD_F12','MARD_F13','MARD_F14','MARD_F15','MARD_F16','MARD_F17','MARD_F18','MARD_F19','MARD_F20','MARD_F21','MARD_F23','MARD_F24','MARD_F25','MARD_G1','MARD_G3','MARD_G4','MARD_G5','MARD_G6','MARD_G7','MARD_G8','MARD_G9','MARD_G11','MARD_G12','MARD_G13','MARD_G16','MARD_G19','MARD_G20','MARD_G21','MARD_H1','MARD_H2','MARD_H3','MARD_H5','MARD_H6','MARD_H7','MARD_H8','MARD_H9','MARD_H11','MARD_H12','MARD_H13','MARD_H15','MARD_H17','MARD_H18','MARD_H21','MARD_H22','MARD_M2','MARD_M4','MARD_M6','MARD_M7','MARD_M8','MARD_M10','MARD_M12','MARD_M14','MARD_M15','MARD_M17'], 
    ['B257','B108','B86','B91','B90','B198','B185','B194','B165','B68','B180','B66','B164','B69','B163','B162','B189','B87','B171','B195','B197','B107','B118','B125','B169','B126','B146','B137','B133','B136','B140','B168','B149','B122','B133','B119','B106','B146','B211','B138','B147','B121','B112','B109','B123','B143','B160','B220','B227','B154','B155','B157','B156','B145','B151','B209','B144','B240','B208','B153','B207','B230','B231','B158','B159','B24','B103','B19','B234','B27','B22','B101','B224','B99','B100','B233','B232','B177','B43','B48','B52','B79','B82','B37','B78','B80','B175','B45','B84','B176','B219','B216','B44','B43','B39','B264','B265','B217','B54','B62','B74','B60','B56','B191','B95','B130','B72','B188','B63','B268','B187','B50','B57','B42','B186','B71','B47','B53','B179','B172','B273','B182','B92','B97','B170','B196','B242','B269','B93','B270','B199','B94','B254','B1','B2','B5','B7','B8','B11','B218','B3','B4','B213','B28','B259','B205','B213','B214','B205','B253','B278','B244','B30','B29','B263','B33','B73','B6','B34']
  );
  const tableManman = buildMyTableFromTable1(  
    ['MARD_A1','MARD_A2','MARD_A3','MARD_A4','MARD_A5','MARD_A6','MARD_A7','MARD_A8','MARD_A9','MARD_A10','MARD_A11','MARD_A12','MARD_A13','MARD_A14','MARD_A15','MARD_A16','MARD_A17','MARD_A18','MARD_A19','MARD_A20','MARD_A21','MARD_A22','MARD_A23','MARD_A24','MARD_A25','MARD_A26','MARD_B1','MARD_B2','MARD_B3','MARD_B4','MARD_B5','MARD_B6','MARD_B7','MARD_B8','MARD_B9','MARD_B10','MARD_B11','MARD_B12','MARD_B13','MARD_B14','MARD_B15','MARD_B16','MARD_B17','MARD_B18','MARD_B19','MARD_B20','MARD_B21','MARD_B22','MARD_B23','MARD_B24','MARD_B25','MARD_B26','MARD_B27','MARD_B28','MARD_B29','MARD_B30','MARD_B31','MARD_B32','MARD_C1','MARD_C2','MARD_C3','MARD_C4','MARD_C5','MARD_C6','MARD_C7','MARD_C8','MARD_C9','MARD_C10','MARD_C11','MARD_C12','MARD_C13','MARD_C14','MARD_C15','MARD_C16','MARD_C17','MARD_C18','MARD_C19','MARD_C20','MARD_C21','MARD_C22','MARD_C23','MARD_C24','MARD_C25','MARD_C26','MARD_C27','MARD_C28','MARD_C29','MARD_D1','MARD_D2','MARD_D3','MARD_D4','MARD_D5','MARD_D6','MARD_D7','MARD_D8','MARD_D9','MARD_D10','MARD_D11','MARD_D12','MARD_D13','MARD_D14','MARD_D15','MARD_D16','MARD_D17','MARD_D18','MARD_D19','MARD_D20','MARD_D21','MARD_D22','MARD_D23','MARD_D24','MARD_D25','MARD_D26','MARD_E1','MARD_E2','MARD_E3','MARD_E4','MARD_E5','MARD_E6','MARD_E7','MARD_E8','MARD_E9','MARD_E10','MARD_E11','MARD_E12','MARD_E13','MARD_E14','MARD_E15','MARD_E16','MARD_E17','MARD_E18','MARD_E19','MARD_E20','MARD_E21','MARD_E22','MARD_E23','MARD_E24','MARD_F1','MARD_F2','MARD_F3','MARD_F4','MARD_F5','MARD_F6','MARD_F7','MARD_F8','MARD_F9','MARD_F10','MARD_F11','MARD_F12','MARD_F13','MARD_F14','MARD_F15','MARD_F16','MARD_F17','MARD_F18','MARD_F19','MARD_F20','MARD_F21','MARD_F22','MARD_F23','MARD_F24','MARD_F25','MARD_G1','MARD_G2','MARD_G3','MARD_G4','MARD_G5','MARD_G6','MARD_G7','MARD_G8','MARD_G9','MARD_G10','MARD_G11','MARD_G12','MARD_G13','MARD_G14','MARD_G15','MARD_G16','MARD_G17','MARD_G18','MARD_G19','MARD_G20','MARD_G21','MARD_H1','MARD_H2','MARD_H3','MARD_H4','MARD_H5','MARD_H6','MARD_H7','MARD_H8','MARD_H9','MARD_H10','MARD_H11','MARD_H12','MARD_H13','MARD_H14','MARD_H15','MARD_H16','MARD_H17','MARD_H18','MARD_H19','MARD_H20','MARD_H21','MARD_H22','MARD_H23','MARD_M1','MARD_M2','MARD_M3','MARD_M4','MARD_M5','MARD_M6','MARD_M7','MARD_M8','MARD_M9','MARD_M10','MARD_M11','MARD_M12','MARD_M13','MARD_M14','MARD_M15','MARD_P1','MARD_P2','MARD_P3','MARD_P4','MARD_P5','MARD_P6','MARD_P7','MARD_P8','MARD_P9','MARD_P10','MARD_P11','MARD_P12','MARD_P13','MARD_P14','MARD_P15','MARD_P16','MARD_P17','MARD_P18','MARD_P19','MARD_P20','MARD_P21','MARD_P22','MARD_P23','MARD_R1','MARD_R2','MARD_R3','MARD_R4','MARD_R5','MARD_R6','MARD_R7','MARD_R8','MARD_R9','MARD_R10','MARD_R11','MARD_R12','MARD_R13','MARD_R14','MARD_R15','MARD_R16','MARD_R17','MARD_R18','MARD_R19','MARD_R20','MARD_R21','MARD_R22','MARD_R23','MARD_R24','MARD_R25','MARD_R26','MARD_R27','MARD_R28','MARD_T1','MARD_Y1','MARD_Y2','MARD_Y3','MARD_Y4','MARD_Y5'], 
    ['E2','B1','B2','B3','B4','B5','B6','B10','B11','B12','E11','A18','B13','B14','B15','IC4','IC9','IC14','IC15','Q6','R7','R6','R8','G3','G4','G5','C1','C2','C7','C3','C4','C9','C10','C5','C6','C11','C12','C13','C14','C15','C16','C17','C18','C19','DH15','DH10','DH2','DH7','DH12','IC5','Q13','Q7','R10','R11','RO9','G6','G7','G12','C8','D1','D2','D3','D7','D4','D8','D9','N5','D25','D28','D26','D30','D29','D31','D32','D36','DH6','DH9','DH14','IC3','Q11','R13','R14','R12','R15','G13','G14','G15','D5','D6','D10','D11','D13','D14','D12','D16','D17','D15','D19','D20','D21','D22','D18','D23','D24','D27','D33','D34','D35','DH1','IC8','Q14','Q15','R1','E1','A7','A8','A9','A10','A11','A12','A13','A14','A16','A19','A20','A21','E21','A23','IC2','IC7','C13','IC12','Q1','Q2','Q4','Q3','G8','A1','A2','A3','A4','A5','E9','A6','A17','A15','E15','E16','A22','A24','A25','DH8','IC10','Q9','Q10','Q5','R4','R3','R2','R5','G9','G10','E3','E4','E5','E6','B7','B8','E7','E8','E10','B9','E12','E13','E17','E14','E19','E20','E22','DH5','DH3','DH13','Q8','F1','F2','F3','F4','F5','F6','F7','F8','F10','F9','F11','E18','E23','F12','DH4','DH11','IC1','IC6','IC11','Q12','G1','G2','G11','YX11','YX12','YX2','YX15','YX6','YX1','YX13','YX14','YX10','YX9','YX4','YX5','YX8','YX3','YX7','P1','P2','P4','P5','P3','P8','P6','P7','P13','P18','P9','P12','P17','P22','P23','P14','P19','P11','P10','P15','P20','P16','P21','T1','N1','N2','N3','N4','T4','T5','T3','T2','L2','T6','T7','L7','S1','S2','S3','S5','S4','S11','S6','S13','S15','S12','S4','S14','S9','S8','S10','L6','Y1','Y2','Y3','Y4','Y5']
  );
  const tablePanpan = buildMyTableFromTable1(  
    ['MARD_A1','MARD_A2','MARD_A3','MARD_A4','MARD_A5','MARD_A6','MARD_A7','MARD_A8','MARD_A9','MARD_A10','MARD_A11','MARD_A12','MARD_A13','MARD_A14','MARD_A15','MARD_A16','MARD_A17','MARD_A18','MARD_A19','MARD_A20','MARD_A21','MARD_A22','MARD_A23','MARD_A24','MARD_A25','MARD_A26','MARD_B1','MARD_B2','MARD_B3','MARD_B4','MARD_B5','MARD_B6','MARD_B7','MARD_B8','MARD_B9','MARD_B10','MARD_B11','MARD_B12','MARD_B13','MARD_B14','MARD_B15','MARD_B16','MARD_B17','MARD_B18','MARD_B19','MARD_B20','MARD_B21','MARD_B22','MARD_B23','MARD_B24','MARD_B25','MARD_B26','MARD_B27','MARD_B28','MARD_B29','MARD_B30','MARD_B31','MARD_B32','MARD_C1','MARD_C2','MARD_C3','MARD_C4','MARD_C5','MARD_C6','MARD_C7','MARD_C8','MARD_C9','MARD_C10','MARD_C11','MARD_C12','MARD_C13','MARD_C14','MARD_C15','MARD_C16','MARD_C17','MARD_C18','MARD_C19','MARD_C20','MARD_C21','MARD_C22','MARD_C23','MARD_C24','MARD_C25','MARD_C26','MARD_C27','MARD_C28','MARD_C29','MARD_D1','MARD_D2','MARD_D3','MARD_D4','MARD_D5','MARD_D6','MARD_D7','MARD_D8','MARD_D9','MARD_D10','MARD_D11','MARD_D12','MARD_D13','MARD_D14','MARD_D15','MARD_D16','MARD_D17','MARD_D18','MARD_D19','MARD_D20','MARD_D21','MARD_D22','MARD_D23','MARD_D24','MARD_D25','MARD_D26','MARD_E1','MARD_E2','MARD_E3','MARD_E4','MARD_E5','MARD_E6','MARD_E7','MARD_E8','MARD_E9','MARD_E10','MARD_E11','MARD_E12','MARD_E13','MARD_E14','MARD_E15','MARD_E16','MARD_E17','MARD_E18','MARD_E19','MARD_E20','MARD_E21','MARD_E22','MARD_E23','MARD_E24','MARD_F1','MARD_F2','MARD_F3','MARD_F4','MARD_F5','MARD_F6','MARD_F7','MARD_F8','MARD_F9','MARD_F10','MARD_F11','MARD_F12','MARD_F13','MARD_F14','MARD_F15','MARD_F16','MARD_F17','MARD_F18','MARD_F19','MARD_F20','MARD_F21','MARD_F22','MARD_F23','MARD_F24','MARD_F25','MARD_G1','MARD_G2','MARD_G3','MARD_G4','MARD_G5','MARD_G6','MARD_G7','MARD_G8','MARD_G9','MARD_G10','MARD_G11','MARD_G12','MARD_G13','MARD_G14','MARD_G15','MARD_G16','MARD_G17','MARD_G18','MARD_G19','MARD_G20','MARD_G21','MARD_H1','MARD_H2','MARD_H3','MARD_H4','MARD_H5','MARD_H6','MARD_H7','MARD_H8','MARD_H9','MARD_H10','MARD_H11','MARD_H12','MARD_H13','MARD_H14','MARD_H15','MARD_H16','MARD_H17','MARD_H18','MARD_H19','MARD_H20','MARD_H21','MARD_H22','MARD_H23','MARD_M1','MARD_M2','MARD_M3','MARD_M4','MARD_M5','MARD_M6','MARD_M7','MARD_M8','MARD_M9','MARD_M10','MARD_M11','MARD_M12','MARD_M13','MARD_M14','MARD_M15','MARD_P1','MARD_P2','MARD_P3','MARD_P4','MARD_P5','MARD_P6','MARD_P7','MARD_P8','MARD_P9','MARD_P10','MARD_P11','MARD_P12','MARD_P13','MARD_P14','MARD_P15','MARD_P16','MARD_P17','MARD_P18','MARD_P19','MARD_P20','MARD_P21','MARD_P22','MARD_P23','MARD_R1','MARD_R2','MARD_R3','MARD_R4','MARD_R5','MARD_R6','MARD_R7','MARD_R8','MARD_R9','MARD_R10','MARD_R11','MARD_R12','MARD_R13','MARD_R14','MARD_R15','MARD_R16','MARD_R17','MARD_R18','MARD_R19','MARD_R20','MARD_R21','MARD_R22','MARD_R23','MARD_R24','MARD_R25','MARD_R26','MARD_R27','MARD_R28','MARD_T1','MARD_Y1','MARD_Y2','MARD_Y3','MARD_Y4','MARD_Y5'], 
    ['65','2','28','3','74','29','4','88','90','89','100','99','131','138','150','216','213','223','218','242','276','270','274','288','289','290','48','33','26','66','39','11','44','10','79','96','97','106','128','129','130','141','142','147','191','192','207','206','205','222','240','248','262','269','268','285','286','287','64','30','63','77','34','25','9','52','42','121','122','120','140','139','143','149','163','196','202','197','212','239','263','267','271','265','279','280','281','46','36','8','75','32','27','7','94','93','92','105','104','103','102','101','118','119','124','153','161','162','198','217','244','249','273','18','38','62','6','40','20','41','84','98','83','125','126','127','137','135','221','220','210','215','241','253','252','250','282','35','31','53','54','5','16','47','81','82','116','117','136','148','154','204','211','245','246','243','275','266','272','264','283','284','76','49','80','19','43','50','17','12','91','87','112','113','115','114','133','134','144','203','208','199','247','15','1','13','78','45','51','14','85','95','86','123','132','145','146','201','200','214','219','209','251','291','277','278','168','172','166','167','174','169','171','177','170','164','176','173','175','165','178','71','55','73','72','56','157','159','158','195','187','185','190','193','183','184','182','179','194','186','188','180','189','181','67','24','22','21','23','69','37','68','70','156','151','160','152','231','237','238','233','235','227','230','234','226','224','228','225','229','232','236','155','59','60','57','58','61']
  );
  const tableMixiaowo = buildMyTableFromTable1(  
    ['MARD_A1','MARD_A2','MARD_A3','MARD_A4','MARD_A5','MARD_A6','MARD_A7','MARD_A8','MARD_A9','MARD_A10','MARD_A11','MARD_A12','MARD_A13','MARD_A14','MARD_A15','MARD_A16','MARD_A17','MARD_A18','MARD_A19','MARD_A20','MARD_A21','MARD_A22','MARD_A23','MARD_A24','MARD_A25','MARD_A26','MARD_B1','MARD_B2','MARD_B3','MARD_B4','MARD_B5','MARD_B6','MARD_B7','MARD_B8','MARD_B9','MARD_B10','MARD_B11','MARD_B12','MARD_B13','MARD_B14','MARD_B15','MARD_B16','MARD_B17','MARD_B18','MARD_B19','MARD_B20','MARD_B21','MARD_B22','MARD_B23','MARD_B24','MARD_B25','MARD_B26','MARD_B27','MARD_B28','MARD_B29','MARD_B30','MARD_B31','MARD_B32','MARD_C1','MARD_C2','MARD_C3','MARD_C4','MARD_C5','MARD_C6','MARD_C7','MARD_C8','MARD_C9','MARD_C10','MARD_C11','MARD_C12','MARD_C13','MARD_C14','MARD_C15','MARD_C16','MARD_C17','MARD_C18','MARD_C19','MARD_C20','MARD_C21','MARD_C22','MARD_C23','MARD_C24','MARD_C25','MARD_C26','MARD_C27','MARD_C28','MARD_C29','MARD_D1','MARD_D2','MARD_D3','MARD_D4','MARD_D5','MARD_D6','MARD_D7','MARD_D8','MARD_D9','MARD_D10','MARD_D11','MARD_D12','MARD_D13','MARD_D14','MARD_D15','MARD_D16','MARD_D17','MARD_D18','MARD_D19','MARD_D20','MARD_D21','MARD_D22','MARD_D23','MARD_D24','MARD_D25','MARD_D26','MARD_E1','MARD_E2','MARD_E3','MARD_E4','MARD_E5','MARD_E6','MARD_E7','MARD_E8','MARD_E9','MARD_E10','MARD_E11','MARD_E12','MARD_E13','MARD_E14','MARD_E15','MARD_E16','MARD_E17','MARD_E18','MARD_E19','MARD_E20','MARD_E21','MARD_E22','MARD_E23','MARD_E24','MARD_F1','MARD_F2','MARD_F3','MARD_F4','MARD_F5','MARD_F6','MARD_F7','MARD_F8','MARD_F9','MARD_F10','MARD_F11','MARD_F12','MARD_F13','MARD_F14','MARD_F15','MARD_F16','MARD_F17','MARD_F18','MARD_F19','MARD_F20','MARD_F21','MARD_F22','MARD_F23','MARD_F24','MARD_F25','MARD_G1','MARD_G2','MARD_G3','MARD_G4','MARD_G5','MARD_G6','MARD_G7','MARD_G8','MARD_G9','MARD_G10','MARD_G11','MARD_G12','MARD_G13','MARD_G14','MARD_G15','MARD_G16','MARD_G17','MARD_G18','MARD_G19','MARD_G20','MARD_G21','MARD_H1','MARD_H2','MARD_H3','MARD_H4','MARD_H5','MARD_H6','MARD_H7','MARD_H8','MARD_H9','MARD_H10','MARD_H11','MARD_H12','MARD_H13','MARD_H14','MARD_H15','MARD_H16','MARD_H17','MARD_H18','MARD_H19','MARD_H20','MARD_H21','MARD_H22','MARD_H23','MARD_M1','MARD_M2','MARD_M3','MARD_M4','MARD_M5','MARD_M6','MARD_M7','MARD_M8','MARD_M9','MARD_M10','MARD_M11','MARD_M12','MARD_M13','MARD_M14','MARD_M15','MARD_P1','MARD_P2','MARD_P3','MARD_P4','MARD_P5','MARD_P6','MARD_P7','MARD_P8','MARD_P9','MARD_P10','MARD_P11','MARD_P12','MARD_P13','MARD_P14','MARD_P15','MARD_P16','MARD_P17','MARD_P18','MARD_P19','MARD_P20','MARD_P21','MARD_P22','MARD_P23','MARD_R1','MARD_R2','MARD_R3','MARD_R4','MARD_R5','MARD_R6','MARD_R7','MARD_R8','MARD_R9','MARD_R10','MARD_R11','MARD_R12','MARD_R13','MARD_R14','MARD_R15','MARD_R16','MARD_R17','MARD_R18','MARD_R19','MARD_R20','MARD_R21','MARD_R22','MARD_R23','MARD_R24','MARD_R25','MARD_R26','MARD_R27','MARD_R28','MARD_T1','MARD_Y1','MARD_Y2','MARD_Y3','MARD_Y4','MARD_Y5'], 
    ['77','2','28','3','79','29','4','98','97','96','109','110','116','135','150','216','213','208','218','242','261','255','259','273','274','275','48','33','26','78','39','11','44','10','84','100','99','111','119','117','122','133','141','147','174','175','194','193','192','207','240','248','262','254','253','270','271','272','76','30','75','82','34','25','9','71','42','130','113','120','142','136','132','149','156','196','202','197','212','239','263','252','256','250','264','265','266','46','36','8','80','32','27','7','89','90','91','104','105','106','107','108','126','128','125','153','155','158','198','217','244','234','258','18','38','74','6','40','20','41','103','95','94','131','112','124','140','139','206','205','210','215','241','238','237','235','267','35','31','72','73','5','16','47','92','93','115','129','134','148','154','191','211','245','246','243','260','251','257','249','268','269','81','49','85','19','43','50','17','12','102','101','118','127','114','123','143','138','137','203','195','199','247','15','1','13','83','45','70','14','86','87','88','121','144','146','145','201','200','214','204','209','236','276','277','278','168','172','166','167','159','169','171','162','170','164','161','173','160','165','163','62','69','66','64','63','65','68','67','178','187','185','190','176','183','184','182','179','177','186','180','188','189','181','52','24','22','21','23','55','37','54','56','53','151','157','152','231','224','225','233','222','227','230','221','226','219','228','220','229','232','223','51','59','60','57','58','61']
  );  
// ===== 多个 tableColors =====
const allTableColors = {
  table1: table1,
  table24: table01,
  table48: mergeTables(table01, table02),
  table72: mergeTables(table01, table02, table03),
  table96: mergeTables(table01, table02, table03, table04),
  table120: mergeTables(tableA, tableB, tableC, tableD, tableE),
  table144: mergeTables(tableA, tableB, tableC, tableD, tableE, table06),
  table216: mergeTables(tableA, tableB, tableC, tableD, tableE, table06, table09, table10, table11),
  tableMy: tableMy,
  tableCoco: tableCoco,
  tableManman: tableManman,
  tablePanpan: tablePanpan,
  tableMixiaowo: tableMixiaowo,
};
let tableColors = allTableColors['table1'];

    // 元素引用
    const beadsCanvas = document.getElementById('beads-canvas');
    const beadsCtx = beadsCanvas.getContext('2d');
    const beadsUpload = document.getElementById('beads-upload');
    const beadsColsInput = document.getElementById('beads-cols');
    const beadsColorsBox = document.getElementById('beads-colors');
    const beadsDownloadBtn = document.getElementById('beads-download');
    const tableSelect = document.getElementById('beads-table-select');
    const resultArea = document.getElementById('result-area');
    const paintColorInput = document.getElementById('current-paint-color');
    const btnModePaint = document.getElementById('btn-mode-paint');
    const btnModePick = document.getElementById('btn-mode-pick');
    const btnMirrorLR = document.getElementById('btn-mirror-lr'); // 新增
    const beadIdSpan = document.getElementById('current-bead-id');

    // 裁剪相关
    const cropBox = document.getElementById('crop-box');
    const imageToCrop = document.getElementById('image-to-crop');
    const btnCropConfirm = document.getElementById('btn-crop-confirm');
    const btnCropCancel = document.getElementById('btn-crop-cancel');
    let cropper = null;

    // 状态
    const beadsImg = new Image();
    const beadsMargin = 30;
    let beadsPixels = [];
    let beadsScaledWidth = 0;
    let beadsScaledHeight = 0;
    let beadsImgLoaded = false;
    let mappedData = []; 
    let isPickMode = false;
    let currentGrid = { cols: 0, rows: 0, cell: 0 };

    // ==========================================
    // 新增：键盘快捷键 Q 监听
    // ==========================================
    window.addEventListener('keydown', (e) => {
        // 如果正在输入数字或上传文件，不触发快捷键
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
        
        if (e.key.toLowerCase() === 'q') {
            btnModePick.click(); // 触发取色模式按钮点击
        }
    });

    // 事件：模式切换
    btnModePaint.onclick = () => { isPickMode = false; btnModePaint.classList.add('active'); btnModePick.classList.remove('active'); };
    btnModePick.onclick = () => { isPickMode = true; btnModePick.classList.add('active'); btnModePaint.classList.remove('active'); };

    // ==========================================
    // 新增：左右镜像功能逻辑
    // ==========================================
    btnMirrorLR.onclick = () => {
        if (!mappedData || mappedData.length === 0) return;
        
        const { cols, rows } = currentGrid;
        const newMappedData = new Array(mappedData.length);
        
        // 遍历每一行，进行左右对调
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const oldIndex = r * cols + c;
                // 新的列位置 = 总列数 - 1 - 当前列
                const newIndex = r * cols + (cols - 1 - c);
                newMappedData[newIndex] = mappedData[oldIndex];
            }
        }
        
        mappedData = newMappedData;
        renderScene();
    };


    // 事件：上传
    beadsUpload.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = evt => {
            imageToCrop.src = evt.target.result;
            cropBox.style.display = 'block';
            resultArea.style.display = 'none';
            if (cropper) cropper.destroy();
            cropper = new Cropper(imageToCrop, { viewMode: 1, autoCropArea: 0.9 });
        };
        reader.readAsDataURL(file);
    };

    btnCropConfirm.onclick = () => {
        if (!cropper) return;
        beadsImg.src = cropper.getCroppedCanvas().toDataURL();
        cropBox.style.display = 'none';
        resultArea.style.display = 'block';
        cropper.destroy();
        cropper = null;
    };

    btnCropCancel.onclick = () => {
        cropBox.style.display = 'none';
        beadsUpload.value = '';
    };

    // 事件：画布点击（取色/改色）
    beadsCanvas.onmousedown = (e) => {
        if (!beadsImgLoaded) return;
        const rect = beadsCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const col = Math.floor((x - beadsMargin) / currentGrid.cell);
        const row = Math.floor((y - beadsMargin) / currentGrid.cell);

        if (col >= 0 && col < currentGrid.cols && row >= 0 && row < currentGrid.rows) {
            const index = row * currentGrid.cols + col;
            const target = mappedData[index];

            if (isPickMode) {
                if (target) {
                    const hex = rgbToHex(target.r, target.g, target.b);
                    paintColorInput.value = hex;
                    beadIdSpan.innerText = target.id;
                    btnModePaint.click(); // 自动切回改色模式
                }
            } else {
                const rgb = hexToRgb(paintColorInput.value);
                mappedData[index] = nearestColorFromTable(rgb);
                renderScene();
            }
        }
    };

    // 核心逻辑：生成
    beadsImg.onload = () => {
        beadsImgLoaded = true;
        updateBaseData();
        generateMap(true);
    };

    tableSelect.onchange = () => {
        tableColors = allTableColors[tableSelect.value];
        if (beadsImgLoaded) generateMap(true);
    };

    beadsColsInput.oninput = () => {
        if (beadsImgLoaded) {
            updateBaseData();
            generateMap(true);
        }
    };

    function updateBaseData() {
        const cols = +beadsColsInput.value;
        const minScale = (cols * 15) / beadsImg.width;
        const scale = Math.max(1, minScale);
        beadsScaledWidth = Math.round(beadsImg.width * scale);
        beadsScaledHeight = Math.round(beadsImg.height * scale);

        const c = document.createElement('canvas');
        c.width = beadsScaledWidth; c.height = beadsScaledHeight;
        const ctx = c.getContext('2d');
        ctx.drawImage(beadsImg, 0, 0, beadsScaledWidth, beadsScaledHeight);
        const d = ctx.getImageData(0, 0, beadsScaledWidth, beadsScaledHeight).data;
        beadsPixels = [];
        for (let i = 0; i < d.length; i += 4) beadsPixels.push([d[i], d[i+1], d[i+2], d[i+3]]);
    }

    function generateMap(reset = false) {
        const cols = +beadsColsInput.value;
        const cell = beadsScaledWidth / cols;
        const rows = Math.floor(beadsScaledHeight / cell);
        currentGrid = { cols, rows, cell };

        beadsCanvas.width = cols * cell + beadsMargin * 2;
        beadsCanvas.height = rows * cell + beadsMargin * 2;

        if (reset) {
            mappedData = [];
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const px = beadsPixels[Math.floor(y * cell) * beadsScaledWidth + Math.floor(x * cell)];
                    mappedData.push((!px || px[3] === 0) ? null : nearestColorFromTable(px));
                }
            }
        }
        renderScene();
    }

    function renderScene() {
        const { cols, rows, cell } = currentGrid;
        const counts = {};
        beadsCtx.fillStyle = '#fff';
        beadsCtx.fillRect(0, 0, beadsCanvas.width, beadsCanvas.height);

        mappedData.forEach((c, i) => {
            if (!c) return;
            const x = beadsMargin + (i % cols) * cell;
            const y = beadsMargin + Math.floor(i / cols) * cell;
            beadsCtx.fillStyle = `rgb(${c.r},${c.g},${c.b})`;
            beadsCtx.fillRect(x, y, cell, cell);
            beadsCtx.fillStyle = (c.r*0.299+c.g*0.587+c.b*0.114) > 150 ? '#000' : '#fff';
            beadsCtx.font = `${cell * 0.45}px Arial`;
            beadsCtx.textAlign = 'center'; beadsCtx.textBaseline = 'middle';
            beadsCtx.fillText(c.id, x + cell / 2, y + cell / 2);
            counts[c.uid] = (counts[c.uid] || 0) + 1;
        });

        drawGridAndNumbers(cols, rows, cell);
      	 beadsDrawNumbersRightBottom(cols,rows,cell);
        showColorStats(counts);
    }

    function drawGridAndNumbers(w, h, cell) {
        beadsCtx.strokeStyle = '#000';
        beadsCtx.lineWidth = 0.5;
        for (let i = 0; i <= w; i++) {
            beadsCtx.lineWidth = i % 5 === 0 ? 1.5 : 0.5;
            beadsCtx.beginPath();
            beadsCtx.moveTo(beadsMargin + i * cell, beadsMargin);
            beadsCtx.lineTo(beadsMargin + i * cell, beadsMargin + h * cell);
            beadsCtx.stroke();
        }
        for (let j = 0; j <= h; j++) {
            beadsCtx.lineWidth = j % 5 === 0 ? 1.5 : 0.5;
            beadsCtx.beginPath();
            beadsCtx.moveTo(beadsMargin, beadsMargin + j * cell);
            beadsCtx.lineTo(beadsMargin + w * cell, beadsMargin + j * cell);
            beadsCtx.stroke();
        }
        beadsCtx.fillStyle = '#000';
        beadsCtx.font = '10px Arial';
        beadsCtx.textAlign = 'center';
        for (let i = 0; i < w; i++) beadsCtx.fillText(i + 1, beadsMargin + i * cell + cell / 2, beadsMargin - 5);
        beadsCtx.textAlign = 'right';
        for (let j = 0; j < h; j++) beadsCtx.fillText(j + 1, beadsMargin - 5, beadsMargin + j * cell + cell / 2);
    }
// ===== 新增右下角行列号 =====
function beadsDrawNumbersRightBottom(w,h,cell){
  const fontSize = Math.max(10, cell * 0.35);
  beadsCtx.save();
  beadsCtx.fillStyle = '#000';
  beadsCtx.font = `${fontSize}px Arial`;
  beadsCtx.textAlign = 'center';
  beadsCtx.textBaseline = 'middle';

  // 列号（下）
  for (let i = 0; i < w; i++) {
    beadsCtx.fillText(
      i + 1,
      beadsMargin + i*cell + cell/2,
      beadsMargin + h*cell + beadsMargin/2
    );
  }

  // 行号（右）
  beadsCtx.textAlign = 'right';
  for (let j = 0; j < h; j++) {
    beadsCtx.fillText(
      j + 1,
      beadsMargin + w*cell + beadsMargin/2,
      beadsMargin + j*cell + cell/2
    );
  }

  beadsCtx.restore();
}
    function showColorStats(counts) {
        beadsColorsBox.innerHTML = '';
        const totalColors = Object.keys(counts).length;
        
        // --- 修改开始：获取当前选中的色卡名称并显示 ---
        const currentSetName = tableSelect.options[tableSelect.selectedIndex].text.split(' ')[0];
        document.getElementById('color-count').innerHTML =
            `🎨 颜色统计 | ${currentSetName} （共 ${totalColors} 色）`;
        // --- 修改结束 ---

        Object.entries(counts).sort((a,b)=>b[1]-a[1]).forEach(([uid, n]) => {
            const c = tableColors.find(x => x.uid === uid);
            if (!c) return;
            const div = document.createElement('div');
            div.className = 'beads-color-item';
            div.innerHTML = `<div class="beads-swatch" style="background:rgb(${c.r},${c.g},${c.b})"></div><b>${c.id}</b>: ${n}`;
            beadsColorsBox.appendChild(div);
        });
    }

    function nearestColorFromTable(px) {
        let nearest = tableColors[0], minD = Infinity;
        for (const c of tableColors) {
            const d = (px[0]-c.r)**2 + (px[1]-c.g)**2 + (px[2]-c.b)**2;
            if (d < minD) { minD = d; nearest = c; }
        }
        return nearest;
    }
    function hexToRgb(hex) { return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)]; }
    function rgbToHex(r,g,b) { return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); }

    beadsDownloadBtn.onclick = async () => {
      const canvas = await html2canvas(
          document.querySelector('.beads-export'),
          { scale: 2, useCORS: true }
      );

      const imgData = canvas.toDataURL('image/png');

      const isMobile = /iphone|ipad|android/i.test(navigator.userAgent);

      if (isMobile) {
          // 📱 手机 / iPad：打开新页面，长按保存
          const win = window.open();
          win.document.write(`
              <html>
              <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <title>保存图片</title>
                  <style>
                      body{margin:0;background:#000;text-align:center}
                      img{max-width:100%;height:auto}
                      p{color:#fff;font-size:14px}
                  </style>
              </head>
              <body>
                  <p>长按图片 → 保存到相册</p>
                  <img src="${imgData}">
              </body>
              </html>
          `);
      } else {
          // 💻 电脑端：直接下载
          const a = document.createElement('a');
          a.download = 'rwho.top拼豆图纸.png';
          a.href = imgData;
          a.click();
      }
  };

})();