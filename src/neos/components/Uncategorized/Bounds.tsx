import { member, Member, Component } from "../../core";
    
    export interface BoundsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Available?: member<boolean>;
LocalBounds?: member<any>;
    }
    
    export function Bounds(props: BoundsInput){
      const { id, persistentId, updateOrder, Enabled,
Available,
LocalBounds, } = props;
    
      return (
        <Component type="FrooxEngine.Bounds" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Available" id={typeof Available === "object" && "id" in Available ? Available?.id : undefined} value={typeof Available === "object" && "value" in Available ? Available?.value : Available} /* default: false */  isRaw={typeof Available === "object" && "isRaw" in Available && Available.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="LocalBounds" id={typeof LocalBounds === "object" && "id" in LocalBounds ? LocalBounds?.id : undefined} value={typeof LocalBounds === "object" && "value" in LocalBounds ? LocalBounds?.value : LocalBounds} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof LocalBounds === "object" && "isRaw" in LocalBounds && LocalBounds.isRaw ? true : undefined} />
        </Component>
      );
    };
    