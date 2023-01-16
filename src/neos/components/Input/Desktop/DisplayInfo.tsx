import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DisplayInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DisplayIndex?: member<number>;
Resolution?: member<any>;
Offset?: member<any>;
DPI?: member<any>;
RefreshRate?: member<any>;
Orientation?: member<any>;
IsPrimary?: member<any>;
    }
    
    export function DisplayInfo(props: DisplayInfoInput){
      const { id, persistentId, updateOrder, Enabled,
DisplayIndex,
Resolution,
Offset,
DPI,
RefreshRate,
Orientation,
IsPrimary, } = props;
    
      return (
        <Component type="FrooxEngine.DisplayInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DisplayIndex" id={typeof DisplayIndex === "object" && "id" in DisplayIndex ? DisplayIndex?.id : undefined} value={typeof DisplayIndex === "object" && "value" in DisplayIndex ? DisplayIndex?.value : DisplayIndex} /* default: 0 */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.int2]`} name="Resolution" id={typeof Resolution === "object" && "id" in Resolution ? Resolution?.id : undefined} value={typeof Resolution === "object" && "value" in Resolution ? Resolution?.value : Resolution} /* default: FrooxEngine.RawOutput`1[BaseX.int2] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.int2]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: FrooxEngine.RawOutput`1[BaseX.int2] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float2]`} name="DPI" id={typeof DPI === "object" && "id" in DPI ? DPI?.id : undefined} value={typeof DPI === "object" && "value" in DPI ? DPI?.value : DPI} /* default: FrooxEngine.RawOutput`1[BaseX.float2] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Double]`} name="RefreshRate" id={typeof RefreshRate === "object" && "id" in RefreshRate ? RefreshRate?.id : undefined} value={typeof RefreshRate === "object" && "value" in RefreshRate ? RefreshRate?.value : RefreshRate} /* default: FrooxEngine.RawOutput`1[System.Double] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.RectOrientation]`} name="Orientation" id={typeof Orientation === "object" && "id" in Orientation ? Orientation?.id : undefined} value={typeof Orientation === "object" && "value" in Orientation ? Orientation?.value : Orientation} /* default: FrooxEngine.RawOutput`1[BaseX.RectOrientation] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsPrimary" id={typeof IsPrimary === "object" && "id" in IsPrimary ? IsPrimary?.id : undefined} value={typeof IsPrimary === "object" && "value" in IsPrimary ? IsPrimary?.value : IsPrimary} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
        </Component>
      );
    };
    