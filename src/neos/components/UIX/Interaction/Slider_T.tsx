import { member, Member, Component } from "../../../core";
    
    export interface Slider_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BaseColor?: member<[number, number, number, number]>;
__legacy_NormalColor?: member<[number, number, number, number]>;
__legacy_HighlightColor?: member<[number, number, number, number]>;
__legacy_PressColor?: member<[number, number, number, number]>;
__legacy_DisabledColor?: member<[number, number, number, number]>;
__legacy_TintColorMode?: member<any>;
__legacy_ColorDrive?: member<any>;
IsPressed?: member<boolean>;
IsHovering?: member<boolean>;
Value?: member<any>;
Min?: member<any>;
Max?: member<any>;
Integers?: member<boolean>;
Power?: member<number>;
VibrationThreshold?: member<any>;
SlideDirection?: member<any>;
AnchorOffset?: member<[number, number]>;
HandleAnchorMinDrive?: member<any>;
HandleAnchorMaxDrive?: member<any>;
    }
    
    export function Slider_T(props: Slider_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
BaseColor,
__legacy_NormalColor,
__legacy_HighlightColor,
__legacy_PressColor,
__legacy_DisabledColor,
__legacy_TintColorMode,
__legacy_ColorDrive,
IsPressed,
IsHovering,
Value,
Min,
Max,
Integers,
Power,
VibrationThreshold,
SlideDirection,
AnchorOffset,
HandleAnchorMinDrive,
HandleAnchorMaxDrive, } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.Slider\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: null */  isRaw={typeof BaseColor === "object" && "isRaw" in BaseColor && BaseColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_NormalColor-ID" id={typeof __legacy_NormalColor === "object" && "id" in __legacy_NormalColor ? __legacy_NormalColor?.id : undefined} value={typeof __legacy_NormalColor === "object" && "value" in __legacy_NormalColor ? __legacy_NormalColor?.value : __legacy_NormalColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_NormalColor === "object" && "isRaw" in __legacy_NormalColor && __legacy_NormalColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_HighlightColor-ID" id={typeof __legacy_HighlightColor === "object" && "id" in __legacy_HighlightColor ? __legacy_HighlightColor?.id : undefined} value={typeof __legacy_HighlightColor === "object" && "value" in __legacy_HighlightColor ? __legacy_HighlightColor?.value : __legacy_HighlightColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_HighlightColor === "object" && "isRaw" in __legacy_HighlightColor && __legacy_HighlightColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_PressColor-ID" id={typeof __legacy_PressColor === "object" && "id" in __legacy_PressColor ? __legacy_PressColor?.id : undefined} value={typeof __legacy_PressColor === "object" && "value" in __legacy_PressColor ? __legacy_PressColor?.value : __legacy_PressColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_PressColor === "object" && "isRaw" in __legacy_PressColor && __legacy_PressColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="__legacy_DisabledColor-ID" id={typeof __legacy_DisabledColor === "object" && "id" in __legacy_DisabledColor ? __legacy_DisabledColor?.id : undefined} value={typeof __legacy_DisabledColor === "object" && "value" in __legacy_DisabledColor ? __legacy_DisabledColor?.value : __legacy_DisabledColor} /* default: [0; 0; 0; 0] */ readOnly isRaw={typeof __legacy_DisabledColor === "object" && "isRaw" in __legacy_DisabledColor && __legacy_DisabledColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.InteractionElement+ColorMode]`} name="__legacy_TintColorMode-ID" id={typeof __legacy_TintColorMode === "object" && "id" in __legacy_TintColorMode ? __legacy_TintColorMode?.id : undefined} value={typeof __legacy_TintColorMode === "object" && "value" in __legacy_TintColorMode ? __legacy_TintColorMode?.value : __legacy_TintColorMode} /* default: Explicit */ readOnly isRaw={typeof __legacy_TintColorMode === "object" && "isRaw" in __legacy_TintColorMode && __legacy_TintColorMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="__legacy_ColorDrive-ID" id={typeof __legacy_ColorDrive === "object" && "id" in __legacy_ColorDrive ? __legacy_ColorDrive?.id : undefined} value={typeof __legacy_ColorDrive === "object" && "value" in __legacy_ColorDrive ? __legacy_ColorDrive?.value : __legacy_ColorDrive} /* default: ID0 */ readOnly isRaw={typeof __legacy_ColorDrive === "object" && "isRaw" in __legacy_ColorDrive && __legacy_ColorDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsPressed" id={typeof IsPressed === "object" && "id" in IsPressed ? IsPressed?.id : undefined} value={typeof IsPressed === "object" && "value" in IsPressed ? IsPressed?.value : IsPressed} /* default: null */  isRaw={typeof IsPressed === "object" && "isRaw" in IsPressed && IsPressed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHovering" id={typeof IsHovering === "object" && "id" in IsHovering ? IsHovering?.id : undefined} value={typeof IsHovering === "object" && "value" in IsHovering ? IsHovering?.value : IsHovering} /* default: null */  isRaw={typeof IsHovering === "object" && "isRaw" in IsHovering && IsHovering.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Min" id={typeof Min === "object" && "id" in Min ? Min?.id : undefined} value={typeof Min === "object" && "value" in Min ? Min?.value : Min} /* default: null */  isRaw={typeof Min === "object" && "isRaw" in Min && Min.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Max" id={typeof Max === "object" && "id" in Max ? Max?.id : undefined} value={typeof Max === "object" && "value" in Max ? Max?.value : Max} /* default: null */  isRaw={typeof Max === "object" && "isRaw" in Max && Max.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Integers" id={typeof Integers === "object" && "id" in Integers ? Integers?.id : undefined} value={typeof Integers === "object" && "value" in Integers ? Integers?.value : Integers} /* default: null */  isRaw={typeof Integers === "object" && "isRaw" in Integers && Integers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: null */  isRaw={typeof Power === "object" && "isRaw" in Power && Power.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="VibrationThreshold" id={typeof VibrationThreshold === "object" && "id" in VibrationThreshold ? VibrationThreshold?.id : undefined} value={typeof VibrationThreshold === "object" && "value" in VibrationThreshold ? VibrationThreshold?.value : VibrationThreshold} /* default: null */  isRaw={typeof VibrationThreshold === "object" && "isRaw" in VibrationThreshold && VibrationThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.Slider\`1+Direction[${T}]]`} name="SlideDirection" id={typeof SlideDirection === "object" && "id" in SlideDirection ? SlideDirection?.id : undefined} value={typeof SlideDirection === "object" && "value" in SlideDirection ? SlideDirection?.value : SlideDirection} /* default: null */  isRaw={typeof SlideDirection === "object" && "isRaw" in SlideDirection && SlideDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AnchorOffset" id={typeof AnchorOffset === "object" && "id" in AnchorOffset ? AnchorOffset?.id : undefined} value={typeof AnchorOffset === "object" && "value" in AnchorOffset ? AnchorOffset?.value : AnchorOffset} /* default: null */  isRaw={typeof AnchorOffset === "object" && "isRaw" in AnchorOffset && AnchorOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="HandleAnchorMinDrive" id={typeof HandleAnchorMinDrive === "object" && "id" in HandleAnchorMinDrive ? HandleAnchorMinDrive?.id : undefined} value={typeof HandleAnchorMinDrive === "object" && "value" in HandleAnchorMinDrive ? HandleAnchorMinDrive?.value : HandleAnchorMinDrive} /* default: null */  isRaw={typeof HandleAnchorMinDrive === "object" && "isRaw" in HandleAnchorMinDrive && HandleAnchorMinDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="HandleAnchorMaxDrive" id={typeof HandleAnchorMaxDrive === "object" && "id" in HandleAnchorMaxDrive ? HandleAnchorMaxDrive?.id : undefined} value={typeof HandleAnchorMaxDrive === "object" && "value" in HandleAnchorMaxDrive ? HandleAnchorMaxDrive?.value : HandleAnchorMaxDrive} /* default: null */  isRaw={typeof HandleAnchorMaxDrive === "object" && "isRaw" in HandleAnchorMaxDrive && HandleAnchorMaxDrive.isRaw ? true : undefined} />
        </Component>
      );
    };
    