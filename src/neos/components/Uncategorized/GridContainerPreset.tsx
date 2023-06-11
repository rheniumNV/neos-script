import { member, Member, Component } from "../../core";
    
    export interface GridContainerPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_initializer?: member<any>;
_initializedVersion?: member<number>;
_isModified?: member<boolean>;
    }
    
    export function GridContainerPreset(props: GridContainerPresetInput){
      const { id, persistentId, updateOrder, Enabled,
_initializer,
_initializedVersion,
_isModified, } = props;
    
      return (
        <Component type="FrooxEngine.GridContainerPreset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncType`} name="_initializer" id={typeof _initializer === "object" && "id" in _initializer ? _initializer?.id : undefined} value={typeof _initializer === "object" && "value" in _initializer ? _initializer?.value : _initializer} /* default: <i>null</i> */  isRaw={typeof _initializer === "object" && "isRaw" in _initializer && _initializer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_initializedVersion" id={typeof _initializedVersion === "object" && "id" in _initializedVersion ? _initializedVersion?.id : undefined} value={typeof _initializedVersion === "object" && "value" in _initializedVersion ? _initializedVersion?.value : _initializedVersion} /* default: 0 */  isRaw={typeof _initializedVersion === "object" && "isRaw" in _initializedVersion && _initializedVersion.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isModified" id={typeof _isModified === "object" && "id" in _isModified ? _isModified?.id : undefined} value={typeof _isModified === "object" && "value" in _isModified ? _isModified?.value : _isModified} /* default: false */  isRaw={typeof _isModified === "object" && "isRaw" in _isModified && _isModified.isRaw ? true : undefined} />
        </Component>
      );
    };
    