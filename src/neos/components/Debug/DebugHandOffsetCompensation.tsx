import { member, Member, Component } from "../../core";
    
    export interface DebugHandOffsetCompensationInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LeftHandPosition?: member<[number, number, number]>;
LeftHandRotation?: member<any>;
RightHandPosition?: member<[number, number, number]>;
RightHandRotation?: member<any>;
    }
    
    export function DebugHandOffsetCompensation(props: DebugHandOffsetCompensationInput){
      const { id, persistentId, updateOrder, Enabled,
LeftHandPosition,
LeftHandRotation,
RightHandPosition,
RightHandRotation, } = props;
    
      return (
        <Component type="FrooxEngine.DebugHandOffsetCompensation" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LeftHandPosition" id={typeof LeftHandPosition === "object" && "id" in LeftHandPosition ? LeftHandPosition?.id : undefined} value={typeof LeftHandPosition === "object" && "value" in LeftHandPosition ? LeftHandPosition?.value : LeftHandPosition} /* default: [0; 0; 0] */  isRaw={typeof LeftHandPosition === "object" && "isRaw" in LeftHandPosition && LeftHandPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="LeftHandRotation" id={typeof LeftHandRotation === "object" && "id" in LeftHandRotation ? LeftHandRotation?.id : undefined} value={typeof LeftHandRotation === "object" && "value" in LeftHandRotation ? LeftHandRotation?.value : LeftHandRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof LeftHandRotation === "object" && "isRaw" in LeftHandRotation && LeftHandRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="RightHandPosition" id={typeof RightHandPosition === "object" && "id" in RightHandPosition ? RightHandPosition?.id : undefined} value={typeof RightHandPosition === "object" && "value" in RightHandPosition ? RightHandPosition?.value : RightHandPosition} /* default: [0; 0; 0] */  isRaw={typeof RightHandPosition === "object" && "isRaw" in RightHandPosition && RightHandPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RightHandRotation" id={typeof RightHandRotation === "object" && "id" in RightHandRotation ? RightHandRotation?.id : undefined} value={typeof RightHandRotation === "object" && "value" in RightHandRotation ? RightHandRotation?.value : RightHandRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof RightHandRotation === "object" && "isRaw" in RightHandRotation && RightHandRotation.isRaw ? true : undefined} />
        </Component>
      );
    };
    