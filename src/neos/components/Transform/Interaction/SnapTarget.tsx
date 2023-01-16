import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SnapTargetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DirectSnapOnly?: member<boolean>;
MaximumSnapDistance?: member<number>;
MaximumAngleDeviation?: member<number>;
AnimationTime?: member<number>;
AutoSnap?: member<boolean>;
_snapColliderRadius?: member<any>;
proxySphere?: member<any>;
    }
    
    export function SnapTarget(props: SnapTargetInput){
      const { id, persistentId, updateOrder, Enabled,
DirectSnapOnly,
MaximumSnapDistance,
MaximumAngleDeviation,
AnimationTime,
AutoSnap,
_snapColliderRadius,
proxySphere, } = props;
    
      return (
        <Component type="FrooxEngine.SnapTarget" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DirectSnapOnly" id={typeof DirectSnapOnly === "object" && "id" in DirectSnapOnly ? DirectSnapOnly?.id : undefined} value={typeof DirectSnapOnly === "object" && "value" in DirectSnapOnly ? DirectSnapOnly?.value : DirectSnapOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumSnapDistance" id={typeof MaximumSnapDistance === "object" && "id" in MaximumSnapDistance ? MaximumSnapDistance?.id : undefined} value={typeof MaximumSnapDistance === "object" && "value" in MaximumSnapDistance ? MaximumSnapDistance?.value : MaximumSnapDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumAngleDeviation" id={typeof MaximumAngleDeviation === "object" && "id" in MaximumAngleDeviation ? MaximumAngleDeviation?.id : undefined} value={typeof MaximumAngleDeviation === "object" && "value" in MaximumAngleDeviation ? MaximumAngleDeviation?.value : MaximumAngleDeviation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnimationTime" id={typeof AnimationTime === "object" && "id" in AnimationTime ? AnimationTime?.id : undefined} value={typeof AnimationTime === "object" && "value" in AnimationTime ? AnimationTime?.value : AnimationTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoSnap" id={typeof AutoSnap === "object" && "id" in AutoSnap ? AutoSnap?.id : undefined} value={typeof AutoSnap === "object" && "value" in AutoSnap ? AutoSnap?.value : AutoSnap} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_snapColliderRadius" id={typeof _snapColliderRadius === "object" && "id" in _snapColliderRadius ? _snapColliderRadius?.id : undefined} value={typeof _snapColliderRadius === "object" && "value" in _snapColliderRadius ? _snapColliderRadius?.value : _snapColliderRadius} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SphereCollider]`} name="proxySphere" id={typeof proxySphere === "object" && "id" in proxySphere ? proxySphere?.id : undefined} value={typeof proxySphere === "object" && "value" in proxySphere ? proxySphere?.value : proxySphere} /* default: ID0 */  />
        </Component>
      );
    };
    