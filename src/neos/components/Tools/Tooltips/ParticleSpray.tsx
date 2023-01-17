import { member, Member, Component } from "../../../core";
    
    export interface ParticleSprayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TipReference?: member<any>;
BlockGripEquip?: member<boolean>;
BlockRemoteEquip?: member<boolean>;
EquipName?: member<any>;
_overrideActiveTool?: member<any>;
_gripPosesGenerated?: member<boolean>;
Rate?: member<number>;
RateExp?: member<number>;
MinSpeed?: member<number>;
MaxSpeed?: member<number>;
partStyle?: member<any>;
partEmitter?: member<any>;
    }
    
    export function ParticleSpray(props: ParticleSprayInput){
      const { id, persistentId, updateOrder, Enabled,
TipReference,
BlockGripEquip,
BlockRemoteEquip,
EquipName,
_overrideActiveTool,
_gripPosesGenerated,
Rate,
RateExp,
MinSpeed,
MaxSpeed,
partStyle,
partEmitter, } = props;
    
      return (
        <Component type="FrooxEngine.ParticleSpray" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TipReference" id={typeof TipReference === "object" && "id" in TipReference ? TipReference?.id : undefined} value={typeof TipReference === "object" && "value" in TipReference ? TipReference?.value : TipReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockGripEquip" id={typeof BlockGripEquip === "object" && "id" in BlockGripEquip ? BlockGripEquip?.id : undefined} value={typeof BlockGripEquip === "object" && "value" in BlockGripEquip ? BlockGripEquip?.value : BlockGripEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockRemoteEquip" id={typeof BlockRemoteEquip === "object" && "id" in BlockRemoteEquip ? BlockRemoteEquip?.id : undefined} value={typeof BlockRemoteEquip === "object" && "value" in BlockRemoteEquip ? BlockRemoteEquip?.value : BlockRemoteEquip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EquipName" id={typeof EquipName === "object" && "id" in EquipName ? EquipName?.id : undefined} value={typeof EquipName === "object" && "value" in EquipName ? EquipName?.value : EquipName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonTool]`} name="_overrideActiveTool" id={typeof _overrideActiveTool === "object" && "id" in _overrideActiveTool ? _overrideActiveTool?.id : undefined} value={typeof _overrideActiveTool === "object" && "value" in _overrideActiveTool ? _overrideActiveTool?.value : _overrideActiveTool} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_gripPosesGenerated" id={typeof _gripPosesGenerated === "object" && "id" in _gripPosesGenerated ? _gripPosesGenerated?.id : undefined} value={typeof _gripPosesGenerated === "object" && "value" in _gripPosesGenerated ? _gripPosesGenerated?.value : _gripPosesGenerated} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Rate" id={typeof Rate === "object" && "id" in Rate ? Rate?.id : undefined} value={typeof Rate === "object" && "value" in Rate ? Rate?.value : Rate} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RateExp" id={typeof RateExp === "object" && "id" in RateExp ? RateExp?.id : undefined} value={typeof RateExp === "object" && "value" in RateExp ? RateExp?.value : RateExp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinSpeed" id={typeof MinSpeed === "object" && "id" in MinSpeed ? MinSpeed?.id : undefined} value={typeof MinSpeed === "object" && "value" in MinSpeed ? MinSpeed?.value : MinSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSpeed" id={typeof MaxSpeed === "object" && "id" in MaxSpeed ? MaxSpeed?.id : undefined} value={typeof MaxSpeed === "object" && "value" in MaxSpeed ? MaxSpeed?.value : MaxSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ParticleStyle]`} name="partStyle" id={typeof partStyle === "object" && "id" in partStyle ? partStyle?.id : undefined} value={typeof partStyle === "object" && "value" in partStyle ? partStyle?.value : partStyle} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ParticleEmitter]`} name="partEmitter" id={typeof partEmitter === "object" && "id" in partEmitter ? partEmitter?.id : undefined} value={typeof partEmitter === "object" && "value" in partEmitter ? partEmitter?.value : partEmitter} /* default: ID0 */  />
        </Component>
      );
    };
    