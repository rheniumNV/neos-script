import { member, Member, Component } from "../../../core";
    
    export interface MirrorTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MirrorSource?: member<any>;
MirrorPlane?: member<any>;
MirrorOffset?: member<[number, number, number]>;
MirrorNormal?: member<[number, number, number]>;
AllowWriteBack?: member<boolean>;
_position?: member<any>;
_rotation?: member<any>;
    }
    
    export function MirrorTransform(props: MirrorTransformInput){
      const { id, persistentId, updateOrder, Enabled,
MirrorSource,
MirrorPlane,
MirrorOffset,
MirrorNormal,
AllowWriteBack,
_position,
_rotation, } = props;
    
      return (
        <Component type="FrooxEngine.MirrorTransform" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="MirrorSource" id={typeof MirrorSource === "object" && "id" in MirrorSource ? MirrorSource?.id : undefined} value={typeof MirrorSource === "object" && "value" in MirrorSource ? MirrorSource?.value : MirrorSource} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="MirrorPlane" id={typeof MirrorPlane === "object" && "id" in MirrorPlane ? MirrorPlane?.id : undefined} value={typeof MirrorPlane === "object" && "value" in MirrorPlane ? MirrorPlane?.value : MirrorPlane} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MirrorOffset" id={typeof MirrorOffset === "object" && "id" in MirrorOffset ? MirrorOffset?.id : undefined} value={typeof MirrorOffset === "object" && "value" in MirrorOffset ? MirrorOffset?.value : MirrorOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MirrorNormal" id={typeof MirrorNormal === "object" && "id" in MirrorNormal ? MirrorNormal?.id : undefined} value={typeof MirrorNormal === "object" && "value" in MirrorNormal ? MirrorNormal?.value : MirrorNormal} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowWriteBack" id={typeof AllowWriteBack === "object" && "id" in AllowWriteBack ? AllowWriteBack?.id : undefined} value={typeof AllowWriteBack === "object" && "value" in AllowWriteBack ? AllowWriteBack?.value : AllowWriteBack} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  />
        </Component>
      );
    };
    