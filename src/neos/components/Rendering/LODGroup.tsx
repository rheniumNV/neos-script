import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LODGroup+LOD]`} name="LODs" id={typeof LODs === "object" && "id" in LODs ? LODs?.id : undefined} value={typeof LODs === "object" && "value" in LODs ? LODs?.value : LODs} /* default: FrooxEngine.SyncList`1[FrooxEngine.LODGroup+LOD] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CrossFade" id={typeof CrossFade === "object" && "id" in CrossFade ? CrossFade?.id : undefined} value={typeof CrossFade === "object" && "value" in CrossFade ? CrossFade?.value : CrossFade} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AnimateCrossFading" id={typeof AnimateCrossFading === "object" && "id" in AnimateCrossFading ? AnimateCrossFading?.id : undefined} value={typeof AnimateCrossFading === "object" && "value" in AnimateCrossFading ? AnimateCrossFading?.value : AnimateCrossFading} /* default: false */  />
        </Component>
      );
    };
    