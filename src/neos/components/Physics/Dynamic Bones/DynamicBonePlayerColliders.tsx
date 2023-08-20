import { member, Member, Component } from "../../../core";
    
    export interface DynamicBonePlayerCollidersInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VisualizeColliders?: member<boolean>;
DisableDefaultHeadColliders?: member<boolean>;
DisableDefaultBodyColliders?: member<boolean>;
DisableDefaultLeftHandColliders?: member<boolean>;
DisableDefaultRightHandColliders?: member<boolean>;
Colliders?: member<any>;
    }
    
    export function DynamicBonePlayerColliders(props: DynamicBonePlayerCollidersInput){
      const { id, persistentId, updateOrder, Enabled,
VisualizeColliders,
DisableDefaultHeadColliders,
DisableDefaultBodyColliders,
DisableDefaultLeftHandColliders,
DisableDefaultRightHandColliders,
Colliders, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicBonePlayerColliders" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VisualizeColliders-ID" id={typeof VisualizeColliders === "object" && "id" in VisualizeColliders ? VisualizeColliders?.id : undefined} value={typeof VisualizeColliders === "object" && "value" in VisualizeColliders ? VisualizeColliders?.value : VisualizeColliders} /* default: false */ readOnly isRaw={typeof VisualizeColliders === "object" && "isRaw" in VisualizeColliders && VisualizeColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultHeadColliders" id={typeof DisableDefaultHeadColliders === "object" && "id" in DisableDefaultHeadColliders ? DisableDefaultHeadColliders?.id : undefined} value={typeof DisableDefaultHeadColliders === "object" && "value" in DisableDefaultHeadColliders ? DisableDefaultHeadColliders?.value : DisableDefaultHeadColliders} /* default: false */  isRaw={typeof DisableDefaultHeadColliders === "object" && "isRaw" in DisableDefaultHeadColliders && DisableDefaultHeadColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultBodyColliders" id={typeof DisableDefaultBodyColliders === "object" && "id" in DisableDefaultBodyColliders ? DisableDefaultBodyColliders?.id : undefined} value={typeof DisableDefaultBodyColliders === "object" && "value" in DisableDefaultBodyColliders ? DisableDefaultBodyColliders?.value : DisableDefaultBodyColliders} /* default: false */  isRaw={typeof DisableDefaultBodyColliders === "object" && "isRaw" in DisableDefaultBodyColliders && DisableDefaultBodyColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultLeftHandColliders" id={typeof DisableDefaultLeftHandColliders === "object" && "id" in DisableDefaultLeftHandColliders ? DisableDefaultLeftHandColliders?.id : undefined} value={typeof DisableDefaultLeftHandColliders === "object" && "value" in DisableDefaultLeftHandColliders ? DisableDefaultLeftHandColliders?.value : DisableDefaultLeftHandColliders} /* default: false */  isRaw={typeof DisableDefaultLeftHandColliders === "object" && "isRaw" in DisableDefaultLeftHandColliders && DisableDefaultLeftHandColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultRightHandColliders" id={typeof DisableDefaultRightHandColliders === "object" && "id" in DisableDefaultRightHandColliders ? DisableDefaultRightHandColliders?.id : undefined} value={typeof DisableDefaultRightHandColliders === "object" && "value" in DisableDefaultRightHandColliders ? DisableDefaultRightHandColliders?.value : DisableDefaultRightHandColliders} /* default: false */  isRaw={typeof DisableDefaultRightHandColliders === "object" && "isRaw" in DisableDefaultRightHandColliders && DisableDefaultRightHandColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IDynamicBoneCollider]`} name="Colliders" id={typeof Colliders === "object" && "id" in Colliders ? Colliders?.id : undefined} value={typeof Colliders === "object" && "value" in Colliders ? Colliders?.value : Colliders} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IDynamicBoneCollider] */  isRaw={typeof Colliders === "object" && "isRaw" in Colliders && Colliders.isRaw ? true : undefined} />
        </Component>
      );
    };
    