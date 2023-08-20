import { member, Member, Component } from "../../core";
    
    export interface DebugHapticPointInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Intensity?: member<number>;
Index?: member<number>;
Position?: member<any>;
    }
    
    export function DebugHapticPoint(props: DebugHapticPointInput){
      const { id, persistentId, updateOrder, Enabled,
Intensity,
Index,
Position, } = props;
    
      return (
        <Component type="FrooxEngine.DebugHapticPoint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Intensity" id={typeof Intensity === "object" && "id" in Intensity ? Intensity?.id : undefined} value={typeof Intensity === "object" && "value" in Intensity ? Intensity?.value : Intensity} /* default: 0 */  isRaw={typeof Intensity === "object" && "isRaw" in Intensity && Intensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: 0 */  isRaw={typeof Index === "object" && "isRaw" in Index && Index.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof Position === "object" && "isRaw" in Position && Position.isRaw ? true : undefined} />
        </Component>
      );
    };
    