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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutHorizontalAlignment]`} name="HorizontalAlign" id={typeof HorizontalAlign === "object" && "id" in HorizontalAlign ? HorizontalAlign?.id : undefined} value={typeof HorizontalAlign === "object" && "value" in HorizontalAlign ? HorizontalAlign?.value : HorizontalAlign} /* default: Left */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.LayoutVerticalAlignment]`} name="VerticalAlign" id={typeof VerticalAlign === "object" && "id" in VerticalAlign ? VerticalAlign?.id : undefined} value={typeof VerticalAlign === "object" && "value" in VerticalAlign ? VerticalAlign?.value : VerticalAlign} /* default: Top */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.FixedRectFitterLayout+FitMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: FitLongerSide */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowShrink" id={typeof AllowShrink === "object" && "id" in AllowShrink ? AllowShrink?.id : undefined} value={typeof AllowShrink === "object" && "value" in AllowShrink ? AllowShrink?.value : AllowShrink} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowGrow" id={typeof AllowGrow === "object" && "id" in AllowGrow ? AllowGrow?.id : undefined} value={typeof AllowGrow === "object" && "value" in AllowGrow ? AllowGrow?.value : AllowGrow} /* default: false */  />
        </Component>
      );
    };
    