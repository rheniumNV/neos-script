import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AssetOptimizationWizardInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Root?: member<any>;
IgnoreNonpersistentUsers?: member<boolean>;
_maxResolution?: member<any>;
_message?: member<any>;
    }
    
    export function AssetOptimizationWizard(props: AssetOptimizationWizardInput){
      const { id, persistentId, updateOrder, Enabled,
Root,
IgnoreNonpersistentUsers,
_maxResolution,
_message, } = props;
    
      return (
        <Component type="FrooxEngine.AssetOptimizationWizard" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreNonpersistentUsers" id={typeof IgnoreNonpersistentUsers === "object" && "id" in IgnoreNonpersistentUsers ? IgnoreNonpersistentUsers?.id : undefined} value={typeof IgnoreNonpersistentUsers === "object" && "value" in IgnoreNonpersistentUsers ? IgnoreNonpersistentUsers?.value : IgnoreNonpersistentUsers} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IntTextEditorParser]`} name="_maxResolution" id={typeof _maxResolution === "object" && "id" in _maxResolution ? _maxResolution?.id : undefined} value={typeof _maxResolution === "object" && "value" in _maxResolution ? _maxResolution?.value : _maxResolution} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_message" id={typeof _message === "object" && "id" in _message ? _message?.id : undefined} value={typeof _message === "object" && "value" in _message ? _message?.value : _message} /* default: ID0 */  />
        </Component>
      );
    };
    