import { member, Member, Component } from "../../core";
    
    export interface LODGroupInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LODs?: member<any>;
CrossFade?: member<boolean>;
AnimateCrossFading?: member<boolean>;
    }
    
    export function LODGroup(props: LODGroupInput){
      const { id, persistentId, updateOrder, Enabled,
LODs,
CrossFade,
AnimateCrossFading, } = props;
    
      return (
        <Component type="FrooxEngine.LODGroup" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LODGroup+LOD]`} name="LODs" id={typeof LODs === "object" && "id" in LODs ? LODs?.id : undefined} value={typeof LODs === "object" && "value" in LODs ? LODs?.value : LODs} /* default: FrooxEngine.SyncList`1[FrooxEngine.LODGroup+LOD] */  isRaw={typeof LODs === "object" && "isRaw" in LODs && LODs.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CrossFade" id={typeof CrossFade === "object" && "id" in CrossFade ? CrossFade?.id : undefined} value={typeof CrossFade === "object" && "value" in CrossFade ? CrossFade?.value : CrossFade} /* default: false */  isRaw={typeof CrossFade === "object" && "isRaw" in CrossFade && CrossFade.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AnimateCrossFading" id={typeof AnimateCrossFading === "object" && "id" in AnimateCrossFading ? AnimateCrossFading?.id : undefined} value={typeof AnimateCrossFading === "object" && "value" in AnimateCrossFading ? AnimateCrossFading?.value : AnimateCrossFading} /* default: false */  isRaw={typeof AnimateCrossFading === "object" && "isRaw" in AnimateCrossFading && AnimateCrossFading.isRaw ? true : undefined} />
        </Component>
      );
    };
    