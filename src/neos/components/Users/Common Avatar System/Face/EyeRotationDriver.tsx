import { member, Member, Component } from "../../../../core";
    
    export interface EyeRotationDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
EyeManager?: member<any>;
EyeMotionScale?: member<number>;
EyeMotionExp?: member<number>;
MaxSwing?: member<number>;
Eyes?: member<any>;
    }
    
    export function EyeRotationDriver(props: EyeRotationDriverInput){
      const { id, persistentId, updateOrder, Enabled,
EyeManager,
EyeMotionScale,
EyeMotionExp,
MaxSwing,
Eyes, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.EyeRotationDriver" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.EyeManager]`} name="EyeManager" id={typeof EyeManager === "object" && "id" in EyeManager ? EyeManager?.id : undefined} value={typeof EyeManager === "object" && "value" in EyeManager ? EyeManager?.value : EyeManager} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EyeMotionScale" id={typeof EyeMotionScale === "object" && "id" in EyeMotionScale ? EyeMotionScale?.id : undefined} value={typeof EyeMotionScale === "object" && "value" in EyeMotionScale ? EyeMotionScale?.value : EyeMotionScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EyeMotionExp" id={typeof EyeMotionExp === "object" && "id" in EyeMotionExp ? EyeMotionExp?.id : undefined} value={typeof EyeMotionExp === "object" && "value" in EyeMotionExp ? EyeMotionExp?.value : EyeMotionExp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSwing" id={typeof MaxSwing === "object" && "id" in MaxSwing ? MaxSwing?.id : undefined} value={typeof MaxSwing === "object" && "value" in MaxSwing ? MaxSwing?.value : MaxSwing} /* default: 0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.EyeRotationDriver+Eye]`} name="Eyes" id={typeof Eyes === "object" && "id" in Eyes ? Eyes?.id : undefined} value={typeof Eyes === "object" && "value" in Eyes ? Eyes?.value : Eyes} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.EyeRotationDriver+Eye] */  />
        </Component>
      );
    };
    