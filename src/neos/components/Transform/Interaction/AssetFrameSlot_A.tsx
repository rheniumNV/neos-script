import { member, Member, Component } from "../../../core";
    
    export interface AssetFrameSlot_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FrameSize?: member<number>;
FrameAnimSpeed?: member<number>;
SnapAnimTime?: member<number>;
Callback?: member<any>;
_current?: member<any>;
_currentRatio?: member<[number, number]>;
_frameSize?: member<any>;
_collider?: member<any>;
    }
    
    export function AssetFrameSlot_A(props: AssetFrameSlot_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
FrameSize,
FrameAnimSpeed,
SnapAnimTime,
Callback,
_current,
_currentRatio,
_frameSize,
_collider, } = props;
    
      return (
        <Component type={`FrooxEngine.AssetFrameSlot\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FrameSize" id={typeof FrameSize === "object" && "id" in FrameSize ? FrameSize?.id : undefined} value={typeof FrameSize === "object" && "value" in FrameSize ? FrameSize?.value : FrameSize} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FrameAnimSpeed" id={typeof FrameAnimSpeed === "object" && "id" in FrameAnimSpeed ? FrameAnimSpeed?.id : undefined} value={typeof FrameAnimSpeed === "object" && "value" in FrameAnimSpeed ? FrameAnimSpeed?.value : FrameAnimSpeed} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapAnimTime" id={typeof SnapAnimTime === "object" && "id" in SnapAnimTime ? SnapAnimTime?.id : undefined} value={typeof SnapAnimTime === "object" && "value" in SnapAnimTime ? SnapAnimTime?.value : SnapAnimTime} /* default: null */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.IAssetProvider\`1[A]]]`} name="Callback" id={typeof Callback === "object" && "id" in Callback ? Callback?.id : undefined} value={typeof Callback === "object" && "value" in Callback ? Callback?.value : Callback} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_current" id={typeof _current === "object" && "id" in _current ? _current?.id : undefined} value={typeof _current === "object" && "value" in _current ? _current?.value : _current} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="_currentRatio" id={typeof _currentRatio === "object" && "id" in _currentRatio ? _currentRatio?.id : undefined} value={typeof _currentRatio === "object" && "value" in _currentRatio ? _currentRatio?.value : _currentRatio} /* default: [0; 0] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_frameSize" id={typeof _frameSize === "object" && "id" in _frameSize ? _frameSize?.id : undefined} value={typeof _frameSize === "object" && "value" in _frameSize ? _frameSize?.value : _frameSize} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BoxCollider]`} name="_collider" id={typeof _collider === "object" && "id" in _collider ? _collider?.id : undefined} value={typeof _collider === "object" && "value" in _collider ? _collider?.value : _collider} /* default: ID0 */  />
        </Component>
      );
    };
    