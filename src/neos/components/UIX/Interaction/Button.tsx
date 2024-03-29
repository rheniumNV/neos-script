import { member, Member, Component } from "../../../core";
    
    export interface ButtonInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BaseColor?: member<[number, number, number, number]>;
ColorDrivers?: member<Array<{
        ID: string;
        ColorDrive:{ID:string; Data:string;};
        TintColorMode:{ID:string; Data:string|'Explicit';};
        NormalColor:{ID:string; Data:[number, number, number, number];};
        HighlightColor:{ID:string; Data:[number, number, number, number];};
        PressColor:{ID:string; Data:[number, number, number, number];};
        DisabledColor:{ID:string; Data:[number, number, number, number];};
      }>>;
__legacy_NormalColor?: member<[number, number, number, number]>;
__legacy_HighlightColor?: member<[number, number, number, number]>;
__legacy_PressColor?: member<[number, number, number, number]>;
__legacy_DisabledColor?: member<[number, number, number, number]>;
__legacy_TintColorMode?: member<any>;
__legacy_ColorDrive?: member<any>;
IsPressed?: member<boolean>;
IsHovering?: member<boolean>;
HoverVibrate?: member<any>;
PressVibrate?: member<any>;
ClearFocusOnPress?: member<boolean>;
PassThroughHorizontalMovement?: member<boolean>;
PassThroughVerticalMovement?: member<boolean>;
RequireLockInToPress?: member<boolean>;
RequireInitialPress?: member<boolean>;
PressPoint?: member<[number, number]>;
Pressed?: member<any>;
Pressing?: member<any>;
Released?: member<any>;
HoverEnter?: member<any>;
HoverStay?: member<any>;
HoverLeave?: member<any>;
    }
    
    export function Button(props: ButtonInput){
      const { id, persistentId, updateOrder, Enabled,
BaseColor,
ColorDrivers,
__legacy_NormalColor,
__legacy_HighlightColor,
__legacy_PressColor,
__legacy_DisabledColor,
__legacy_TintColorMode,
__legacy_ColorDrive,
IsPressed,
IsHovering,
HoverVibrate,
PressVibrate,
ClearFocusOnPress,
PassThroughHorizontalMovement,
PassThroughVerticalMovement,
RequireLockInToPress,
RequireInitialPress,
PressPoint,
Pressed,
Pressing,
Released,
HoverEnter,
HoverStay,
HoverLeave, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.Button" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BaseColor === "object" && "isRaw" in BaseColor && BaseColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UIX.InteractionElement+ColorDriver]`} name="ColorDrivers" id={typeof ColorDrivers === "object" && "id" in ColorDrivers ? ColorDrivers?.id : undefined} value={typeof ColorDrivers === "object" && "value" in ColorDrivers ? ColorDrivers?.value : ColorDrivers} /* default: FrooxEngine.SyncList`1[FrooxEngine.UIX.InteractionElement+ColorDriver] */  isRaw={typeof ColorDrivers === "object" && "isRaw" in ColorDrivers && ColorDrivers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_NormalColor-ID" id={typeof __legacy_NormalColor === "object" && "id" in __legacy_NormalColor ? __legacy_NormalColor?.id : undefined} value={typeof __legacy_NormalColor === "object" && "value" in __legacy_NormalColor ? __legacy_NormalColor?.value : __legacy_NormalColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_NormalColor === "object" && "isRaw" in __legacy_NormalColor && __legacy_NormalColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_HighlightColor-ID" id={typeof __legacy_HighlightColor === "object" && "id" in __legacy_HighlightColor ? __legacy_HighlightColor?.id : undefined} value={typeof __legacy_HighlightColor === "object" && "value" in __legacy_HighlightColor ? __legacy_HighlightColor?.value : __legacy_HighlightColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_HighlightColor === "object" && "isRaw" in __legacy_HighlightColor && __legacy_HighlightColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_PressColor-ID" id={typeof __legacy_PressColor === "object" && "id" in __legacy_PressColor ? __legacy_PressColor?.id : undefined} value={typeof __legacy_PressColor === "object" && "value" in __legacy_PressColor ? __legacy_PressColor?.value : __legacy_PressColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_PressColor === "object" && "isRaw" in __legacy_PressColor && __legacy_PressColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_DisabledColor-ID" id={typeof __legacy_DisabledColor === "object" && "id" in __legacy_DisabledColor ? __legacy_DisabledColor?.id : undefined} value={typeof __legacy_DisabledColor === "object" && "value" in __legacy_DisabledColor ? __legacy_DisabledColor?.value : __legacy_DisabledColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_DisabledColor === "object" && "isRaw" in __legacy_DisabledColor && __legacy_DisabledColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.InteractionElement+ColorMode]`} name="__legacy_TintColorMode-ID" id={typeof __legacy_TintColorMode === "object" && "id" in __legacy_TintColorMode ? __legacy_TintColorMode?.id : undefined} value={typeof __legacy_TintColorMode === "object" && "value" in __legacy_TintColorMode ? __legacy_TintColorMode?.value : __legacy_TintColorMode} /* default: Explicit */ readOnly isRaw={typeof __legacy_TintColorMode === "object" && "isRaw" in __legacy_TintColorMode && __legacy_TintColorMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="__legacy_ColorDrive-ID" id={typeof __legacy_ColorDrive === "object" && "id" in __legacy_ColorDrive ? __legacy_ColorDrive?.id : undefined} value={typeof __legacy_ColorDrive === "object" && "value" in __legacy_ColorDrive ? __legacy_ColorDrive?.value : __legacy_ColorDrive} /* default: ID0 */ readOnly isRaw={typeof __legacy_ColorDrive === "object" && "isRaw" in __legacy_ColorDrive && __legacy_ColorDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsPressed" id={typeof IsPressed === "object" && "id" in IsPressed ? IsPressed?.id : undefined} value={typeof IsPressed === "object" && "value" in IsPressed ? IsPressed?.value : IsPressed} /* default: false */  isRaw={typeof IsPressed === "object" && "isRaw" in IsPressed && IsPressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHovering" id={typeof IsHovering === "object" && "id" in IsHovering ? IsHovering?.id : undefined} value={typeof IsHovering === "object" && "value" in IsHovering ? IsHovering?.value : IsHovering} /* default: false */  isRaw={typeof IsHovering === "object" && "isRaw" in IsHovering && IsHovering.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="HoverVibrate" id={typeof HoverVibrate === "object" && "id" in HoverVibrate ? HoverVibrate?.id : undefined} value={typeof HoverVibrate === "object" && "value" in HoverVibrate ? HoverVibrate?.value : HoverVibrate} /* default: None */  isRaw={typeof HoverVibrate === "object" && "isRaw" in HoverVibrate && HoverVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="PressVibrate" id={typeof PressVibrate === "object" && "id" in PressVibrate ? PressVibrate?.id : undefined} value={typeof PressVibrate === "object" && "value" in PressVibrate ? PressVibrate?.value : PressVibrate} /* default: None */  isRaw={typeof PressVibrate === "object" && "isRaw" in PressVibrate && PressVibrate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ClearFocusOnPress" id={typeof ClearFocusOnPress === "object" && "id" in ClearFocusOnPress ? ClearFocusOnPress?.id : undefined} value={typeof ClearFocusOnPress === "object" && "value" in ClearFocusOnPress ? ClearFocusOnPress?.value : ClearFocusOnPress} /* default: false */  isRaw={typeof ClearFocusOnPress === "object" && "isRaw" in ClearFocusOnPress && ClearFocusOnPress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PassThroughHorizontalMovement" id={typeof PassThroughHorizontalMovement === "object" && "id" in PassThroughHorizontalMovement ? PassThroughHorizontalMovement?.id : undefined} value={typeof PassThroughHorizontalMovement === "object" && "value" in PassThroughHorizontalMovement ? PassThroughHorizontalMovement?.value : PassThroughHorizontalMovement} /* default: false */  isRaw={typeof PassThroughHorizontalMovement === "object" && "isRaw" in PassThroughHorizontalMovement && PassThroughHorizontalMovement.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PassThroughVerticalMovement" id={typeof PassThroughVerticalMovement === "object" && "id" in PassThroughVerticalMovement ? PassThroughVerticalMovement?.id : undefined} value={typeof PassThroughVerticalMovement === "object" && "value" in PassThroughVerticalMovement ? PassThroughVerticalMovement?.value : PassThroughVerticalMovement} /* default: false */  isRaw={typeof PassThroughVerticalMovement === "object" && "isRaw" in PassThroughVerticalMovement && PassThroughVerticalMovement.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RequireLockInToPress" id={typeof RequireLockInToPress === "object" && "id" in RequireLockInToPress ? RequireLockInToPress?.id : undefined} value={typeof RequireLockInToPress === "object" && "value" in RequireLockInToPress ? RequireLockInToPress?.value : RequireLockInToPress} /* default: false */  isRaw={typeof RequireLockInToPress === "object" && "isRaw" in RequireLockInToPress && RequireLockInToPress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RequireInitialPress" id={typeof RequireInitialPress === "object" && "id" in RequireInitialPress ? RequireInitialPress?.id : undefined} value={typeof RequireInitialPress === "object" && "value" in RequireInitialPress ? RequireInitialPress?.value : RequireInitialPress} /* default: false */  isRaw={typeof RequireInitialPress === "object" && "isRaw" in RequireInitialPress && RequireInitialPress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PressPoint" id={typeof PressPoint === "object" && "id" in PressPoint ? PressPoint?.id : undefined} value={typeof PressPoint === "object" && "value" in PressPoint ? PressPoint?.value : PressPoint} /* default: [0; 0] */  isRaw={typeof PressPoint === "object" && "isRaw" in PressPoint && PressPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressed" id={typeof Pressed === "object" && "id" in Pressed ? Pressed?.id : undefined} value={typeof Pressed === "object" && "value" in Pressed ? Pressed?.value : Pressed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressed === "object" && "isRaw" in Pressed && Pressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Pressing" id={typeof Pressing === "object" && "id" in Pressing ? Pressing?.id : undefined} value={typeof Pressing === "object" && "value" in Pressing ? Pressing?.value : Pressing} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pressing === "object" && "isRaw" in Pressing && Pressing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="Released" id={typeof Released === "object" && "id" in Released ? Released?.id : undefined} value={typeof Released === "object" && "value" in Released ? Released?.value : Released} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Released === "object" && "isRaw" in Released && Released.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="HoverEnter" id={typeof HoverEnter === "object" && "id" in HoverEnter ? HoverEnter?.id : undefined} value={typeof HoverEnter === "object" && "value" in HoverEnter ? HoverEnter?.value : HoverEnter} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof HoverEnter === "object" && "isRaw" in HoverEnter && HoverEnter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="HoverStay" id={typeof HoverStay === "object" && "id" in HoverStay ? HoverStay?.id : undefined} value={typeof HoverStay === "object" && "value" in HoverStay ? HoverStay?.value : HoverStay} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof HoverStay === "object" && "isRaw" in HoverStay && HoverStay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ButtonEventHandler]`} name="HoverLeave" id={typeof HoverLeave === "object" && "id" in HoverLeave ? HoverLeave?.id : undefined} value={typeof HoverLeave === "object" && "value" in HoverLeave ? HoverLeave?.value : HoverLeave} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof HoverLeave === "object" && "isRaw" in HoverLeave && HoverLeave.isRaw ? true : undefined} />
        </Component>
      );
    };
    