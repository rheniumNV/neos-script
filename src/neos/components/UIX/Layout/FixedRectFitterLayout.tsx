import { member, Member, Component } from "../../../core";
    
    export interface FixedRectFitterLayoutInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HorizontalAlign?: member<any>;
VerticalAlign?: member<any>;
Mode?: member<any>;
AllowShrink?: member<boolean>;
AllowGrow?: member<boolean>;
    }
    
    export function FixedRectFitterLayout(props: FixedRectFitterLayoutInput){
      const { id, persistentId, updateOrder, Enabled,
HorizontalAlign,
VerticalAlign,
Mode,
AllowShrink,
AllowGrow, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.FixedRectFitterLayout" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutHorizontalAlignment]`} name="HorizontalAlign" id={typeof HorizontalAlign === "object" && "id" in HorizontalAlign ? HorizontalAlign?.id : undefined} value={typeof HorizontalAlign === "object" && "value" in HorizontalAlign ? HorizontalAlign?.value : HorizontalAlign} /* default: Left */  isRaw={typeof HorizontalAlign === "object" && "isRaw" in HorizontalAlign && HorizontalAlign.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutVerticalAlignment]`} name="VerticalAlign" id={typeof VerticalAlign === "object" && "id" in VerticalAlign ? VerticalAlign?.id : undefined} value={typeof VerticalAlign === "object" && "value" in VerticalAlign ? VerticalAlign?.value : VerticalAlign} /* default: Top */  isRaw={typeof VerticalAlign === "object" && "isRaw" in VerticalAlign && VerticalAlign.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.FixedRectFitterLayout+FitMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: FitLongerSide */  isRaw={typeof Mode === "object" && "isRaw" in Mode && Mode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowShrink" id={typeof AllowShrink === "object" && "id" in AllowShrink ? AllowShrink?.id : undefined} value={typeof AllowShrink === "object" && "value" in AllowShrink ? AllowShrink?.value : AllowShrink} /* default: false */  isRaw={typeof AllowShrink === "object" && "isRaw" in AllowShrink && AllowShrink.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowGrow" id={typeof AllowGrow === "object" && "id" in AllowGrow ? AllowGrow?.id : undefined} value={typeof AllowGrow === "object" && "value" in AllowGrow ? AllowGrow?.value : AllowGrow} /* default: false */  isRaw={typeof AllowGrow === "object" && "isRaw" in AllowGrow && AllowGrow.isRaw ? true : undefined} />
        </Component>
      );
    };
    