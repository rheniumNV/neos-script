import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
    }
    
    export function DynamicBonePlayerColliders(props: DynamicBonePlayerCollidersInput){
      const { id, persistentId, updateOrder, Enabled,
VisualizeColliders,
DisableDefaultHeadColliders,
DisableDefaultBodyColliders,
DisableDefaultLeftHandColliders,
DisableDefaultRightHandColliders, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicBonePlayerColliders" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VisualizeColliders-ID" id={typeof VisualizeColliders === "object" && "id" in VisualizeColliders ? VisualizeColliders?.id : undefined} value={typeof VisualizeColliders === "object" && "value" in VisualizeColliders ? VisualizeColliders?.value : VisualizeColliders} /* default: false */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultHeadColliders" id={typeof DisableDefaultHeadColliders === "object" && "id" in DisableDefaultHeadColliders ? DisableDefaultHeadColliders?.id : undefined} value={typeof DisableDefaultHeadColliders === "object" && "value" in DisableDefaultHeadColliders ? DisableDefaultHeadColliders?.value : DisableDefaultHeadColliders} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultBodyColliders" id={typeof DisableDefaultBodyColliders === "object" && "id" in DisableDefaultBodyColliders ? DisableDefaultBodyColliders?.id : undefined} value={typeof DisableDefaultBodyColliders === "object" && "value" in DisableDefaultBodyColliders ? DisableDefaultBodyColliders?.value : DisableDefaultBodyColliders} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultLeftHandColliders" id={typeof DisableDefaultLeftHandColliders === "object" && "id" in DisableDefaultLeftHandColliders ? DisableDefaultLeftHandColliders?.id : undefined} value={typeof DisableDefaultLeftHandColliders === "object" && "value" in DisableDefaultLeftHandColliders ? DisableDefaultLeftHandColliders?.value : DisableDefaultLeftHandColliders} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableDefaultRightHandColliders" id={typeof DisableDefaultRightHandColliders === "object" && "id" in DisableDefaultRightHandColliders ? DisableDefaultRightHandColliders?.id : undefined} value={typeof DisableDefaultRightHandColliders === "object" && "value" in DisableDefaultRightHandColliders ? DisableDefaultRightHandColliders?.value : DisableDefaultRightHandColliders} /* default: false */  />
        </Component>
      );
    };
    