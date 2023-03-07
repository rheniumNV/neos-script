import { member, Member, Component } from "../../../core";
    
    export interface KnobControlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Callback?: member<any>;
RotationAxis?: member<[number, number, number]>;
Rate?: member<number>;
Min?: member<number>;
Max?: member<number>;
_lastRotation?: member<number>;
_lastAxis?: member<[number, number, number]>;
_lastUser?: member<any>;
    }
    
    export function KnobControl(props: KnobControlInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
Callback,
RotationAxis,
Rate,
Min,
Max,
_lastRotation,
_lastAxis,
_lastUser, } = props;
    
      return (
        <Component type="FrooxEngine.KnobControl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[System.Single]]`} name="Callback" id={typeof Callback === "object" && "id" in Callback ? Callback?.id : undefined} value={typeof Callback === "object" && "value" in Callback ? Callback?.value : Callback} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="RotationAxis" id={typeof RotationAxis === "object" && "id" in RotationAxis ? RotationAxis?.id : undefined} value={typeof RotationAxis === "object" && "value" in RotationAxis ? RotationAxis?.value : RotationAxis} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Rate" id={typeof Rate === "object" && "id" in Rate ? Rate?.id : undefined} value={typeof Rate === "object" && "value" in Rate ? Rate?.value : Rate} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Min" id={typeof Min === "object" && "id" in Min ? Min?.id : undefined} value={typeof Min === "object" && "value" in Min ? Min?.value : Min} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Max" id={typeof Max === "object" && "id" in Max ? Max?.id : undefined} value={typeof Max === "object" && "value" in Max ? Max?.value : Max} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_lastRotation" id={typeof _lastRotation === "object" && "id" in _lastRotation ? _lastRotation?.id : undefined} value={typeof _lastRotation === "object" && "value" in _lastRotation ? _lastRotation?.value : _lastRotation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_lastAxis" id={typeof _lastAxis === "object" && "id" in _lastAxis ? _lastAxis?.id : undefined} value={typeof _lastAxis === "object" && "value" in _lastAxis ? _lastAxis?.value : _lastAxis} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_lastUser" id={typeof _lastUser === "object" && "id" in _lastUser ? _lastUser?.id : undefined} value={typeof _lastUser === "object" && "value" in _lastUser ? _lastUser?.value : _lastUser} /* default: ID0 */  />
        </Component>
      );
    };
    