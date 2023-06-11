import { member, Member, Component } from "../../../core";
    
    export interface GetAsset_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Provider?: member<any>;
    }
    
    export function GetAsset_A(props: GetAsset_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Provider, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Assets.GetAsset\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IAssetProvider\`1[A]]`} name="Provider" id={typeof Provider === "object" && "id" in Provider ? Provider?.id : undefined} value={typeof Provider === "object" && "value" in Provider ? Provider?.value : Provider} /* default: null */  isRaw={typeof Provider === "object" && "isRaw" in Provider && Provider.isRaw ? true : undefined} />
        </Component>
      );
    };
    