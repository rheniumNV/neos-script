import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncType`} name="_initializer" id={typeof _initializer === "object" && "id" in _initializer ? _initializer?.id : undefined} value={typeof _initializer === "object" && "value" in _initializer ? _initializer?.value : _initializer} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_initializedVersion" id={typeof _initializedVersion === "object" && "id" in _initializedVersion ? _initializedVersion?.id : undefined} value={typeof _initializedVersion === "object" && "value" in _initializedVersion ? _initializedVersion?.value : _initializedVersion} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isModified" id={typeof _isModified === "object" && "id" in _isModified ? _isModified?.id : undefined} value={typeof _isModified === "object" && "value" in _isModified ? _isModified?.value : _isModified} /* default: false */  />
        </Component>
      );
    };
    