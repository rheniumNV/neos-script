import { member, Member, Component } from "../../../core";
    
    export interface AutoLookAtUserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RetargetDistance?: member<number>;
LerpSpeed?: member<number>;
TargetedUser?: member<any>;
AutoTarget?: member<boolean>;
ExcludeActiveUser?: member<boolean>;
SwingReference?: member<[number, number, number]>;
TwistReference?: member<[number, number, number]>;
MaxSwing?: member<number>;
MaxTwist?: member<number>;
_rotation?: member<any>;
    }
    
    export function AutoLookAtUser(props: AutoLookAtUserInput){
      const { id, persistentId, updateOrder, Enabled,
RetargetDistance,
LerpSpeed,
TargetedUser,
AutoTarget,
ExcludeActiveUser,
SwingReference,
TwistReference,
MaxSwing,
MaxTwist,
_rotation, } = props;
    
      return (
        <Component type="FrooxEngine.AutoLookAtUser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RetargetDistance" id={typeof RetargetDistance === "object" && "id" in RetargetDistance ? RetargetDistance?.id : undefined} value={typeof RetargetDistance === "object" && "value" in RetargetDistance ? RetargetDistance?.value : RetargetDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LerpSpeed" id={typeof LerpSpeed === "object" && "id" in LerpSpeed ? LerpSpeed?.id : undefined} value={typeof LerpSpeed === "object" && "value" in LerpSpeed ? LerpSpeed?.value : LerpSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="TargetedUser" id={typeof TargetedUser === "object" && "id" in TargetedUser ? TargetedUser?.id : undefined} value={typeof TargetedUser === "object" && "value" in TargetedUser ? TargetedUser?.value : TargetedUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoTarget" id={typeof AutoTarget === "object" && "id" in AutoTarget ? AutoTarget?.id : undefined} value={typeof AutoTarget === "object" && "value" in AutoTarget ? AutoTarget?.value : AutoTarget} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ExcludeActiveUser" id={typeof ExcludeActiveUser === "object" && "id" in ExcludeActiveUser ? ExcludeActiveUser?.id : undefined} value={typeof ExcludeActiveUser === "object" && "value" in ExcludeActiveUser ? ExcludeActiveUser?.value : ExcludeActiveUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SwingReference" id={typeof SwingReference === "object" && "id" in SwingReference ? SwingReference?.id : undefined} value={typeof SwingReference === "object" && "value" in SwingReference ? SwingReference?.value : SwingReference} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TwistReference" id={typeof TwistReference === "object" && "id" in TwistReference ? TwistReference?.id : undefined} value={typeof TwistReference === "object" && "value" in TwistReference ? TwistReference?.value : TwistReference} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSwing" id={typeof MaxSwing === "object" && "id" in MaxSwing ? MaxSwing?.id : undefined} value={typeof MaxSwing === "object" && "value" in MaxSwing ? MaxSwing?.value : MaxSwing} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTwist" id={typeof MaxTwist === "object" && "id" in MaxTwist ? MaxTwist?.id : undefined} value={typeof MaxTwist === "object" && "value" in MaxTwist ? MaxTwist?.value : MaxTwist} /* default: 0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  />
        </Component>
      );
    };
    