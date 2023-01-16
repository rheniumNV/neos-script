import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RectTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AnchorMin?: member<[number, number]>;
AnchorMax?: member<[number, number]>;
OffsetMin?: member<[number, number]>;
OffsetMax?: member<[number, number]>;
Pivot?: member<[number, number]>;
    }
    
    export function RectTransform(props: RectTransformInput){
      const { id, persistentId, updateOrder, Enabled,
AnchorMin,
AnchorMax,
OffsetMin,
OffsetMax,
Pivot, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.RectTransform" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AnchorMin" id={typeof AnchorMin === "object" && "id" in AnchorMin ? AnchorMin?.id : undefined} value={typeof AnchorMin === "object" && "value" in AnchorMin ? AnchorMin?.value : AnchorMin} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AnchorMax" id={typeof AnchorMax === "object" && "id" in AnchorMax ? AnchorMax?.id : undefined} value={typeof AnchorMax === "object" && "value" in AnchorMax ? AnchorMax?.value : AnchorMax} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetMin" id={typeof OffsetMin === "object" && "id" in OffsetMin ? OffsetMin?.id : undefined} value={typeof OffsetMin === "object" && "value" in OffsetMin ? OffsetMin?.value : OffsetMin} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetMax" id={typeof OffsetMax === "object" && "id" in OffsetMax ? OffsetMax?.id : undefined} value={typeof OffsetMax === "object" && "value" in OffsetMax ? OffsetMax?.value : OffsetMax} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Pivot" id={typeof Pivot === "object" && "id" in Pivot ? Pivot?.id : undefined} value={typeof Pivot === "object" && "value" in Pivot ? Pivot?.value : Pivot} /* default: [0; 0] */  />
        </Component>
      );
    };
    