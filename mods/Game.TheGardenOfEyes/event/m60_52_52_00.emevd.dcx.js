// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.3.1
// ==/EMEVD==

Event(200, Default, function() {
    InitializeEvent(0, 71159350, 0);
    InitializeEvent(0, 71159351, 0);
    InitializeEvent(0, 1052520800, 0);
    InitializeEvent(0, 1052522810, 0);
    InitializeEvent(0, 1052522811, 0);
    InitializeEvent(0, 1052522812, 0);
    InitializeEvent(0, 1052522815, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0);
    InitializeEvent(0, 1052522816, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0);
    InitializeEvent(0, 1052522817, 0);
    InitializeEvent(0, 1052522849, 0);
});

Event(1052520800, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1252520800);
    IfCharacterHPValue(MAIN, 1052520800, LessOrEqual, 0, Equal, 1);
    WaitFixedTimeSeconds(4);
    PlaySE(1052520800, SoundType.SFX, 888880000);
    IfCharacterDeadalive(MAIN, 1052520800, DeathState.Dead, Equal, 1);
    WaitFixedTimeSeconds(4);
    HandleBossDefeatAndDisplayBanner(1052520800, TextBannerType.LegendFelled);
    SetEventFlag(TargetEventFlagType.EventFlag, 1252520800, ON);
    SetEventFlag(TargetEventFlagType.EventFlag, 9131, ON);
    SkipIfPlayerIsInWorldType(1, WorldType.OtherWorld);
    SetEventFlag(TargetEventFlagType.EventFlag, 61131, ON);
});

Event(1052522810, Restart, function() {
    GotoIfEventFlag(Label.Label0, OFF, TargetEventFlagType.EventFlag, 1252520800);
    ChangeCharacterEnableState(1052525800, Disabled);
    ChangeCharacterCollisionState(1052525800, Disabled);
    ForceCharacterDeath(1052525800, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(1052520800, Disabled);
    ChangeCharacterCollisionState(1052520800, Disabled);
    SetCharacterAIState(1052520800, Disabled);
    SetCharacterAIState(1052520801, Disabled);
    SetLockOnPoint(1052520800, 221, Disabled);
    SetLockOnPoint(1052520800, 222, Disabled);
    SetLockOnPoint(1052520800, 225, Disabled);
    SetLockOnPoint(1052520800, 226, Disabled);
    SetLockOnPoint(1052520800, 227, Disabled);
    SetLockOnPoint(1052520801, 221, Disabled);
    SetLockOnPoint(1052520801, 223, Disabled);
    SetLockOnPoint(1052520801, 224, Disabled);
    SetLockOnPoint(1052520801, 225, Disabled);
    SetLockOnPoint(1052520801, 226, Disabled);
    SetLockOnPoint(1052520801, 227, Disabled);
    GotoIfEventFlag(Label.Label1, ON, TargetEventFlagType.EventFlag, 1252520801);
    SkipIfPlayerIsInWorldType(1, WorldType.OtherWorld);
    SetEventFlag(TargetEventFlagType.EventFlag, 1252520804, OFF);
    IfDamageType(OR_01, 1052520801, 0, DamageType.Unspecified);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 1052520801, 10000, 120, 1);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 1052520801, 1052530700, 120, 1);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 1052520801, 1052530701, 120, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(TargetEventFlagType.EventFlag, 1252520801, ON);
    SkipIfPlayerIsInWorldType(1, WorldType.OtherWorld);
    SendInvadingPhantomsHome(0);
    GotoUnconditionally(Label.Label2);
    Label1();
    IfDamageType(OR_01, 1052520801, 0, DamageType.Unspecified);
    IfCharacterHasStateInfo(OR_01, 1052520801, 436, true, Equal, 1);
    IfCharacterHasStateInfo(OR_01, 1052520801, 2, true, Equal, 1);
    IfCharacterHasStateInfo(OR_01, 1052520801, 5, true, Equal, 1);
    IfCharacterHasStateInfo(OR_01, 1052520801, 6, true, Equal, 1);
    IfCharacterHasStateInfo(OR_01, 1052520801, 260, true, Equal, 1);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 1052520801, 10000, 120, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 1052532800, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 1052532801, 1);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1252522805);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    Label2();
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1252520804, ON);
    CreateReferredDamagePair(1052520801, 1052520800);
    SetCharacterAIState(1052520801, Enabled);
    DisplayBossHealthBar(Enabled, 1052520800, 0, 904760000);
    SetCharacterHPBarDisplay(1052520801, Disabled);
    SetNetworkUpdateRate(1052520801, true, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(1052522811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1252520800);
    IfCharacterHPRatio(MAIN, 1052520801, LessOrEqual, 0, Equal, 1);
    SetCharacterTeamType(1052520801, TeamType.Object);
    SkipIfPlayerIsInWorldType(2, WorldType.OtherWorld);
    SkipIfCharacterHasSpEffect(1, 10000, 6900001, false, Equal, 1);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(60521010, CutscenePlayMode.Skippable, 1052522810, 60525200, 10000, 65001, false, false);
    SkipIfCharacterHasSpEffect(1, 10000, 6900001, true, Equal, 1);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(60520010, CutscenePlayMode.Skippable, 1052522810, 60525200, 10000, 65001, false, false);
    SkipUnconditionally(1);
    SkipIfCharacterHasSpEffect(1, 10000, 6900001, false, Equal, 1);
    PlayCutsceneToPlayer(60521010, CutscenePlayMode.Skippable, 10000);
    SkipIfCharacterHasSpEffect(1, 10000, 6900001, true, Equal, 1);
    PlayCutsceneToPlayer(60520010, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeRealFrames(1);
    SkipIfPlayerIsInWorldType(1, WorldType.OtherWorld);
    SetCameraAngle(-32.53, -43.56);
    ChangeCharacterEnableState(1052520800, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(1052520800, 20000, false, false, false, Equal, 1);
    WarpCharacterAndCopyFloor(1052520800, TargetEntityType.Area, 1052522815, -1, 1052520801);
    SetCharacterGravity(1052520800, Enabled);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(1052520801, Disabled);
    ChangeCharacterCollisionState(1052520801, Disabled);
    WaitFixedTimeFrames(1);
    ChangeCharacterCollisionState(1052520800, Enabled);
    SetEventFlag(TargetEventFlagType.EventFlag, 1252522802, ON);
});

Event(1052522812, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1252520800);
    IfDamageType(OR_01, 1052520800, 0, DamageType.Unspecified);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 1052520800, 10000, 70, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1252522802);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterAIState(1052520800, Enabled);
    SetNetworkUpdateRate(1052520800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeFrames(1);
    SetSpEffect(1052520800, 12780);
});

Event(1052522815, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1252520800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterBackreadStatus(AND_01, 1052520801, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    CreateNPCPart(1052520801, 9, NPCPartType.Part9, X0_4, 1, 1.5, false, false);
    GotoIfEventFlag(Label.Label18, ON, TargetEventFlagType.EventFlag, 1052522828);
    GotoIfEventFlag(Label.Label17, ON, TargetEventFlagType.EventFlag, 1052522827);
    GotoIfEventFlag(Label.Label16, ON, TargetEventFlagType.EventFlag, 1052522826);
    GotoIfEventFlag(Label.Label15, ON, TargetEventFlagType.EventFlag, 1052522825);
    GotoIfEventFlag(Label.Label14, ON, TargetEventFlagType.EventFlag, 1052522824);
    GotoIfEventFlag(Label.Label13, ON, TargetEventFlagType.EventFlag, 1052522823);
    GotoIfEventFlag(Label.Label12, ON, TargetEventFlagType.EventFlag, 1052522822);
    GotoIfEventFlag(Label.Label11, ON, TargetEventFlagType.EventFlag, 1052522821);
    GotoIfEventFlag(Label.Label10, ON, TargetEventFlagType.EventFlag, 1052522820);
    IfNPCPartHP(OR_10, 1052520801, 9, X4_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_10);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522820, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label10();
    SetSpEffect(1052520801, 12730);
    IfNPCPartHP(OR_11, 1052520801, 9, X8_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_11);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522820, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label11();
    SetSpEffect(1052520801, 12731);
    IfNPCPartHP(OR_12, 1052520801, 9, X12_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_12);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522822, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label12();
    SetSpEffect(1052520801, 12732);
    IfNPCPartHP(OR_13, 1052520801, 9, X16_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_13);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522823, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label13();
    SetSpEffect(1052520801, 12733);
    IfNPCPartHP(OR_14, 1052520801, 9, X20_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_14);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522824, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label14();
    SetSpEffect(1052520801, 12734);
    IfNPCPartHP(OR_15, 1052520801, 9, X24_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_15);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522825, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label15();
    SetSpEffect(1052520801, 12735);
    IfNPCPartHP(AND_10, 1052520801, 9, X28_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, AND_10);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522826, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label16();
    SetSpEffect(1052520801, 12736);
    IfNPCPartHP(AND_11, 1052520801, 9, X32_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, AND_11);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522827, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label17();
    SetSpEffect(1052520801, 12737);
    IfNPCPartHP(AND_12, 1052520801, 9, X36_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, AND_12);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522828, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 110, 647605);
    Label18();
    SetSpEffect(1052520801, 12738);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 0, ON);
    EndIfCharacterHasSpEffect(EventEndType.End, 1052520801, 12752, true, Equal, 1);
    SetSpEffect(1052520801, 12750);
});

Event(1052522816, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1252520800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterBackreadStatus(AND_01, 1052520801, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    CreateNPCPart(1052520801, 8, NPCPartType.Part8, X0_4, 1, 1.5, false, false);
    GotoIfEventFlag(Label.Label18, ON, TargetEventFlagType.EventFlag, 1052522838);
    GotoIfEventFlag(Label.Label17, ON, TargetEventFlagType.EventFlag, 1052522837);
    GotoIfEventFlag(Label.Label16, ON, TargetEventFlagType.EventFlag, 1052522836);
    GotoIfEventFlag(Label.Label15, ON, TargetEventFlagType.EventFlag, 1052522835);
    GotoIfEventFlag(Label.Label14, ON, TargetEventFlagType.EventFlag, 1052522834);
    GotoIfEventFlag(Label.Label13, ON, TargetEventFlagType.EventFlag, 1052522833);
    GotoIfEventFlag(Label.Label12, ON, TargetEventFlagType.EventFlag, 1052522832);
    GotoIfEventFlag(Label.Label11, ON, TargetEventFlagType.EventFlag, 1052522831);
    GotoIfEventFlag(Label.Label10, ON, TargetEventFlagType.EventFlag, 1052522830);
    IfNPCPartHP(OR_10, 1052520801, 8, X4_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_10);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522830, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label10();
    SetSpEffect(1052520801, 12740);
    IfNPCPartHP(OR_11, 1052520801, 8, X8_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_11);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522831, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label11();
    SetSpEffect(1052520801, 12741);
    IfNPCPartHP(OR_12, 1052520801, 8, X12_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_12);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522832, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label12();
    SetSpEffect(1052520801, 12742);
    IfNPCPartHP(OR_13, 1052520801, 8, X16_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_13);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522833, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label13();
    SetSpEffect(1052520801, 12743);
    IfNPCPartHP(OR_14, 1052520801, 8, X20_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_14);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522834, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label14();
    SetSpEffect(1052520801, 12744);
    IfNPCPartHP(OR_15, 1052520801, 8, X24_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, OR_15);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522835, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label15();
    SetSpEffect(1052520801, 12745);
    IfNPCPartHP(AND_10, 1052520801, 8, X28_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, AND_10);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522836, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label16();
    SetSpEffect(1052520801, 12746);
    IfNPCPartHP(AND_11, 1052520801, 8, X32_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, AND_11);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522837, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label17();
    SetSpEffect(1052520801, 12747);
    IfNPCPartHP(AND_12, 1052520801, 8, X36_4, LessOrEqual);
    IfConditionGroup(MAIN, PASS, AND_12);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventFlag, 1052522838, ON);
    SpawnOneshotSFX(TargetEntityType.Character, 1052520801, 111, 647605);
    Label18();
    SetSpEffect(1052520801, 12748);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 0, ON);
    EndIfCharacterHasSpEffect(EventEndType.End, 1052520801, 12752, true, Equal, 1);
    SetSpEffect(1052520801, 12750);
});

Event(1052522817, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1252520800);
    IfCharacterHasSpEffect(OR_01, 1052520801, 12752, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNPCPartHP(1052520801, 8, 0, false);
    SetNPCPartHP(1052520801, 9, 0, false);
    WaitFixedTimeFrames(1);
    CreateNPCPart(1052520801, 8, NPCPartType.Part8, 99999, 1, 2, false, false);
    CreateNPCPart(1052520801, 9, NPCPartType.Part9, 99999, 1, 2, false, false);
});

Event(1052522849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1252520800, 1052531800, 1052532800, 1252522805, 1052525800, 10000, 1252520801, 0);
    InitializeCommonEvent(0, 9005800, 1252520800, 1052531801, 1052532801, 1252522805, 1052525800, 10000, 1252520801, 0);
    InitializeCommonEvent(0, 9005801, 1252520800, 1052531800, 1052532800, 1252522805, 1252522806, 10000);
    InitializeCommonEvent(0, 9005801, 1252520800, 1052531801, 1052532801, 1252522805, 1252522806, 10000);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052531800, 9, 1252520804);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052531801, 10, 1252520804);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052521800, 0, 1252520804);
    InitializeCommonEvent(0, 9005811, 1252520800, 1052531802, 0, 1252520804);
    InitializeCommonEvent(0, 9005822, 1252520800, 476000, 1252522805, 1252522806, 0, 1252522802, 1, 1);
});

Event(71159350, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 710990);
    SetEventFlag(TargetEventFlagType.EventFlag, 710991, ON);
    ChangeCharacterDispmask(1052520801, 31, ON);
    SetSpEffect(1052520801, 6900000);
    ChangeCharacterDispmask(1052520800, 31, ON);
    SetSpEffect(1052520800, 6900000);  
    EndUnconditionally(EventEndType.Restart);
});

Event(71159351, Default, function() {
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 710990);
    ChangeCharacterDispmask(1052520801, 31, OFF);
    ClearSpEffect(1052520801, 6900000);
    ChangeCharacterDispmask(1052520800, 31, OFF);
    ClearSpEffect(1052520800, 6900000);    
    EndUnconditionally(EventEndType.Restart);
});


