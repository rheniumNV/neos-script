import { member, Member, Component } from "../../core";
    
    export interface ReflectionProbeWizardInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
ProcessDisabled?: member<boolean>;
TeleportUserToProbe?: member<boolean>;
_tag?: member<any>;
_delayBetweenProbes?: member<any>;
_bakeCount?: member<number>;
_bakeIndex?: member<number>;
    }
    
    export function ReflectionProbeWizard(props: ReflectionProbeWizardInput){
      const { id, persistentId, updateOrder, Enabled,
Root,
ProcessDisabled,
TeleportUserToProbe,
_tag,
_delayBetweenProbes,
_bakeCount,
_bakeIndex, } = props;
    
      return (
        <Component type="FrooxEngine.ReflectionProbeWizard" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  isRaw={typeof Root === "object" && "isRaw" in Root && Root.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ProcessDisabled" id={typeof ProcessDisabled === "object" && "id" in ProcessDisabled ? ProcessDisabled?.id : undefined} value={typeof ProcessDisabled === "object" && "value" in ProcessDisabled ? ProcessDisabled?.value : ProcessDisabled} /* default: false */  isRaw={typeof ProcessDisabled === "object" && "isRaw" in ProcessDisabled && ProcessDisabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TeleportUserToProbe" id={typeof TeleportUserToProbe === "object" && "id" in TeleportUserToProbe ? TeleportUserToProbe?.id : undefined} value={typeof TeleportUserToProbe === "object" && "value" in TeleportUserToProbe ? TeleportUserToProbe?.value : TeleportUserToProbe} /* default: false */  isRaw={typeof TeleportUserToProbe === "object" && "isRaw" in TeleportUserToProbe && TeleportUserToProbe.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_tag" id={typeof _tag === "object" && "id" in _tag ? _tag?.id : undefined} value={typeof _tag === "object" && "value" in _tag ? _tag?.value : _tag} /* default: ID0 */  isRaw={typeof _tag === "object" && "isRaw" in _tag && _tag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_delayBetweenProbes" id={typeof _delayBetweenProbes === "object" && "id" in _delayBetweenProbes ? _delayBetweenProbes?.id : undefined} value={typeof _delayBetweenProbes === "object" && "value" in _delayBetweenProbes ? _delayBetweenProbes?.value : _delayBetweenProbes} /* default: ID0 */  isRaw={typeof _delayBetweenProbes === "object" && "isRaw" in _delayBetweenProbes && _delayBetweenProbes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_bakeCount" id={typeof _bakeCount === "object" && "id" in _bakeCount ? _bakeCount?.id : undefined} value={typeof _bakeCount === "object" && "value" in _bakeCount ? _bakeCount?.value : _bakeCount} /* default: 0 */  isRaw={typeof _bakeCount === "object" && "isRaw" in _bakeCount && _bakeCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_bakeIndex" id={typeof _bakeIndex === "object" && "id" in _bakeIndex ? _bakeIndex?.id : undefined} value={typeof _bakeIndex === "object" && "value" in _bakeIndex ? _bakeIndex?.value : _bakeIndex} /* default: 0 */  isRaw={typeof _bakeIndex === "object" && "isRaw" in _bakeIndex && _bakeIndex.isRaw ? true : undefined} />
        </Component>
      );
    };
    