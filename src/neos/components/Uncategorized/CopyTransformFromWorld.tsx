import { member, Member, Component } from "../../core";
    
    export interface CopyTransformFromWorldInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CopyPosition?: member<boolean>;
CopyRotation?: member<boolean>;
CopyScale?: member<boolean>;
    }
    
    export function CopyTransformFromWorld(props: CopyTransformFromWorldInput){
      const { id, persistentId, updateOrder, Enabled,
CopyPosition,
CopyRotation,
CopyScale, } = props;
    
      return (
        <Component type="FrooxEngine.CopyTransformFromWorld" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CopyPosition" id={typeof CopyPosition === "object" && "id" in CopyPosition ? CopyPosition?.id : undefined} value={typeof CopyPosition === "object" && "value" in CopyPosition ? CopyPosition?.value : CopyPosition} /* default: false */  isRaw={typeof CopyPosition === "object" && "isRaw" in CopyPosition && CopyPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CopyRotation" id={typeof CopyRotation === "object" && "id" in CopyRotation ? CopyRotation?.id : undefined} value={typeof CopyRotation === "object" && "value" in CopyRotation ? CopyRotation?.value : CopyRotation} /* default: false */  isRaw={typeof CopyRotation === "object" && "isRaw" in CopyRotation && CopyRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CopyScale" id={typeof CopyScale === "object" && "id" in CopyScale ? CopyScale?.id : undefined} value={typeof CopyScale === "object" && "value" in CopyScale ? CopyScale?.value : CopyScale} /* default: false */  isRaw={typeof CopyScale === "object" && "isRaw" in CopyScale && CopyScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    